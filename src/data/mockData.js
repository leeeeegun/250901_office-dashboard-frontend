/*
  - 파일 경로: src/data/mockData.js
  - 역할: 문법 오류를 해결하기 위해 전체 코드를 다시 한번 검토하고 수정했어.
*/

// --- 사용자 정보 ---
export const userInfo = {
    name: "이의건",
    team: "개발본부 / 개발 1팀",
    avatarUrl: "https://placehold.co/80x80/a7f3d0/1e293b?text=LEE",
    todayMailCount: 13,
    todayScheduleCount: 4,
};

// --- 게시판 아이템 정보 ---
export const boardItems = [
    {
        id: 1,
        category: "공지사항",
        title: "HUB 오피스 9월 정기 업데이트",
        author: "김철수 부장",
        date: "2025-09-03 10:39",
        group: "HUB 오피스",
        thumbnailUrl: "https://placehold.co/240x160/e0f2fe/0891b2?text=Notice",
        views: 128,
        content: "안녕하세요, HUB 오피스팀입니다.\n\n9월 정기 업데이트가 완료되었습니다.\n이번 업데이트에서는 다음과 같은 기능이 개선되었습니다.\n\n- 캘린더 일정 공유 기능 추가\n- 메일 검색 속도 향상\n- 기타 버그 수정\n\n자세한 내용은 공지사항을 참고해주세요."
    },
    {
        id: 3,
        category: "설문조사",
        title: "2025년 하반기 워크샵 장소 선호도 조사",
        author: "박민지 대리",
        date: "2025-09-02 14:00",
        group: "인사팀",
        thumbnailUrl: "https://placehold.co/240x160/fef08a/854d0e?text=Survey",
        views: 256,
        content: "인사팀에서 2025년 하반기 워크샵 장소 선정을 위한 설문조사를 진행합니다.\n\n임직원 여러분의 많은 참여 부탁드립니다."
    },
    {
        id: 2,
        category: "공지사항",
        title: "[전사] 2025년 추석 연휴 근무 안내",
        author: "이영희 차장",
        date: "2025-09-01 11:00",
        group: "인사팀",
        thumbnailUrl: "https://placehold.co/240x160/fecaca/991b1b?text=Holiday",
        views: 312,
        content: "전사 임직원 여러분께 추석 연휴 근무 일정을 안내드립니다."
    },
    {
        id: 4,
        category: "설문조사",
        title: "사내 카페 만족도 및 신규 메뉴 의견 수렴",
        author: "최유리 사원",
        date: "2025-08-30 17:20",
        group: "총무팀",
        thumbnailUrl: "https://placehold.co/240x160/d8b4fe/581c87?text=Cafe",
        views: 189,
        content: "사내 카페 만족도 및 신규 메뉴 도입에 대한 의견을 수렴합니다."
    }
];

