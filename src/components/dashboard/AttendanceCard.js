const AttendanceCard = () => {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formattedDate = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 (${'일월화수목금토'[now.getDay()]}) ${now.toLocaleTimeString('ko-KR')}`;

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-base font-bold mb-1">근태관리</h2>
            <p className="text-sm text-gray-500 mb-4">{formattedDate}</p>
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg mb-4">
                <div>
                    <p className="text-sm text-gray-500">최근 시간</p>
                    <p className="text-2xl font-bold">08:12:25</p>
                </div>
                <div className="text-sm text-gray-500">→</div>
                <div>
                    <p className="text-sm text-gray-500">퇴근 시간</p>
                    <p className="text-2xl font-bold text-gray-300">-</p>
                </div>
            </div>
            <div className="mb-4">
                <p className="text-sm mb-2">주간누적 <span className="font-bold text-cyan-500">33시간 00분</span> / 이번 주 40시간이 더 필요해요!</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-cyan-400 h-2.5 rounded-full" style={{ width: "52%" }}></div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-2 mt-4">
                <button className="px-6 py-2.5 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 font-semibold text-sm">출근하기</button>
                <button className="px-6 py-2.5 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 font-semibold text-sm">퇴근하기</button>
                <button className="px-8 py-2.5 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 text-sm">근무상태 변경</button>
            </div>
        </div>
    );
};

const BoardCard = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold">게시판</h2>
            <div className="flex items-center gap-4 text-sm">
                <a href="#" className="font-semibold text-cyan-500">전체</a>
                <a href="#" className="text-gray-500 hover:text-gray-800">공지사항</a>
                <a href="#" className="text-gray-500 hover:text-gray-800">설문조사</a>
            </div>
        </div>
        <ul className="space-y-4">
            {boardItems.map(item => (
                <li key={item.id} className="flex items-start gap-4">
                    <img src={item.thumbnailUrl} className="rounded w-[120px] h-[80px] object-cover" alt="thumbnail" />
                    <div>
                        <p className="font-semibold">{`[${item.category}] ${item.title}`}</p>
                        <p className="text-sm text-gray-500">{`${item.author} · ${item.date} · ${item.group}`}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

const ProfileCard = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="text-center mb-4">
            <img src={userInfo.avatarUrl} className="w-20 h-20 rounded-full mx-auto mb-2" alt="Profile" />
            <p className="font-bold text-lg">{userInfo.name} 사원</p>
            <p className="text-sm text-gray-500">{userInfo.team}</p>
        </div>
        <div className="flex justify-around text-center">
            <div>
                <p className="text-2xl font-bold">{userInfo.todayMailCount}</p>
                <p className="text-sm text-gray-500">오늘 메일</p>
            </div>
            <div>
                <p className="text-2xl font-bold">{userInfo.todayScheduleCount}</p>
                <p className="text-sm text-gray-500">오늘의 일정</p>
            </div>
        </div>
        <ul className="mt-6 space-y-3 text-sm">
            <li className="flex justify-between"><span>내 커뮤니티 새 글</span> <span className="font-semibold">{userInfo.communityNewPostCount}</span></li>
            <li className="flex justify-between"><span>내역서 / TO-DO</span> <span className="font-semibold">{userInfo.todoCount}</span></li>
            <li className="flex justify-between"><span>결재할 문서</span> <span className="font-semibold text-red-500">{userInfo.approvalPendingCount}</span></li>
        </ul>
    </div>
);

const Dashboard = () => (
    <div className="flex flex-1 overflow-hidden">
        <aside className="w-60 bg-white border-r p-4 overflow-y-auto">
            <h2 className="text-lg font-bold mb-4">전사 대시보드</h2>
            <ul className="space-y-1">
                <li><a href="#" className="block px-4 py-2 rounded font-semibold bg-cyan-50 text-cyan-600">전사 대시보드</a></li>
                <li><a href="#" className="block px-4 py-2 rounded hover:bg-gray-100">내 대시보드</a></li>
            </ul>
        </aside>
        <main className="flex-1 p-6 overflow-y-auto">
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 space-y-6">
                    <AttendanceCard />
                    <BoardCard />
                </div>
                <div className="col-span-1 space-y-6">
                    <ProfileCard />
                </div>
            </div>
        </main>
        <aside className="w-16 bg-white border-l flex flex-col items-center py-4 space-y-2">
        </aside>
    </div>
);
