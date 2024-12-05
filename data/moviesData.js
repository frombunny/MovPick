// Firebase DB에 넣을 data
const moviesData = [
    // 외국 영화
    {
      title: '매드 맥스: 분노의 도로',
      actors: ['톰 하디', '샤를리즈 테론', '니콜라스 홀트'],
      description:
        '포스트 아포칼립스 세상에서 유랑자와 반역자가 물 공급을 장악한 폭군을 무너뜨리기 위해 협력한다.',
      duration: 120,
      genre: ['액션'],
      poster: null,
      rating: '15세 이상 관람가',
      release_date: '2015.05.14',
    },
    {
      title: '존 윅',
      actors: ['키아누 리브스', '마이클 니퀴스트', '알피 앨런'],
      description:
        '은퇴한 킬러가 자신의 차를 훔치고 개를 죽인 자들에게 복수를 시작한다.',
      duration: 101,
      genre: ['액션'],
      poster: null,
      rating: '19세 이상 관람가',
      release_date: '2014.10.24',
    },
    {
      title: '인셉션',
      actors: ['레오나르도 디카프리오', '조셉 고든 레빗', '엘렌 페이지'],
      description:
        "꿈을 공유하는 기술을 이용해 기업 비밀을 훔치는 도둑이 자신의 범죄 기록을 지우기 위해 '인셉션'을 수행하라는 미션을 받는다.",
      duration: 148,
      genre: ['스릴러'],
      poster: null,
      rating: '12세 이상 관람가',
      release_date: '2010.07.21',
    },
    {
      title: '세븐',
      actors: ['브래드 피트', '모건 프리먼', '케빈 스페이시'],
      description:
        '두 형사가 7가지 죄악을 동기로 살인을 저지르는 연쇄살인범을 추적한다.',
      duration: 127,
      genre: ['스릴러'],
      poster: null,
      rating: '19세 이상 관람가',
      release_date: '1995.09.22',
    },
    {
      title: '그랜드 부다페스트 호텔',
      actors: ['랄프 파인즈', '틸다 스윈튼', '에이드리언 브로디'],
      description:
        '유럽의 유명 호텔에서 전설적인 컨시어지와 그의 충실한 로비 보이의 모험 이야기.',
      duration: 99,
      genre: ['코미디'],
      poster: null,
      rating: '15세 이상 관람가',
      release_date: '2014.03.20',
    },
    {
      title: '슈퍼배드',
      actors: ['조나 힐', '마이클 세라', '엠마 스톤'],
      description:
        '졸업 전 마지막 파티에서 술을 사기 위해 고군분투하는 어색한 고등학생 두 명의 이야기.',
      duration: 113,
      genre: ['코미디'],
      poster: null,
      rating: '15세 이상 관람가',
      release_date: '2007.08.17',
    },
    {
      title: '오만과 편견',
      actors: ['키이라 나이틀리', '매튜 맥퍼딘', '로잘린드 파이크'],
      description:
        '19세기 영국에서 엘리자베스 베넷이 겪는 성장, 결혼, 도덕적 선택의 이야기.',
      duration: 129,
      genre: ['로맨스'],
      poster: null,
      rating: '12세 이상 관람가',
      release_date: '2005.09.16',
    },
    {
      title: '노트북',
      actors: ['라이언 고슬링', '레이첼 맥아담스', '제임스 가너'],
      description:
        '1940년 여름에 사랑에 빠진 젊은 커플이 사회적 차이와 전쟁으로 인해 이별하게 되는 이야기.',
      duration: 123,
      genre: ['로맨스'],
      poster: null,
      rating: '15세 이상 관람가',
      release_date: '2004.06.25',
    },
    {
      title: '인터스텔라',
      actors: ['매튜 맥커너히', '앤 해서웨이', '제시카 차스테인'],
      description:
        '인류의 생존을 위해 웜홀을 통해 새로운 거주지를 찾으러 떠나는 탐험대의 이야기.',
      duration: 169,
      genre: ['SF'],
      poster: null,
      rating: '12세 이상 관람가',
      release_date: '2014.11.07',
    },
    {
      title: '매트릭스',
      actors: ['키아누 리브스', '캐리 앤 모스', '로렌스 피쉬번'],
      description:
        '해커가 현실의 본질을 발견하고 인류를 지배하는 자들에 대항하는 반란에 참여한다.',
      duration: 136,
      genre: ['SF'],
      poster: null,
      rating: '15세 이상 관람가',
      release_date: '1999.03.31',
    },
    {
      title: '반지의 제왕: 반지 원정대',
      actors: ['일라이저 우드', '이안 맥켈런', '리브 타일러'],
      description:
        '호빗과 그의 동료들이 강력한 반지를 파괴하기 위해 떠나는 여정.',
      duration: 178,
      genre: ['판타지'],
      poster: null,
      rating: '12세 이상 관람가',
      release_date: '2001.12.19',
    },
    {
      title: '해리 포터와 마법사의 돌',
      actors: ['다니엘 래드클리프', '엠마 왓슨', '루퍼트 그린트'],
      description:
        '자신이 마법사라는 사실을 알게 된 소년이 마법 학교에 입학하면서 벌어지는 이야기.',
      duration: 152,
      genre: ['판타지'],
      poster: null,
      rating: '전체 관람가',
      release_date: '2001.11.16',
    },
    {
      title: '컨저링',
      actors: ['베라 파미가', '패트릭 윌슨', '릴리 테일러'],
      description:
        '어두운 존재에 의해 고통받는 가족을 돕기 위해 초자연적 연구자들이 나선다.',
      duration: 112,
      genre: ['공포'],
      poster: null,
      rating: '15세 이상 관람가',
      release_date: '2013.07.19',
    },
    {
      title: '겟 아웃',
      actors: ['다니엘 칼루야', '앨리슨 윌리엄스', '캐서린 키너'],
      description:
        '흑인 남성이 백인 여자친구의 가족을 방문하며 충격적인 비밀을 발견한다.',
      duration: 104,
      genre: ['공포'],
      poster: null,
      rating: '15세 이상 관람가',
      release_date: '2017.02.24',
    },
    {
      title: '센과 치히로의 행방불명',
      actors: ['히이라기 루미', '이리노 미유', '나츠키 마리'],
      description:
        '신비한 세계에 갇힌 소녀가 부모를 구하고 집으로 돌아가기 위해 목욕탕에서 일하게 되는 이야기.',
      duration: 125,
      genre: ['애니메이션'],
      poster: null,
      rating: '전체 관람가',
      release_date: '2001.07.20',
    },
    {
      title: '토이 스토리',
      actors: ['톰 행크스', '팀 알렌', '돈 릭스'],
      description:
        '소년의 장난감들이 생명을 얻어 그가 없을 때 모험을 떠나는 이야기.',
      duration: 81,
      genre: ['애니메이션'],
      poster: null,
      rating: '전체 관람가',
      release_date: '1995.11.22',
    },
    {
      title: '겨울왕국',
      actors: ['크리스틴 벨', '이디나 멘젤', '조나단 그로프'],
      description:
        '영원한 겨울에 갇힌 왕국에서 사랑과 책임을 배우는 두 자매의 이야기.',
      duration: 102,
      genre: ['애니메이션'],
      poster: null,
      rating: '전체 관람가',
      release_date: '2013.11.27',
    },
    {
      title: '블레이드 러너',
      actors: ['해리슨 포드', '숀 영', '에드워드 제임스 올모스'],
      description:
        '미래 도시에서 복제 인간을 추적하고 제거하는 블레이드 러너의 이야기.',
      duration: 117,
      genre: ['SF'],
      poster: null,
      rating: '15세 이상 관람가',
      release_date: '1982.06.25',
    },
    {
      title: '양들의 침묵',
      actors: ['조디 포스터', '앤소니 홉킨스', '테드 레빈'],
      description:
        '젊은 FBI 훈련생이 또 다른 연쇄살인범을 잡기 위해 조종적인 식인 살인마의 도움을 구한다.',
      duration: 118,
      genre: ['스릴러'],
      poster: null,
      rating: '19세 이상 관람가',
      release_date: '1991.02.14',
    },
    {
      title: '아바타',
      actors: ['샘 워싱턴', '조 샐다나', '시고니 위버'],
      description:
        '외계 행성 판도라에서 인간과 원주민 나비족 간의 갈등과 공존을 그린 이야기.',
      duration: 162,
      genre: ['SF'],
      poster: null,
      rating: '12세 이상 관람가',
      release_date: '2009.12.18',
    },
    {
      title: '포레스트 검프',
      actors: ['톰 행크스', '로빈 라이트', '게리 시니즈'],
      description:
        '지능은 낮지만 순수한 마음을 가진 남자가 역사적인 사건들을 겪으며 인생을 살아가는 이야기.',
      duration: 142,
      genre: ['드라마'],
      poster: null,
      rating: '12세 이상 관람가',
      release_date: '1994.07.06',
    },
    {
      title: '쇼생크 탈출',
      actors: ['팀 로빈스', '모건 프리먼', '밥 건튼'],
      description:
        '억울하게 종신형을 선고받은 은행가가 감옥에서 희망과 우정을 찾아가는 이야기.',
      duration: 142,
      genre: ['드라마'],
      poster: null,
      rating: '15세 이상 관람가',
      release_date: '1994.09.23',
    },
    {
      title: '라라랜드',
      actors: ['라이언 고슬링', '엠마 스톤', '존 레전드'],
      description:
        '뮤지션과 배우 지망생이 꿈을 쫓으며 사랑에 빠지지만 현실의 벽에 부딪히는 이야기.',
      duration: 128,
      genre: ['뮤지컬', '로맨스'],
      poster: null,
      rating: '12세 이상 관람가',
      release_date: '2016.12.09',
    },
    {
      title: '타이타닉',
      actors: ['레오나르도 디카프리오', '케이트 윈슬렛', '빌리 제인'],
      description:
        '1912년, 세계에서 가장 거대한 유람선 타이타닉은 영국 사우샘프턴에서 뉴욕으로 향하는 첫 번째 항해를 떠난다. 이 웅장한 배에는 다양한 계층의 승객들이 탑승하고 있는데, 그 중에는 가난한 화가 잭 도슨(레오나르도 디카프리오)과 상류층 여성 로즈 드윗 부케이터(케이트 윈슬렛)가 있다. 로즈는 사회적 지위와 가문의 압박 속에서 자신이 원하지 않는 약혼자인 칼 호클리와 결혼을 앞두고 타이타닉에 탑승한다. 그녀는 자신이 원하는 삶을 잃었다고 느끼며 절망하다가, 타이타닉의 난간에서 투신을 시도하지만, 잭이 이를 막아준다. 이 사건을 계기로 두 사람은 점차 서로에게 끌리게 되고, 각자 다른 배경 속에서도 강렬한 사랑을 나누게 된다. 그러나 행복한 순간도 잠시, 타이타닉은 빙산과 충돌하면서 침몰 위기에 처한다. 이 거대한 재난 속에서 로즈와 잭은 생존을 위해 필사적으로 노력하지만, 차가운 대서양의 바다에서 잭은 로즈를 살리기 위해 희생한다. 결국 로즈는 구조되지만, 잭과의 사랑은 그녀의 마음 속에 영원히 남게 된다.',
      duration: 195,
      genre: ['로맨스', '드라마'],
      poster: null,
      rating: '12세 이상 관람가',
      release_date: '1997.12.19',
    },
    {
      title: '스타워즈: 새로운 희망',
      actors: ['마크 해밀', '해리슨 포드', '캐리 피셔'],
      description:
        '은하 제국에 맞서 반란군이 제국군과 싸우며 희망을 찾아가는 이야기.',
      duration: 121,
      genre: ['SF', '판타지'],
      poster: null,
      rating: '전체 관람가',
      release_date: '1977.05.25',
    },
    {
      title: '다크 나이트',
      actors: ['크리스찬 베일', '히스 레저', '아론 에크하트'],
      description:
        '배트맨이 조커와 맞서 고담시의 혼란을 막기 위해 싸우는 이야기.',
      duration: 152,
      genre: ['액션', '스릴러'],
      poster: null,
      rating: '15세 이상 관람가',
      release_date: '2008.07.18',
    },
    {
      title: '위대한 개츠비',
      actors: ['레오나르도 디카프리오', '캐리 멀리건', '토비 맥과이어'],
      description:
        '1920년대 미국, 부와 사랑을 쫓는 남자의 화려하지만 쓸쓸한 삶을 그린 이야기.',
      duration: 143,
      genre: ['드라마', '로맨스'],
      poster: null,
      rating: '12세 이상 관람가',
      release_date: '2013.05.10',
    },
    {
      title: 'ET',
      actors: ['헨리 토마스', '디 월리스', '드류 배리모어'],
      description:
        '지구에 홀로 남겨진 외계 생명체와 소년의 우정을 그린 이야기.',
      duration: 115,
      genre: ['SF', '가족'],
      poster: null,
      rating: '전체 관람가',
      release_date: '1982.06.11',
    },
    {
      title: '백 투 더 퓨처',
      actors: ['마이클 J. 폭스', '크리스토퍼 로이드', '리아 톰슨'],
      description:
        '타임머신을 타고 과거로 간 소년이 부모의 젊은 시절을 만나게 되는 이야기.',
      duration: 116,
      genre: ['SF', '코미디'],
      poster: null,
      rating: '12세 이상 관람가',
      release_date: '1985.07.03',
    },
    {
      title: '미션 임파서블',
      actors: ['톰 크루즈', '존 보이트', '엠마누엘 베아르'],
      description:
        '스파이 조직의 배신과 음모 속에서 임무를 완수하려는 요원의 이야기.',
      duration: 110,
      genre: ['액션', '스릴러'],
      poster: null,
      rating: '15세 이상 관람가',
      release_date: '1996.05.22',
    },
    {
      title: '킹스 스피치',
      actors: ['콜린 퍼스', '제프리 러쉬', '헬레나 본햄 카터'],
      description:
        '말더듬증을 가진 왕이 언어 치료사의 도움으로 국민 앞에서 연설을 하는 이야기.',
      duration: 118,
      genre: ['드라마'],
      poster: null,
      rating: '12세 이상 관람가',
      release_date: '2010.11.26',
    },
    {
      title: '베테랑',
      actors: ['황정민', '유아인', '유해진'],
      description:
        '강력계 형사가 재벌 3세의 범죄를 파헤치며 대결하는 이야기.',
      duration: 123,
      genre: ['액션', '코미디'],
      poster: null,
      rating: '15세 이상 관람가',
      release_date: '2015.08.05',
    },
    {
      title: '올드보이',
      actors: ['최민식', '유지태', '강혜정'],
      description:
        '15년간 감금된 남자가 풀려나 복수를 시작하며 진실을 찾아가는 이야기.',
      duration: 120,
      genre: ['스릴러', '드라마'],
      poster: null,
      rating: '19세 이상 관람가',
      release_date: '2003.11.21',
    },
    {
      title: '괴물',
      actors: ['송강호', '변희봉', '박해일'],
      description:
        '한강에 나타난 괴물에게 딸을 빼앗긴 가족이 그녀를 구하기 위해 노력하는 이야기.',
      duration: 119,
      genre: ['SF', '스릴러'],
      poster: null,
      rating: '12세 이상 관람가',
      release_date: '2006.07.27',
    },
    {
      title: '기생충',
      actors: ['송강호', '이선균', '조여정'],
      description:
        '가난한 가족이 부자 가족의 집에 하나씩 스며들며 벌어지는 이야기.',
      duration: 132,
      genre: ['드라마', '스릴러'],
      poster: null,
      rating: '15세 이상 관람가',
      release_date: '2019.05.30',
    },
    {
      title: '라이언 일병 구하기',
      actors: ['톰 행크스', '맷 데이먼', '톰 시즈모어'],
      description:
        '2차 세계대전 중 전사한 세 형제의 남은 막내를 구하기 위한 임무를 그린 이야기.',
      duration: 169,
      genre: ['전쟁', '드라마'],
      poster: null,
      rating: '15세 이상 관람가',
      release_date: '1998.07.24',
    },
    {
      title: '아이언맨',
      actors: ['로버트 다우니 주니어', '그웬네스 팰트로', '제프 브리지스'],
      description:
        '억만장자 발명가가 자신만의 슈트를 만들어 히어로가 되는 이야기.',
      duration: 126,
      genre: ['액션', 'SF'],
      poster: null,
      rating: '12세 이상 관람가',
      release_date: '2008.05.02',
    },
    {
      title: '월-E',
      actors: ['벤 버트', '엘리사 나이트', '제프 가를린'],
      description:
        '쓰레기로 뒤덮인 지구에 홀로 남은 로봇이 우주로 떠나 새로운 모험을 하는 이야기.',
      duration: 98,
      genre: ['애니메이션', 'SF'],
      poster: null,
      rating: '전체 관람가',
      release_date: '2008.06.27',
    },
    {
      title: '죽은 시인의 사회',
      actors: ['로빈 윌리엄스', '로버트 숀 레오나드', '에단 호크'],
      description:
        '엄격한 기숙학교에서 자유로운 영혼의 영어 선생님이 학생들에게 영향을 미치는 이야기.',
      duration: 128,
      genre: ['드라마'],
      poster: null,
      rating: '12세 이상 관람가',
      release_date: '1989.06.02',
    },
    {
      title: '킹콩',
      actors: ['나오미 왓츠', '잭 블랙', '애드리언 브로디'],
      description:
        '거대한 고릴라 킹콩과 인간의 우정을 그린 모험과 드라마 이야기.',
      duration: 187,
      genre: ['액션', '모험'],
      poster: null,
      rating: '12세 이상 관람가',
      release_date: '2005.12.14',
    },
    {
      title: '레미제라블',
      actors: ['휴 잭맨', '러셀 크로우', '앤 해서웨이'],
      description:
        '프랑스 혁명 시기를 배경으로 한 사랑과 희생, 정의를 그린 뮤지컬 영화.',
      duration: 158,
      genre: ['뮤지컬', '드라마'],
      poster: null,
      rating: '12세 이상 관람가',
      release_date: '2012.12.25',
    },
    {
      title: '주라기 공원',
      actors: ['샘 닐', '로라 던', '제프 골드블럼'],
      description:
        '공룡을 복원한 테마파크에서 벌어지는 예기치 않은 사고와 생존 이야기.',
      duration: 127,
      genre: ['SF', '모험'],
      poster: null,
      rating: '12세 이상 관람가',
      release_date: '1993.06.11',
    },
    {
      title: '토이스토리 3',
      actors: ['톰 행크스', '팀 알렌', '조앤 큐잭'],
      description:
        '앤디가 대학에 가며 장난감들이 어린이집에 기증되어 벌어지는 모험 이야기.',
      duration: 103,
      genre: ['애니메이션', '코미디'],
      poster: null,
      rating: '전체 관람가',
      release_date: '2010.06.18',
    },
    {
      title: '업',
      actors: ['에드워드 애스너', '조던 나가이', '크리스토퍼 플러머'],
      description:
        '은퇴한 노인이 풍선으로 집을 띄워 남미로 떠나는 모험 이야기.',
      duration: 96,
      genre: ['애니메이션', '모험'],
      poster: null,
      rating: '전체 관람가',
      release_date: '2009.05.29',
    },
    {
      title: '헝거 게임',
      actors: ['제니퍼 로렌스', '조쉬 허처슨', '리암 헴스워스'],
      description:
        '독재 국가에서 생존 게임에 참가한 소녀가 혁명의 상징이 되는 이야기.',
      duration: 142,
      genre: ['SF', '액션'],
      poster: null,
      rating: '15세 이상 관람가',
      release_date: '2012.03.23',
    },
    {
      title: '그녀',
      actors: ['호아킨 피닉스', '스칼렛 요한슨', '에이미 아담스'],
      description:
        '인공지능 운영체제와 사랑에 빠진 남자의 독특한 사랑 이야기.',
      duration: 126,
      genre: ['드라마', 'SF'],
      poster: null,
      rating: '15세 이상 관람가',
      release_date: '2013.12.18',
    },
    {
      title: '인터뷰 위드 뱀파이어',
      actors: ['톰 크루즈', '브래드 피트', '크리스틴 던스트'],
      description:
        '뱀파이어가 자신의 삶과 고뇌를 기자에게 털어놓는 이야기.',
      duration: 123,
      genre: ['드라마', '판타지'],
      poster: null,
      rating: '15세 이상 관람가',
      release_date: '1994.11.11',
    },
    {
      title: '어벤져스',
      actors: ['로버트 다우니 주니어', '크리스 에반스', '스칼렛 요한슨'],
      description:
        '슈퍼히어로들이 팀을 이뤄 지구를 위협하는 적과 싸우는 이야기.',
      duration: 143,
      genre: ['액션', 'SF'],
      poster: null,
      rating: '12세 이상 관람가',
      release_date: '2012.05.04',
    },
    {
      title: '에이아이',
      actors: ['헤일리 조엘 오스먼트', '주드 로', '프랜시스 오코너'],
      description:
        '인공지능 소년 로봇이 인간의 사랑을 찾기 위한 여정을 그린 이야기.',
      duration: 146,
      genre: ['SF', '드라마'],
      poster: null,
      rating: '12세 이상 관람가',
      release_date: '2001.06.29',
    },
    {
      title: '캐치 미 이프 유 캔',
      actors: ['레오나르도 디카프리오', '톰 행크스', '크리스토퍼 워컨'],
      description:
        '천재적인 사기꾼과 그를 추적하는 FBI 요원의 실화를 바탕으로 한 이야기.',
      duration: 141,
      genre: ['드라마', '범죄'],
      poster: null,
      rating: '12세 이상 관람가',
      release_date: '2002.12.25',
    },
    {
      title: '시네마 천국',
      actors: ['필립 느와레', '살바토레 카시오', '마르코 레오나르디'],
      description:
        '영화를 사랑하는 소년과 극장 영사기사의 우정을 그린 이탈리아 영화.',
      duration: 155,
      genre: ['드라마'],
      poster: null,
      rating: '전체 관람가',
      release_date: '1988.11.17',
    },
    {
      title: '빅 피쉬',
      actors: ['이완 맥그리거', '알버트 피니', '빌리 크루덥'],
      description:
        '과장된 이야기를 즐기는 아버지와 그의 진짜 모습을 알고 싶어하는 아들의 이야기.',
      duration: 125,
      genre: ['드라마', '판타지'],
      poster: null,
      rating: '12세 이상 관람가',
      release_date: '2003.12.10',
    },
    {
      title: '인턴',
      actors: ['로버트 드 니로', '앤 해서웨이', '르네 루소'],
      description:
        '70세의 시니어 인턴이 젊은 CEO와 함께 일하며 벌어지는 이야기.',
      duration: 121,
      genre: ['코미디', '드라마'],
      poster: null,
      rating: '12세 이상 관람가',
      release_date: '2015.09.25',
    },
    {
      title: '월터의 상상은 현실이 된다',
      actors: ['벤 스틸러', '크리스틴 위그', '션 펜'],
      description:
        '평범한 직장인이 모험을 찾아 전 세계를 여행하며 자신을 발견하는 이야기.',
      duration: 114,
      genre: ['모험', '드라마'],
      poster: null,
      rating: '12세 이상 관람가',
      release_date: '2013.12.25',
    },

    // 한국 영화
        {
          title: '범죄도시',
          actors: ['마동석', '윤계상', '조재윤'],
          description: '강력한 형사와 중국 범죄조직의 대결을 그린 액션 영화.',
          genre: ['액션', '범죄'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2017.10.03',
        },
        {
          title: '신과함께: 죄와 벌',
          actors: ['하정우', '차태현', '주지훈'],
          description: '죽은 후 49일 동안 7번의 지옥 재판을 받는 사후 세계를 그린 판타지 영화.',
          genre: ['판타지', '드라마'],
          poster: null,
          rating: '12세 이상 관람가',
          release_date: '2017.12.20',
        },
        {
          title: '극한직업',
          actors: ['류승룡', '이하늬', '진선규'],
          description: '마약범을 잡기 위해 치킨집을 위장 창업한 형사들의 코믹한 이야기.',
          genre: ['코미디', '액션'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2019.01.23',
        },
        {
          title: '택시운전사',
          actors: ['송강호', '토마스 크레취만', '유해진'],
          description: '1980년 광주 민주화 운동을 취재하는 독일 기자와 그를 도운 택시 운전사의 이야기.',
          genre: ['드라마', '역사'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2017.08.02',
        },
        {
          title: '부산행',
          actors: ['공유', '정유미', '마동석'],
          description: '좀비 바이러스가 퍼진 대한민국에서 부산으로 향하는 열차 안의 생존자들의 이야기.',
          genre: ['액션', '스릴러'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2016.07.20',
        },
        {
          title: '암살',
          actors: ['전지현', '이정재', '하정우'],
          description: '일제 강점기, 독립군들이 친일파를 암살하기 위한 작전을 펼치는 이야기.',
          genre: ['액션', '드라마'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2015.07.22',
        },
        {
          title: '곡성',
          actors: ['곽도원', '황정민', '천우희'],
          description: '작은 마을에서 발생하는 미스터리한 사건과 그것을 파헤치는 경찰의 이야기.',
          genre: ['스릴러', '미스터리'],
          poster: null,
          rating: '19세 이상 관람가',
          release_date: '2016.05.12',
        },
        {
          title: '7번방의 선물',
          actors: ['류승룡', '박신혜', '갈소원'],
          description: '지적 장애를 가진 아버지와 그의 딸이 감옥에서 재회하는 감동적인 이야기.',
          genre: ['드라마', '코미디'],
          poster: null,
          rating: '12세 이상 관람가',
          release_date: '2013.01.23',
        },
        {
          title: '도둑들',
          actors: ['김윤석', '김혜수', '이정재'],
          description: '국내외 도둑들이 모여 다이아몬드를 훔치기 위한 작전을 펼치는 이야기.',
          genre: ['액션', '범죄'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2012.07.25',
        },
        {
          title: '실미도',
          actors: ['설경구', '안성기', '정재영'],
          description: '북파공작원들의 실화를 바탕으로 한 드라마틱한 이야기.',
          genre: ['드라마', '액션'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2003.12.24',
        },
        {
          title: '태극기 휘날리며',
          actors: ['장동건', '원빈', '이은주'],
          description: '한국 전쟁 속에서 형제가 겪는 비극과 사랑을 그린 영화.',
          genre: ['전쟁', '드라마'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2004.02.05',
        },
        {
          title: '친절한 금자씨',
          actors: ['이영애', '최민식', '김시아'],
          description: '복수를 위해 13년을 준비한 여자의 이야기.',
          genre: ['스릴러', '드라마'],
          poster: null,
          rating: '18세 이상 관람가',
          release_date: '2005.07.29',
        },
        {
          title: '설국열차',
          actors: ['크리스 에반스', '송강호', '틸다 스윈튼'],
          description: '빙하기가 온 지구에서 생존자들이 탄 열차 안에서 벌어지는 계급 투쟁 이야기.',
          genre: ['SF', '액션'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2013.08.01',
        },
        {
          title: '베테랑',
          actors: ['황정민', '유아인', '유해진'],
          description: '강력계 형사가 재벌 3세의 범죄를 파헤치며 대결하는 이야기.',
          genre: ['액션', '코미디'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2015.08.05',
        },
        {
          title: '변호인',
          actors: ['송강호', '김영애', '오달수'],
          description: '세금을 잘 아는 변호사가 인권 변호사로 성장하는 과정을 그린 영화.',
          genre: ['드라마'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2013.12.18',
        },
        {
          title: '신세계',
          actors: ['이정재', '최민식', '황정민'],
          description: '조직의 내부에 잠입한 경찰과 조직원들의 배신과 음모를 그린 영화.',
          genre: ['범죄', '스릴러'],
          poster: null,
          rating: '19세 이상 관람가',
          release_date: '2013.02.21',
        },
        {
          title: '광해, 왕이 된 남자',
          actors: ['이병헌', '류승룡', '한효주'],
          description: '왕과 똑같이 생긴 광대가 왕의 대역을 맡으며 벌어지는 이야기.',
          genre: ['드라마', '역사'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2012.09.13',
        },
        {
          title: '관상',
          actors: ['송강호', '이정재', '백윤식'],
          description: '관상을 통해 사람의 운명을 읽는 관상가의 이야기.',
          genre: ['드라마', '역사'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2013.09.11',
        },
        {
          title: '마스터',
          actors: ['이병헌', '강동원', '김우빈'],
          description: '거대한 사기 조직과 이를 추적하는 지능범죄수사대의 대결을 그린 영화.',
          genre: ['액션', '범죄'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2016.12.21',
        },
        {
          title: '더 킹',
          actors: ['조인성', '정우성', '배성우'],
          description: '권력을 쫓는 검사의 욕망과 몰락을 그린 영화.',
          genre: ['드라마', '범죄'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2017.01.18',
        },
        {
          title: '기억의 밤',
          actors: ['강하늘', '김무열', '문성근'],
          description: '기억을 잃은 형과 그 비밀을 파헤치는 동생의 미스터리 스릴러.',
          genre: ['스릴러', '미스터리'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2017.11.29',
        },
        {
          title: '아가씨',
          actors: ['김민희', '김태리', '하정우'],
          description: '일제 강점기, 상속녀의 재산을 노리는 사기꾼과 하녀의 이야기.',
          genre: ['드라마', '스릴러'],
          poster: null,
          rating: '19세 이상 관람가',
          release_date: '2016.06.01',
        },
        {
          title: '밀정',
          actors: ['송강호', '공유', '한지민'],
          description: '일제 강점기, 조선인 일본 경찰과 독립군의 첩보전을 그린 영화.',
          genre: ['액션', '스릴러'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2016.09.07',
        },
        {
          title: '1987',
          actors: ['김윤석', '하정우', '유해진'],
          description: '1987년 민주화 운동의 중심에서 벌어진 사건과 사람들의 이야기.',
          genre: ['드라마', '역사'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2017.12.27',
        },
        {
          title: '독전',
          actors: ['조진웅', '류준열', '김주혁'],
          description: '마약 조직의 실체를 파헤치기 위한 형사와 공범의 협력을 그린 영화.',
          genre: ['범죄', '액션'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2018.05.22',
        },
        {
          title: '완벽한 타인',
          actors: ['유해진', '조진웅', '이서진'],
          description: '친구들이 모여 휴대폰을 공개하며 벌어지는 예기치 않은 사건들.',
          genre: ['코미디', '드라마'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2018.10.31',
        },
        {
          title: '극한직업',
          actors: ['류승룡', '이하늬', '진선규'],
          description: '마약범을 잡기 위해 치킨집을 위장 창업한 형사들의 코믹한 이야기.',
          genre: ['코미디', '액션'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2019.01.23',
        },
        {
          title: '돈',
          actors: ['류준열', '유지태', '조우진'],
          description: '부자가 되고 싶은 신입 주식 브로커가 작전에 휘말리며 벌어지는 이야기.',
          genre: ['범죄', '드라마'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2019.03.20',
        },
        {
          title: '사바하',
          actors: ['이정재', '박정민', '이재인'],
          description: '신흥 종교와 관련된 사건을 추적하는 목사의 이야기.',
          genre: ['스릴러', '미스터리'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2019.02.20',
        },
        {
          title: '나쁜 녀석들: 더 무비',
          actors: ['마동석', '김상중', '김아중'],
          description: '범죄자들을 잡기 위해 모인 나쁜 녀석들의 활약을 그린 영화.',
          genre: ['액션', '범죄'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2019.09.11',
        },
        {
          title: '백두산',
          actors: ['이병헌', '하정우', '마동석'],
          description: '백두산 화산 폭발을 막기 위한 사람들의 사투를 그린 영화.',
          genre: ['액션', '드라마'],
          poster: null,
          rating: '12세 이상 관람가',
          release_date: '2019.12.19',
        },
        {
          title: '남산의 부장들',
          actors: ['이병헌', '이성민', '곽도원'],
          description: '1979년 중앙정보부 부장들의 권력 투쟁을 그린 영화.',
          genre: ['드라마', '역사'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2020.01.22',
        },
        {
          title: '반도',
          actors: ['강동원', '이정현', '이레'],
          description: '좀비로 폐허가 된 한반도에서 생존자들의 사투를 그린 영화.',
          genre: ['액션', '스릴러'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2020.07.15',
        },
        {
          title: '다만 악에서 구하소서',
          actors: ['황정민', '이정재', '박정민'],
          description: '마지막 임무를 수행하는 킬러와 그를 쫓는 남자의 대결을 그린 영화.',
          genre: ['액션', '스릴러'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2020.08.05',
        },
        {
          title: '승리호',
          actors: ['송중기', '김태리', '진선규'],
          description: '2092년 우주 쓰레기 청소선 승리호의 모험을 그린 SF 영화.',
          genre: ['SF', '액션'],
          poster: null,
          rating: '12세 이상 관람가',
          release_date: '2021.02.05',
        },
        {
          title: '서복',
          actors: ['공유', '박보검', '조우진'],
          description: '인류 최초의 복제인간 서복을 호송하며 벌어지는 이야기.',
          genre: ['SF', '드라마'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2021.04.15',
        },
        {
          title: '자산어보',
          actors: ['설경구', '변요한', '이정은'],
          description: '흑산도로 유배된 학자가 어부와 함께 책을 집필하는 이야기.',
          genre: ['드라마', '역사'],
          poster: null,
          rating: '12세 이상 관람가',
          release_date: '2021.03.31',
        },
        {
          title: '모가디슈',
          actors: ['김윤석', '조인성', '허준호'],
          description: '내전 중인 소말리아에서 탈출하려는 한국 대사관 직원들의 이야기.',
          genre: ['액션', '드라마'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2021.07.28',
        },
        {
          title: '싱크홀',
          actors: ['차승원', '김성균', '이광수'],
          description: '집이 싱크홀로 추락하면서 벌어지는 생존 코미디.',
          genre: ['코미디', '재난'],
          poster: null,
          rating: '12세 이상 관람가',
          release_date: '2021.08.11',
        },
        {
          title: '공작',
          actors: ['황정민', '이성민', '조진웅'],
          description: '북한 핵개발 실체를 파헤치기 위한 스파이 작전을 그린 영화.',
          genre: ['스릴러', '드라마'],
          poster: null,
          rating: '12세 이상 관람가',
          release_date: '2018.08.08',
        },
        {
          title: '해운대',
          actors: ['설경구', '하지원', '박중훈'],
          description: '해운대에 몰아닥친 쓰나미로 인한 재난과 사람들의 이야기.',
          genre: ['재난', '드라마'],
          poster: null,
          rating: '12세 이상 관람가',
          release_date: '2009.07.22',
        },
        {
          title: '아이 캔 스피크',
          actors: ['나문희', '이제훈'],
          description: '민원 왕 할머니와 공무원의 우정을 그린 감동 코미디.',
          genre: ['코미디', '드라마'],
          poster: null,
          rating: '12세 이상 관람가',
          release_date: '2017.09.21',
        },
        {
          title: '검사외전',
          actors: ['황정민', '강동원'],
          description: '누명을 쓰고 감옥에 간 검사가 사기꾼과 손잡고 복수하는 이야기.',
          genre: ['범죄', '코미디'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2016.02.03',
        },
        {
          title: '걸캅스',
          actors: ['라미란', '이성경'],
          description: '여성 형사들이 디지털 성범죄를 추적하는 코믹 액션 영화.',
          genre: ['코미디', '액션'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2019.05.09',
        },
        {
          title: '반드시 잡는다',
          actors: ['백윤식', '성동일'],
          description: '30년 전 미제 사건의 범인을 추적하는 노인의 이야기.',
          genre: ['스릴러', '범죄'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2017.11.29',
        },
        {
          title: '봉오동 전투',
          actors: ['유해진', '류준열', '조우진'],
          description: '독립군이 일본군에 맞서 봉오동에서 승리한 전투를 그린 영화.',
          genre: ['전쟁', '드라마'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2019.08.07',
        },
        {
          title: '장사리: 잊혀진 영웅들',
          actors: ['김명민', '최민호', '메건 폭스'],
          description: '장사리 전투에서 희생된 학도병들의 이야기를 그린 영화.',
          genre: ['전쟁', '드라마'],
          poster: null,
          rating: '12세 이상 관람가',
          release_date: '2019.09.25',
        },
        {
          title: '82년생 김지영',
          actors: ['정유미', '공유'],
          description: '평범한 여성의 일상을 통해 현대 사회의 여성 문제를 조명한 영화.',
          genre: ['드라마'],
          poster: null,
          rating: '12세 이상 관람가',
          release_date: '2019.10.23',
        },
        {
          title: '시간이탈자',
          actors: ['이진욱', '조정석', '임수정'],
          description: '다른 시대에 사는 두 남자가 연결되어 사건을 해결하는 이야기.',
          genre: ['스릴러', '로맨스'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2016.04.13',
        },
        {
          title: '히말라야',
          actors: ['황정민', '정우', '조성하'],
          description: '에베레스트에 오른 산악 대장의 실화를 바탕으로 한 감동 드라마.',
          genre: ['드라마', '모험'],
          poster: null,
          rating: '12세 이상 관람가',
          release_date: '2015.12.16',
        },
        {
          title: '더 테러 라이브',
          actors: ['하정우', '이경영'],
          description: '라디오 방송 중 테러범의 협박을 받은 앵커의 긴박한 상황을 그린 영화.',
          genre: ['스릴러'],
          poster: null,
          rating: '15세 이상 관람가',
          release_date: '2013.07.31',
        },
        {
          title: '도가니',
          actors: ['공유', '정유미'],
          description: '청각장애인 학교에서 벌어진 실화를 바탕으로 한 충격적인 이야기.',
          genre: ['드라마'],
          poster: null,
          rating: '18세 이상 관람가',
          release_date: '2011.09.22',
        },
        {
          title: '늑대소년',
          actors: ['송중기', '박보영'],
          description: '인간과 늑대의 특성을 가진 소년과 소녀의 순수한 사랑 이야기.',
          genre: ['로맨스', '판타지'],
          poster: null,
          rating: '12세 이상 관람가',
          release_date: '2012.10.31',
        },

  ];
  
  export default moviesData;
  