import React from 'react';

const CalendarGrid = ({ currentDate, events, onDateClick }) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // 이번 달의 시작일, 마지막일, 그리고 시작 요일을 계산
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const startDayOfWeek = firstDayOfMonth.getDay(); // 0(일) ~ 6(토)

    const daysInMonth = [];
    // 이전 달의 마지막 날짜
    for (let i = 0; i < startDayOfWeek; i++) {
        const date = new Date(year, month, i - startDayOfWeek + 1);
        daysInMonth.push({ date, isCurrentMonth: false });
    }
    // 이번 달의 날짜
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
        const date = new Date(year, month, i);
        daysInMonth.push({ date, isCurrentMonth: true });
    }
    // 다음 달의 시작 날짜들을 채워넣어서 6주(42칸)
    const remainingSlots = 42 - daysInMonth.length;
    for (let i = 1; i <= remainingSlots; i++) {
        const date = new Date(year, month + 1, i);
        daysInMonth.push({ date, isCurrentMonth: false });
    }

    const today = new Date();

    return (
        <div className="grid grid-cols-7 flex-1">
            {/* 요일 헤더 (일, 월, 화...) */}
            {['일', '월', '화', '수', '목', '금', '토'].map(day => (
                <div key={day} className="text-center font-semibold text-sm p-2 border-b border-r">{day}</div>
            ))}
            {/* 날짜 그리드 */}
            {daysInMonth.map(({ date, isCurrentMonth }, index) => {
                const dateString = date.toISOString().split('T')[0];
                const isToday = date.toDateString() === today.toDateString();
                const dayEvents = events.filter(e => e.date === dateString);

                return (
                    <div
                        key={index}
                        onClick={() => isCurrentMonth && onDateClick(dateString)} // 이번 달 날짜만 클릭 가능하게
                        className={`p-2 border-b border-r h-28 flex flex-col ${isCurrentMonth ? 'cursor-pointer hover:bg-cyan-50' : 'text-gray-400 bg-gray-50'}`}
                    >
                        <span className={`self-end ${isToday ? 'bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center' : ''}`}>
                            {date.getDate()}
                        </span>
                        <div className="mt-1 space-y-1 overflow-hidden">
                            {/* 이벤트가 있으면 작은 점으로 표시해줘. */}
                            {dayEvents.map(event => (
                                <div key={event.id} className="text-xs truncate px-1 py-0.5 rounded bg-cyan-100 text-cyan-800">
                                    {event.title}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CalendarGrid;
