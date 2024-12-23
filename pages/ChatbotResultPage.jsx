import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import FooterNavigationBar from "../shared/components/FooterNavigationBar";
import StandardBackground from "../shared/components/StandardBackground";
import StandardMovieCard from "../shared/components/StandardMovieCard";
import ResultMessage from "../entities/Chatbot/ui/ResultMessage";
import ResultButton from "../entities/Chatbot/ui/ResultButton";
import { getMoviesByTitle } from "../api/movies"; // 제목으로 영화 검색 함수 import

export default function ChatbotResultPage({ route }) {
  const { movieTitle } = route.params; // movieTitle 받아오기
  const [movie, setMovie] = useState(null); // 영화 데이터를 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const userName = '혜진';
  const defaultMoviePoster = 'https://ifh.cc/g/P0CMjF.png'; //default 포스터 이미지 주소

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const moviesList = await getMoviesByTitle(movieTitle); // 제목으로 영화 검색
        setMovie(moviesList[0]); // 첫 번째 결과를 선택
      } catch (error) {
        console.error("Error fetching movie by title:", error);
      } finally {
        setLoading(false);
      }
    };

    if (movieTitle) {
      fetchMovie();
    }
  }, [movieTitle]);

  if (loading) {
    return (
      <StandardBackground>
        <Container>
          <MessageText>로딩 중...</MessageText>
        </Container>
      </StandardBackground>
    );
  }

  return (
    <>
      <StandardBackground>
        <Container>
          {/* 영화 카드 */}
          {movie ? (
            <StandardMovieCard
              key={movie.id}
              moviePoster={movie.poster}
              movieTitle={movie.title}
              movieCategory={movie.genre.join(" #")}
              movieReleaseDate={movie.release_date}
            />
          ) : (
            // DB에 없는 경우
            <StandardMovieCard
            key={"placeholder"} // movie가 없을 때 고유한 키 값
            moviePoster={defaultMoviePoster}
            movieTitle={movieTitle}
            movieCategory="세부정보 확인 불가"
            movieReleaseDate="세부정보 확인 불가"
            />          
          )}
          {/* 결과 메시지 */}
          <ResultMessage UserName={userName} MovieTitle={movie?.title || movieTitle} />
          {/* 결과 버튼 */}
          <ResultButton />
        </Container>
      </StandardBackground>

      {/* 하단 네비게이션 바 */}
      <FooterNavigationBar />
    </>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const MessageText = styled.Text`
  font-size: 18px;
  color: gray;
  margin-bottom: 20px;
`;
