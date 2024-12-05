import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, Image, Modal, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';
import { GOOGLE_API_KEY } from '../config/keys'; // Google Maps API 키 파일
import FooterNavigationBar from '../shared/components/FooterNavigationBar';
import cinemaData from '../data/cinemaData';
import Background from '../shared/components/StandardBackground';

export default function MapPage() {
  const [location, setLocation] = useState(null); // 사용자 위치 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [errorMsg, setErrorMsg] = useState(null); // 오류 메시지
  const [cinemas, setCinemas] = useState([]); // 영화관 데이터
  const [region, setRegion] = useState(null); // 현재 지도 영역
  const [address, setAddress] = useState(''); // 현재 위치 주소
  const isFetching = useRef(false); // 데이터를 가져오는 중인지 추적
  const [selectedCinema, setSelectedCinema] = useState(null); // 선택된 영화관 영화 데이터
  const [modalVisible, setModalVisible] = useState(false); // 모달 상태

  const fetchCinemas = async (coords) => {
    try {
      if (isFetching.current) return; // 이미 데이터를 가져오는 중이라면 중복 호출 방지
      isFetching.current = true;

      const fetchCinemasByBrand = async (brand) => {
        const response = await axios.get(
          'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
          {
            params: {
              location: `${coords.latitude},${coords.longitude}`, // 기준 위치
              radius: 20000, // 반경 20km
              keyword: brand,
              type: 'movie_theater', // 영화관 타입
              key: GOOGLE_API_KEY, // API 키
            },
          }
        );

        console.log(`Cinemas for brand ${brand}:`, response.data.results); // 응답 데이터 출력
        return response.data.results;
      };

      const cgvCinemas = await fetchCinemasByBrand('CGV');
      const lotteCinemas = await fetchCinemasByBrand('롯데시네마');
      const megaboxCinemas = await fetchCinemasByBrand('메가박스');

      const allCinemas = [...cgvCinemas, ...lotteCinemas, ...megaboxCinemas];
      const uniqueCinemas = Array.from(
        new Set(allCinemas.map((cinema) => cinema.place_id))
      ).map((id) => allCinemas.find((cinema) => cinema.place_id === id));

      setCinemas(uniqueCinemas);
    } catch (error) {
      console.error('Error fetching cinemas:', error.response ? error.response.data : error.message);
    } finally {
      isFetching.current = false;
    }
  };

  // 초기 사용자 위치 가져오기
  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          setLoading(false);
          return;
        }

        const userLocation = await Location.getCurrentPositionAsync({});
        const coords = {
          latitude: userLocation.coords.latitude,
          longitude: userLocation.coords.longitude,
        };

        setLocation(coords);
        setRegion({
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.06,
          longitudeDelta: 0.06,
        });

        // 역지오코딩을 통해 주소 가져오기
        const [geocodeAddress] = await Location.reverseGeocodeAsync(coords);
        console.log('Reverse geocoded address: ', geocodeAddress);

        const formattedAddress = `${geocodeAddress.city || ''} ${geocodeAddress.street || ''}`;
        setAddress(formattedAddress || 'Unknown location');

        await fetchCinemas(coords); // 초기 영화관 데이터
      } catch (error) {
        console.error('Error fetching initial location:', error.message);
        setErrorMsg('Error fetching initial location');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const onRegionChangeComplete = (newRegion) => {
    // 지도 이동 이벤트 처리
    if (!region) return;
    const distanceMoved = Math.sqrt(
      Math.pow(newRegion.latitude - region.latitude, 2) +
        Math.pow(newRegion.longitude - region.longitude, 2)
    );

    if (distanceMoved > 0.01) { // 일정 거리 이상 이동한 경우에만 데이터 요청
      setRegion(newRegion);
      fetchCinemas({
        latitude: newRegion.latitude,
        longitude: newRegion.longitude,
      });
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (errorMsg) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{errorMsg}</Text>
      </View>
    );
  }

  // 마커 클릭 이벤트 핸들러
  const onMarkerPress = (placeId) => {
    console.log("Clicked place_id:", placeId); // 디버깅용 로그
    const movies = cinemaData[placeId] || []; // place_id로 데이터 매핑
    console.log("Movies fetched:", movies); // 연결된 데이터 확인
    setSelectedCinema(movies);
    setModalVisible(true); // 모달 열기
  };  

  return (
    <>
      <Background>
        <View style={styles.container}>
          {/* 지도 위에 배경 이미지 */}
          <Image
            source={require('../assets/map-bg.png')} // 로컬 PNG 이미지 경로
            style={styles.mapCard}
            resizeMode="contain"
          />
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.06,
              longitudeDelta: 0.06,
            }}
            showsUserLocation={true} // 현재 위치를 기본 마커로 표시
          >
            {/* 현재 위치 마커 */}
            <Marker
              coordinate={location}
              title={address}
              description={"저는 여기 있어요!"}
              anchor={{ x: 0.5, y: 0.5 }} // 마커 기준점을 조정
            >
              <Image
                source={require('../assets/mapicon.jpg')} // 로컬 이미지 경로
                style={{
                  width: 40, // 너비 조정
                  height: 40, // 높이 조정
                  transform: [{ translateY: -25 }], // 이미지 상단으로 이동
                }}
                resizeMode="contain" // 이미지 비율 유지
              />
            </Marker>

            {/* 영화관 마커 */}
            {cinemas.map((cinema, index) => {
              if (!cinema.geometry || !cinema.geometry.location) {
                return null;
              }
              return (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: cinema.geometry.location.lat,
                    longitude: cinema.geometry.location.lng,
                  }}
                  title={cinema.name}
                  description={cinema.vicinity}
                  onPress={() => onMarkerPress(`cinema${index + 1}`)} // 마커 클릭 핸들러 연결
                />
              );
            })}
          </MapView>
        </View>
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Movies Playing</Text>
            {selectedCinema && selectedCinema.length > 0 ? (
              <FlatList
                data={selectedCinema}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={styles.movieItem}>
                    <Text style={styles.movieTitle}>{item.title}</Text>
                    <Text style={styles.showtimes}>
                      {item.showtimes.join(", ")}
                    </Text>
                  </View>
                )}
              />
            ) : (
              <Text>No movies available for this cinema.</Text>
            )}

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </Background>

      {/* 하단 네비게이션 바 푸터 */}
      <FooterNavigationBar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 화면 전체를 차지하도록 설정
    justifyContent: 'center', // 세로 방향 중앙 정렬
    alignItems: 'center', // 가로 방향 중앙 정렬
    paddingTop: 50, // 상단에서 50px 띄우기
  },
  map: {
    position: 'absolute', // 지도 위치를 고정
    ...StyleSheet.absoluteFillObject, // 지도는 화면 전체를 채움
    zIndex: 3, // 이미지 위에 지도 표시
    top: 100, // 상단에서 100px 떨어짐
    left: -135, // 왼쪽에서 45px 띄움
    right: 20, // 오른쪽에서 20px 띄움
    height: 520, // 지도 높이
    width: 270, // 지도 너비
    borderWidth: 0, // 테두리 추가
    borderColor: '#000', // 테두리 색상
    borderRadius: 25, // 테두리에 둥근 모서리 효과 추가
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red', // 오류 메시지 색상
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  movieItem: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    width: "90%",
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  showtimes: {
    fontSize: 14,
    color: "#555",
  },
  closeButton: {
    position: "absolute", // 위치를 고정
    bottom: 40, // 화면 하단에서 위로 20px 위치
    alignSelf: "center", // 수평 가운데 정렬
    padding: 10,
    backgroundColor: "#C73659",
    borderRadius: 5,
  },  
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  mapCard: {
    position: 'absolute', // 배경 이미지를 절대 위치로 설정
    top: 50, // 지도 위 50px 위치
    alignSelf: 'center', // 화면 가로 중심 정렬
    width: 1500, // 원하는 너비 설정
    height: 680, // 원하는 높이 설정
    zIndex: 2 // 배경 이미지는 기본 계층
  }
});
