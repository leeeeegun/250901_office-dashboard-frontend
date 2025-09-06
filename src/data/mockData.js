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
        snippet: '안녕하세요, HUB 오피스입니다. 보다 안정적인 서비스 제공을 위해 아래와 같이 시스템 정기점검을 실시할 예정입니다. 점검 시간 동안에는 서비스 접속이 원활하지 않을 수 있으니 양해 부탁드립니다.',
        timestamp: '오후 3:45',
        isRead: false, // false면 아직 안 읽은 메일 (배경색 다름)
    },
    {
        id: 'email-2',
        sender: '김철수 부장',
        subject: 'Re: 3분기 실적 보고서 초안 검토 요청',
        snippet: '네, 이대리님. 보내주신 3분기 실적 보고서 초안 잘 받았습니다. 전반적으로 잘 작성되었으나, 몇 가지 수정이 필요한 부분이 보입니다. 첨부파일 확인 후 내일 오전까지 수정 부탁드립니다.',
        timestamp: '오후 1:12',
        isRead: true, // true면 이미 읽은 메일
    },
    {
        id: 'email-3',
        sender: '인사팀',
        subject: '[안내] 2025년 추석 연휴 대체공휴일 적용 안내',
        snippet: '전사 임직원 여러분께 안내 말씀드립니다. 2025년 추석 연휴 대체공휴일 적용에 따라, 9월 29일(월)은 휴무일임을 알려드립니다. 즐거운 명절 보내시길 바랍니다.',
        timestamp: '오전 9:30',
        isRead: false,
    },
];