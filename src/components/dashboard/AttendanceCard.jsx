import React, { useState, useEffect } from "react";

// 근태 관리
const AttendanceCard = () => {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        // 1초 마다 시간을 업데이트하는 타이머 설정
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
                <p className="text-sm mb-2">주간누적 <span className="font-bold text-cyan-500">33시간 00분</span> / 이번 주 10시간이 더 필요해요! </p>
                <div className="w-full bg-gray-200 rounded-full">
                    <div className="bg-cyan-400 h-2.5 rounded-full" style={{ width: "52%" }}></div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-2 mt-4">
                <button className="px-6 py-2.5 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 font-semibold text-sm">출근하기</button>
                <button className="px-6 py-2.5 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 font-semibold text-sm">퇴근하기</button>
                <button className="px-8 py-2.5 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 text-sm">근무상태 변경</button>
            </div>
        </div>
    )
};

export default AttendanceCard;