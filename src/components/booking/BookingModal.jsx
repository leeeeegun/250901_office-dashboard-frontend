import React, { useState } from 'react';

// date(선택 날짜), time(선택 시간), onClose, onSave 함수 가져옴
const BookingModal = ({ date, time, onClose, onSave }) => {
    const [title, setTitle] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleSave = () => {
        if (!title.trim() || !endTime) {
            alert('회의 제목과 종료 시간을 입력해주세요.');
            return;
        }
        onSave({ title, startTime: time, endTime });
        onClose();
    };

    // 종료 시간 옵션을 30분 단위로 만들어주는 로직
    const availableEndTimes = [];
    const [startHour, startMinute] = time.split(':').map(Number);
    for (let hour = startHour; hour < 19; hour++) {
        if (hour > startHour) {
            availableEndTimes.push(`${String(hour).padStart(2, '0')}:00`);
        }
        if (startMinute === 0 && hour === startHour) {
             availableEndTimes.push(`${String(hour).padStart(2, '0')}:30`);
        } else if (startMinute === 30 && hour === startHour) {
            // 시작이 30분이면 다음 시간 00분부터
        } else {
             availableEndTimes.push(`${String(hour).padStart(2, '0')}:30`);
        }
    }
     availableEndTimes.push("19:00");


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                <header className="p-4 border-b">
                    <h2 className="font-semibold text-lg">새 예약</h2>
                    <p className="text-sm text-gray-500">{new Date(date).toLocaleDateString('ko-KR')}</p>
                </header>
                <div className="p-6 space-y-4">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="회의 제목"
                        className="w-full p-2 border rounded-md" autoFocus
                    />
                    <div className="flex items-center gap-2">
                        <input type="time" value={time} readOnly className="p-2 border rounded-md bg-gray-100" />
                        <span>~</span>
                        <select value={endTime} onChange={(e) => setEndTime(e.target.value)} className="p-2 border rounded-md">
                            <option value="">종료 시간</option>
                            {availableEndTimes.map(et => <option key={et} value={et}>{et}</option>)}
                        </select>
                    </div>
                </div>
                <footer className="p-4 flex justify-end gap-2 bg-gray-50 rounded-b-lg">
                    <button onClick={onClose} className="px-4 py-2 rounded-lg bg-gray-200">취소</button>
                    <button onClick={handleSave} className="px-4 py-2 rounded-lg bg-cyan-500 text-white">저장</button>
                </footer>
            </div>
        </div>
    );
};

export default BookingModal;