// --- 받은 메일 목록 데이터 ---
export const emails = [
    {
        id: 'email-1',
        sender: 'HUB 오피스 관리자',
        subject: '[공지] 9월 정기점검 안내 (9/10, 02:00-04:00)',
        snippet: '안녕하세요, HUB 오피스입니다. 보다 안정적인 서비스 제공을 위해 아래와 같이 시스템 정기점검을...',
        body: `안녕하세요, HUB 오피스입니다.\n\n보다 안정적인 서비스 제공을 위해 아래와 같이 시스템 정기점검을 실시할 예정입니다.\n점검 시간 동안에는 서비스 접속이 원활하지 않을 수 있으니 양해 부탁드립니다.\n\n- 점검 일시: 2025년 9월 10일(수) 02:00 ~ 04:00 (2시간)\n- 점검 내용: 서버 안정화 및 보안 업데이트\n\n감사합니다.\nHUB 오피스 드림.`,
        timestamp: '오후 3:45',
        timestampFull: '2025년 9월 5일 오후 3:45',
        isRead: false,
    },
    {
        id: 'email-2',
        sender: '김철수 부장',
        subject: 'Re: 3분기 실적 보고서 초안 검토 요청',
        snippet: '네, 이대리님. 보내주신 3분기 실적 보고서 초안 잘 받았습니다. 전반적으로 잘 작성되었으나...',
        body: `네, 이대리님.\n\n보내주신 3분기 실적 보고서 초안 잘 받았습니다.\n전반적으로 잘 작성되었으나, 몇 가지 수정이 필요한 부분이 보입니다.\n\n첨부파일 확인 후 내일 오전까지 수정 부탁드립니다.\n\n감사합니다.\n김철수 드림.`,
        timestamp: '오후 1:12',
        timestampFull: '2025년 9월 5일 오후 1:12',
        isRead: true,
    },
    {
        id: 'email-3',
        sender: '인사팀',
        subject: '[안내] 2025년 추석 연휴 대체공휴일 적용 안내',
        snippet: '전사 임직원 여러분께 안내 말씀드립니다. 2025년 추석 연휴 대체공휴일 적용에 따라...',
        body: `전사 임직원 여러분께 안내 말씀드립니다.\n\n2025년 추석 연휴 대체공휴일 적용에 따라, 9월 29일(월)은 휴무일임을 알려드립니다.\n\n즐거운 명절 보내시길 바랍니다.\n\n- 인사팀 드림 -`,
        timestamp: '오전 9:30',
        timestampFull: '2025년 9월 5일 오전 9:30',
        isRead: false,
    },
];

// --- 주소록 데이터 ---
export const contacts = [
    {
        id: 'contact-1',
        name: '김개발',
        department: '개발본부',
        position: '팀장',
        email: 'dev.kim@huboffice.com',
        officePhone: '070-1234-5678 (내선 101)',
        mobilePhone: '010-1111-1111',
        avatarUrl: 'https://placehold.co/80x80/dbeafe/1e3a8a?text=김',
        isFavorite: true,
    },
    {
        id: 'contact-2',
        name: '이디자인',
        department: '디자인팀',
        position: '선임',
        email: 'design.lee@huboffice.com',
        officePhone: '070-1234-5678 (내선 201)',
        mobilePhone: '010-2222-2222',
        avatarUrl: 'https://placehold.co/80x80/fee2e2/991b1b?text=이',
        isFavorite: false,
    },
    {
        id: 'contact-3',
        name: '박기획',
        department: '기획팀',
        position: '사원',
        email: 'plan.park@huboffice.com',
        officePhone: '070-1234-5678 (내선 301)',
        mobilePhone: '010-3333-3333',
        avatarUrl: 'https://placehold.co/80x80/d1fae5/065f46?text=박',
        isFavorite: true,
    },
    {
        id: 'contact-4',
        name: '최총무',
        department: '경영지원본부',
        position: '대리',
        email: 'admin.choi@huboffice.com',
        officePhone: '070-1234-5678 (내선 401)',
        mobilePhone: '010-4444-4444',
        avatarUrl: 'https://placehold.co/80x80/fef9c3/b45309?text=최',
        isFavorite: false,
    },
    {
        id: 'contact-5',
        name: '정개발',
        department: '개발본부',
        position: '사원',
        email: 'dev.jung@huboffice.com',
        officePhone: '070-1234-5678 (내선 102)',
        mobilePhone: '010-5555-5555',
        avatarUrl: 'https://placehold.co/80x80/dbeafe/1e3a8a?text=정',
        isFavorite: false,
    }
];

// --- 캘린더 이벤트 데이터 ---
export const calendarEvents = [
    { id: 'event-1', date: '2025-09-10', title: '정기 시스템 점검' },
    { id: 'event-2', date: '2025-09-15', title: '3분기 실적 보고 마감' },
    { id: 'event-3', date: '2025-09-15', title: '기획팀 주간 회의' },
    { id: 'event-4', date: '2025-09-29', title: '추석 연휴 (대체공휴일)' },
];

