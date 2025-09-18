import React from 'react';

const TimeGrid = ({ bookings, onSelectTime }) => {
    // 오전 9시부터 오후 7시까지 30분 단위로 시간대를 만듦
    const timeSlots = [];
    for (let hour = 9; hour <19; hour++) {
        timeSlots.push(`${String(hour).padStart(2, '0')}:00`);
        timeSlots.push(`${String(hour).padStart(2, '0')}:30`);
    }

    // 예약 정보를 시간대별로 배치
    const getBookingForSlot = (time) => {
        return bookings.find(booking => {
            const bookingStart = new Date(booking.start).toLocaleTimeString('ko-KR', { hour12: false, hour: '2-digit', minute: '2-digit' });
            const bookingEnd = new Date(booking.end).toLocaleTimeString('ko-KR', { hour12: false, hour: '2-digit', minute: '2-digit'});
            return time >= bookingStart && time < bookingEnd;
        });
    };

    return (
        <div className="flex-1 overflow-y-auto">
            {timeSlots.map(time => {
                const booking = getBookingForSlot(time);
                return (
                    <div key={time} className="flex border-b">
                        <div className="w-20 text-center text-sm text-gray-500 py-3 border-r">{time}</div>
                        {booking ? (
                            <div className="flex-1 p-2 bg-cyan-100 border-l-4 border-cyan-500">
                                <p className="font-semibold text-sm text-cyan-800">{booking.title}</p>
                                <p className="text-xs text-cyan-600">{booking.user}</p>
                            </div>
                        ) : (
                            <div
                                onClick={() => onSelectTime(time)}
                                className="flex-1 p-3 hover:bg-cyan-50 cursor-pointer"
                            ></div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default TimeGrid;