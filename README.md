🏢 오피스 대시보드 프론트엔드
React와 Vite, Tailwind CSS를 사용하여 구축한 현대적인 오피스 관리 대시보드 프론트엔드 프로젝트입니다. 이 대시보드는 사내 업무 효율성을 높이기 위한 다양한 기능들을 통합하여 제공합니다.

🌟 주요 기능
이 대시보드는 다음과 같은 다양한 페이지와 기능으로 구성되어 있습니다.

📊 대시보드 (Dashboard): 로그인 후 가장 먼저 보게 될 메인 페이지로, 프로필 정보, 출퇴근 현황, 최신 게시글 등 주요 정보들을 한눈에 파악할 수 있습니다.

✍️ 전자결재 (ApprovalPage): 휴가 신청, 비용 처리 등 각종 결재 문서를 상신하고 처리 현황을 확인할 수 있습니다.

📋 게시판 (BoardPage): 공지사항, 자유게시판 등 사내 소통을 위한 공간입니다.

🗓️ 예약 (BookingPage): 회의실, 법인 차량 등 공용 물품이나 시설을 예약하고 관리할 수 있습니다.

📅 캘린더 (CalendarPage): 전사 주요 일정 및 개인 일정을 등록하고 공유할 수 있습니다.

👥 주소록 (ContactsPage): 임직원의 연락처 정보를 쉽게 찾아볼 수 있습니다.

📧 메일 (MailPage): 사내 메일 시스템과 연동하여 메일을 확인하고 보낼 수 있습니다.

📝 설문조사 (SurveyPage): 다양한 주제로 설문조사를 생성하고 참여할 수 있습니다.

🍱 점심 메뉴 추천 (LunchPage): 점심 메뉴를 고민하는 직원들을 위한 랜덤 추천 기능입니다.

✨ 오늘의 운세 (FortunePage): 재미로 보는 오늘의 운세 기능입니다.

🛠️ 기술 스택
프레임워크: React.js

빌드 도구: Vite

스타일링: Tailwind CSS

상태 관리: React Hooks (useState, useEffect 등)

라우팅: React Router DOM (package.json 기반 추정)

🚀 시작하기
1. 프로젝트 클론
git clone [https://github.com/leeeeegun/office-dashboard-frontend.git](https://github.com/leeeeegun/office-dashboard-frontend.git)
cd office-dashboard-frontend

2. 의존성 설치
프로젝트에 필요한 라이브러리들을 설치합니다.

npm install

3. 개발 서버 실행
아래 명령어를 실행하면 개발 서버가 시작되고, 브라우저에서 실시간으로 변경 사항을 확인할 수 있습니다.

npm run dev

📂 폴더 구조
프로젝트의 주요 폴더 구조는 다음과 같습니다.

office-dashboard-frontend/
├── public/               # 정적 파일 (이미지, 폰트 등)
├── src/
│   ├── assets/           # 소스 코드 내에서 사용되는 에셋
│   ├── components/       # 공통 컴포넌트 및 기능별 컴포넌트
│   │   ├── common/       # 아이콘 등 앱 전반에서 사용되는 공통 컴포넌트
│   │   ├── dashboard/    # 대시보드 페이지의 카드 컴포넌트
│   │   └── layout/       # 헤더, 사이드바 등 레이아웃 컴포넌트
│   ├── data/             # Mock 데이터
│   ├── pages/            # 각 라우트에 해당하는 페이지 컴포넌트
│   ├── App.jsx           # 메인 애플리케이션 컴포넌트 (라우팅 설정)
│   ├── main.jsx          # 애플리케이션 진입점
│   └── index.css         # 전역 CSS 스타일
├── .gitignore
├── package.json
└── README.md

각 폴더는 기능과 역할에 따라 명확하게 분리되어 있어 유지보수가 용이하도록 구성되었습니다.
