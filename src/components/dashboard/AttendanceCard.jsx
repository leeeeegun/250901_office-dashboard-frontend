import React, { useState, useEffect } from 'react';

const getStartOfWeek = () => {
    const today = new Date();
    const day = today.getDay(); // 0(일요일) ~ 6(토요일)
    const diff = today.getDate() - day + (day === 0 ? -6 : 1); // 일요일이면 6일 빼고, 아니면 (요일-1)일 만큼 뺌
    return new Date(today.setDate(diff)).toISOString().split('T')[0];
};

// --- 메인 컴포넌트 ---

const AttendanceCard = ({ workStatus, setWorkStatus }) => {
    // --- 상태 저장 공간 (useState) ---
    const [currentTime, setCurrentTime] = useState(new Date()); // 1초마다 업데이트되는 현재 시간
    const [attendanceLog, setAttendanceLog] = useState({}); // 출퇴근 시간 기록 {'2025-09-05': { checkIn: '...', checkOut: '...' }}
    const [weeklyRecords, setWeeklyRecords] = useState([]); // 주간 근무 기록 [{ date: '...', workHours: 8 }, ...]
    const [modal, setModal] = useState({ isOpen: false, type: null, message: '' }); // 확인 모달창 상태

    // --- 데이터 불러오기 & 시간 업데이트 (useEffect) ---
    useEffect(() => {
        const savedLog = JSON.parse(localStorage.getItem('attendanceLog')) || {};
        const savedRecords = JSON.parse(localStorage.getItem('weeklyRecords')) || [];
        const savedStatus = localStorage.getItem('workStatus') || '업무중';

        const startOfWeek = getStartOfWeek();
        const lastRecordDate = savedRecords.length > 0 ? savedRecords[0].date : null;

        if (lastRecordDate && lastRecordDate < startOfWeek) {
            setWeeklyRecords([]);
            localStorage.setItem('weeklyRecords', JSON.stringify([]));
        } else {
            setWeeklyRecords(savedRecords);
        }

        setAttendanceLog(savedLog);
        setWorkStatus(savedStatus);

        // 3. 1초마다 현재 시간을 업데이트하는 타이머 설정
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer); // 컴포넌트가 꺼질 때 타이머 정리
    }, []);

    // --- 출퇴근 처리 로직 ---
    const handleAction = (type) => {
        const message = type === 'checkIn' ? '지금 출근하시겠습니까?' : '지금 퇴근하시겠습니까?';
        setModal({ isOpen: true, type, message });
    };

    const confirmAction = () => {
        const today = new Date().toISOString().split('T')[0];
        const now = new Date().toLocaleTimeString('ko-KR', { hour12: false });
        const newLog = { ...attendanceLog };

        if (modal.type === 'checkIn') {
            newLog[today] = { ...newLog[today], checkIn: now };
        } else if (modal.type === 'checkOut') {
            newLog[today] = { ...newLog[today], checkOut: now };
            // 퇴근 시 근무 시간 계산 및 주간 기록 업데이트
            updateWeeklyRecord(today, newLog[today].checkIn, now);
        }

        setAttendanceLog(newLog);
        localStorage.setItem('attendanceLog', JSON.stringify(newLog));
        setModal({ isOpen: false, type: null, message: '' });
    };

    // --- 근무 시간 계산 및 저장 로직 ---
    const updateWeeklyRecord = (date, checkIn, checkOut) => {
        if (!checkIn || !checkOut) return;

        const [inH, inM, inS] = checkIn.split(':').map(Number);
        const [outH, outM, outS] = checkOut.split(':').map(Number);

        const workHours = (outH - inH) + (outM - inM) / 60 + (outS - inS) / 3600;
        const newRecord = { date, workHours: Math.max(0, workHours) }; // 음수 방지

        // 기존에 오늘 날짜의 기록이 있으면 업데이트, 없으면 새로 추가
        const updatedRecords = weeklyRecords.filter(r => r.date !== date);
        const newWeeklyRecords = [...updatedRecords, newRecord];

        setWeeklyRecords(newWeeklyRecords);
        localStorage.setItem('weeklyRecords', JSON.stringify(newWeeklyRecords));
    };

    // --- 근무 상태 변경 로직 ---
    const handleStatusChange = (e) => {
        const newStatus = e.target.value;
        setWorkStatus(newStatus);
        localStorage.setItem('workStatus', newStatus);

        // 연차/반차 선택 시 근무 시간을 자동으로 기록
        const today = new Date().toISOString().split('T')[0];
        let workHours = 0;
        if (newStatus === '연차') workHours = 8;
        if (newStatus === '오전반차' || newStatus === '오후반차') workHours = 4;
        
        if (workHours > 0) {
            const newRecord = { date: today, workHours };
            const updatedRecords = weeklyRecords.filter(r => r.date !== today);
            const newWeeklyRecords = [...updatedRecords, newRecord];
            setWeeklyRecords(newWeeklyRecords);
            localStorage.setItem('weeklyRecords', JSON.stringify(newWeeklyRecords));
        }
    };

    // --- 화면에 표시될 데이터 계산 ---
    const todayString = new Date().toISOString().split('T')[0];
    const todayLog = attendanceLog[todayString] || {};
    const totalWeeklyHours = weeklyRecords.reduce((sum, record) => sum + record.workHours, 0);
    const remainingHours = 40 - totalWeeklyHours;
    const weeklyStatusMessage = remainingHours > 0
        ? `이번 주 ${remainingHours.toFixed(1)}시간이 더 필요해요!`
        : `이번 주 ${Math.abs(remainingHours).toFixed(1)}시간을 초과했습니다!`;

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            {/* 확인 모달창 UI */}
            {modal.isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl">
                        <p className="text-lg font-semibold mb-4">{modal.message}</p>
                        <div className="flex justify-end gap-2">
                            <button onClick={() => setModal({ isOpen: false, type: null, message: '' })} className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">아니요</button>
                            <button onClick={confirmAction} className="px-4 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600">네</button>
                        </div>
                    </div>
                </div>
            )}

            {/* 메인 카드 UI */}
            <h2 className="text-base font-bold mb-1">근태관리</h2>
            <p className="text-sm text-gray-500 mb-4">{currentTime.toLocaleString('ko-KR')}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                <div>
                    <p className="text-sm text-gray-500">출근 시간</p>
                    <p className="text-xl font-bold">{todayLog.checkIn || '-'}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">퇴근 시간</p>
                    <p className="text-xl font-bold">{todayLog.checkOut || '-'}</p>
                </div>
            </div>

            <div className="mb-4">
                <p className="text-sm mb-2">
                    주간누적 <span className="font-bold text-cyan-500">{totalWeeklyHours.toFixed(1)}시간</span> / {weeklyStatusMessage}
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-cyan-400 h-2 rounded-full" style={{ width: `${(totalWeeklyHours / 40) * 100}%` }}></div>
                </div>
            </div>
            
            <div className="flex items-center gap-2 mt-4">
                <button onClick={() => handleAction('checkIn')} className="flex-1 py-2.5 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 font-semibold text-sm">출근하기</button>
                <button onClick={() => handleAction('checkOut')} className="flex-1 py-2.5 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 font-semibold text-sm">퇴근하기</button>
                <select value={workStatus} onChange={handleStatusChange} className="flex-1 py-2.5 px-2 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 text-sm focus:outline-none">
                    <option>업무중</option>
                    <option>회의중</option>
                    <option>출장</option>
                    <option>자리비움</option>
                    <option>외출중</option>
                    <option>연차</option>
                    <option>오전반차</option>
                    <option>오후반차</option>
                </select>
            </div>
        </div>
    );
};

export default AttendanceCard;

