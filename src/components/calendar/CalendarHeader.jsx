import React from 'react';

const CalendarHeader = ({ currentDate, onPrevMonth, onNextMonth, onToday }) => {
    const monthYearFormat = new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: 'long' });

    return (
        <header className="p-4 border-b flex justify-between items-center flex-shrink-0">
            <div className="flex items-center gap-2">
                <button onClick={onPrevMonth} className="p-2 rounded-full hover:bg-gray-100">&lt;</button>
                <button onClick={onNextMonth} className="p-2 rounded-full hover:bg-gray-100">&gt;</button>
                <h1 className="text-xl font-bold ml-4">{monthYearFormat.format(currentDate)}</h1>
            </div>
            <button onClick={onToday} className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-50">
                오늘
            </button>
        </header>
    );
};

export default CalendarHeader;

