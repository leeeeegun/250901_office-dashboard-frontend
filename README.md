🏢 HUB 오피스 - 대시보드 프론트엔드
React와 Tailwind CSS를 사용하여 제작된 모던한 오피스 대시보드 UI 프로토타입입니다.

😎 소개
<table>
  <tr>
    <td align="center"><b><a href="https://github.com/leeeeegun">이의건</a></b></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/leeeeegun"><img src="https://www.google.com/search?q=https://avatars.githubusercontent.com/u/80462203%3Fv%3D4" width="100px" /></a></td>
  </tr>
</table>

🚀 프로젝트 개요
HUB 오피스 대시보드는 사내 구성원들의 업무 효율성을 높이기 위한 다양한 기능을 통합 제공하는 것을 목표로 하는 웹 애플리케이션의 프론트엔드 파트입니다. 깔끔하고 직관적인 UI를 통해 사용자가 쉽게 정보에 접근하고 업무를 처리할 수 있도록 설계되었습니다.

주요 기능
🖥️ 메인 대시보드: 개인 프로필, 근태 현황, 최신 게시글 등 핵심 정보를 한눈에 파악할 수 있습니다.

👤 프로필 카드: 사용자의 기본 정보와 오늘 남은 업무(메일, 일정, 결재) 수를 요약하여 보여줍니다.

🕒 실시간 근태 카드: 현재 시간과 출퇴근 시간, 주간 누적 근무 시간을 시각적으로 제공합니다.

📰 게시판 카드: 사내 공지사항이나 설문조사 등 최신 게시물을 썸네일과 함께 보여줍니다.

🧭 사이드바 네비게이션: 아이콘 기반의 메뉴를 통해 메일, 주소록, 캘린더 등 다양한 페이지로 쉽게 이동할 수 있습니다.


🛠️ 기술 스택
Framework: React 18

Styling: Tailwind CSS, PostCSS, Autoprefixer

Build Tool: Vite

Linter: ESLint

📦 설치 및 실행
사전 요구사항
Node.js 16+

npm

Frontend 실행
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

개발 서버가 http://localhost:5173에서 실행됩니다.

🏗️ 프로젝트 구조
office-dashboard-frontend/
├── src/
│   ├── assets/           # 이미지, 폰트 등 정적 에셋
│   ├── components/       # 공용 및 기능별 컴포넌트
│   │   ├── common/       # 아이콘 등 공용 컴포넌트
│   │   ├── dashboard/    # 대시보드 관련 컴포넌트
│   │   └── layout/       # 헤더, 사이드바 등 레이아웃 컴포넌트
│   ├── data/             # 목업 데이터
│   ├── pages/            # 각 메뉴에 해당하는 페이지 컴포넌트
│   ├── App.jsx           # 메인 애플리케이션 컴포넌트
│   └── main.jsx          # 애플리케이션 진입점
├── public/               # 정적 파일
├── package.json
└── vite.config.js
