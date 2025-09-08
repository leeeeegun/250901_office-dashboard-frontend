export const userInfo = {
    name: "이의건",
    team: "개발팀",
    avatarUrl: "https://placehold.co/80x80/a7f3d0/1e293b?text=LEE",
    todayMailCount: 13,
    todayScheduleCount: 4,
};
export const boardItems = [
    {
        id: 1,
        category: "공지사항",
        title: "HUB 오피스 9월 정기 업데이트",
        author: "김ㅇㅇ 부장",
        date: "2025-09-03 10:39",
        group: "HUB 오피스",
        thumbnailUrl: "https://placehold.co/240x160/e0f2fe/0891b2?text=Notice"
    },
    {
        id: 3,
        category: "설문조사",
        title: "2025년 하반기 워크샵 장소 선호도 조사",
        author: "박ㅇㅇ 대리",
        date: "2025-09-02 14:00",
        group: "인사팀",
        thumbnailUrl: "https://placehold.co/240x160/fef08a/854d0e?text=Survey"
    },
    {
        id: 2,
        category: "공지사항",
        title: "[전사] 2025년 추석 연휴 근무 안내",
        author: "이ㅇㅇ 차장",
        date: "2025-09-01 11:00",
        group: "인사팀",
        thumbnailUrl: "https://placehold.co/240x160/fecaca/991b1b?text=Holiday"
    },
    {
        id: 4,
        category: "설문조사",
        title: "사내 카페 만족도 및 신규 메뉴 의견 수렴",
        author: "최ㅇㅇ 사원",
        date: "2025-08-30 17:20",
        group: "총무팀",
        thumbnailUrl: "https://placehold.co/240x160/d8b4fe/581c87?text=Cafe"
    }
];

export const emails = [
    {
        id: 'email-1',
        sender: 'HUB 오피스 관리자',
        subject: '[공지] 9월 정기점검 안내 (9/10, 02:00-04:00)',
        snippet: '안녕하세요, HUB 오피스입니다. 보다 안정적인 서비스 제공을 위해 아래와 같이 시스템 정기점검을...',
        // [핵심] 상세 보기를 위한 실제 메일 본문 내용. \n은 줄바꿈을 의미해.
        body: `안녕하세요, HUB 오피스입니다.\n\n보다 안정적인 서비스 제공을 위해 아래와 같이 시스템 정기점검을 실시할 예정입니다.\n점검 시간 동안에는 서비스 접속이 원활하지 않을 수 있으니 양해 부탁드립니다.\n\n- 점검 일시: 2025년 9월 10일(수) 02:00 ~ 04:00 (2시간)\n- 점검 내용: 서버 안정화 및 보안 업데이트\n\n감사합니다.\nHUB 오피스 드림.`,
        timestamp: '오후 3:45',
        timestampFull: '2025년 9월 5일 오후 3:45', // 상세 보기에 표시될 전체 시간
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
        name: '정마케팅',
        department: '마케팅본부',
        position: '사원',
        email: 'dev.jung@huboffice.com',
        officePhone: '070-1234-5678 (내선 102)',
        mobilePhone: '010-5555-5555',
        avatarUrl: 'https://placehold.co/80x80/dbeafe/1e3a8a?text=정',
        isFavorite: false,
    }
];