// --- 예약 시스템 데이터 ---
export const bookingResources = [
    { id: 'room-a', name: '대회의실 A (20인)', capacity: 20 },
    { id: 'room-b', name: '중회의실 B (10인)', capacity: 10 },
    { id: 'room-c', name: '소회의실 C (6인)', capacity: 6 },
    { id: 'focus-1', name: '집중 부스 1 (1인)', capacity: 1 },
];

export const bookings = [
    { id: 'booking-1', resourceId: 'room-a', user: '김개발', title: '전사 주간 기획 회의', start: '2025-09-18T10:00:00', end: '2025-09-18T11:30:00' },
    { id: 'booking-2', resourceId: 'room-b', user: '이디자인', title: '신규 UI/UX 리뷰', start: '2025-09-18T14:00:00', end: '2025-09-18T15:30:00' },
    { id: 'booking-3', resourceId: 'room-a', user: '박기획', title: '마케팅팀 TF 회의', start: '2025-09-18T16:00:00', end: '2025-09-18T17:00:00' },
];

// --- 설문 기능을 위한 임시 데이터 ---
export const surveys = [
    {
        id: 'survey-1',
        title: '2025년 하반기 워크샵 장소 선호도 조사',
        author: '인사팀',
        status: 'ongoing',
        myVote: null,
        options: [
            { id: 'opt-1-1', text: '제주도', votes: 15 },
            { id: 'opt-1-2', text: '강원도', votes: 22 },
            { id: 'opt-1-3', text: '부산', votes: 8 },
            { id: 'opt-1-4', text: '해외 (동남아)', votes: 11 },
        ]
    },
    {
        id: 'survey-2',
        title: '사내 카페 신규 메뉴 도입 관련 설문',
        author: '총무팀',
        status: 'completed',
        myVote: 'opt-2-2',
        options: [
            { id: 'opt-2-1', text: '시즌 과일 주스', votes: 31 },
            { id: 'opt-2-2', text: '디카페인 콜드브루', votes: 25 },
            { id: 'opt-2-3', text: '각종 허브티', votes: 18 },
        ]
    }
];


export const approvals = [
    {
        id: 'approval-1',
        title: '2025년 하반기 워크샵 경비 지출 결의',
        author: '박기획',
        date: '2025-09-22',
        status: 'pending', // 내가 결재할 차례
        content: '2025년 하반기 워크샵 진행을 위한 경비 지출 결의를 요청합니다.\n\n- 예상 비용: 3,000,000원\n- 상세 내역: 첨부파일 참조',
        approvalLine: [
            { approverId: 'contact-3', approverName: '박기획', status: 'approved', comment: '기안' },
            { approverId: 'me', approverName: '나', status: 'current', comment: '' }, // 'me'는 현재 로그인한 나
            { approverId: 'contact-1', approverName: '김개발', status: 'pending', comment: '' },
        ]
    },
    {
        id: 'approval-2',
        title: '신규 개발 서버 구매 요청',
        author: '나',
        date: '2025-09-20',
        status: 'in-progress', // 진행중
        content: '신규 프로젝트를 위한 개발 서버 2대 구매를 요청합니다.',
        approvalLine: [
            { approverId: 'me', approverName: '나', status: 'approved', comment: '기안' },
            { approverId: 'contact-1', approverName: '김개발', status: 'current', comment: '' },
            { approverId: 'contact-4', approverName: '최총무', status: 'pending', comment: '' },
        ]
    },
     {
        id: 'approval-3',
        title: '법인카드 사용 내역 보고',
        author: '최총무',
        date: '2025-09-19',
        status: 'completed', // 완료됨
        content: '8월 법인카드 사용 내역 보고서입니다.',
        approvalLine: [
            { approverId: 'contact-4', approverName: '최총무', status: 'approved', comment: '기안' },
            { approverId: 'me', approverName: '나', status: 'approved', comment: '확인' },
        ]
    },
];

