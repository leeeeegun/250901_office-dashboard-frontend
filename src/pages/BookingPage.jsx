import React, { useState, useEffect, useMemo } from 'react';
import { bookingResources, bookings as initialBookings } from '../data/mockData.js';
import ResourceList from '../components/booking/ResourceList.jsx';
import TimeGrid from '../components/booking/TimeGrid.jsx';
import BookingModal from '../components/booking/BookingModal.jsx';

const BookingPage = () => {
    // 현재 선택된 날짜를 저장
    const [currentDate, setCurrentDate] = useState(new Date());
    // 모든 예약 목록을 저장
    const [bookings, setBookings] = useState([]);
    // 기본값: 첫 번째 회의실
    const [selectedResourceId, setSelectedResourceId] = useState(bookingResources[0].id);
    const [modalInfo, setModalInfo] = useState({ isOpen: false, date: null, time: null });

    useEffect(() => {
        const savedBookings = JSON.parse(localStorage.getItem('bookings'));
        setBookings(savedBookings || initialBookings);
    }, []);

    useEffect(() => {
        localStorage.setItem('bookings', JSON.stringify(bookings));
    }, [bookings]);

    const handleDateChange = (days) => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            newDate.setDate(prev.getDate() + days);
            return newDate;
        });
    };

    const handleOpenModal = (time) => {
        setModalInfo({ isOpen: true, date: currentDate.toISOString().split('T')[0], time });
    };

    const handleSaveBooking = ({ title, startTime, endTime }) => {
        const newBooking = {
            id: `booking-${Date.now()}`,
            resourceId: selectedResourceId,
            user: '나',
            title,
            start: `${modalInfo.date}T${startTime}:00`,
            end: `${modalInfo.date}T${endTime}:00`,
        };
        setBookings([...bookings, newBooking]);
    };

    const todaysBookings = useMemo(() => {
        const dateString = currentDate.toISOString().split('T')[0];
        return bookings.filter(b => b.resourceId === selectedResourceId && b.start.startsWith(dateString));
    }, [bookings, selectedResourceId, currentDate]);

    return (
        <main className="flex-1 flex bg-white overflow-hidden">
            {/* 왼쪽 회의실 목록 사이드바 */}
            <ResourceList resources={bookingResources} selectedResourceId={selectedResourceId} onSelect={setSelectedResourceId} />

            {/* 오른쪽 예약 현황판 */}
            <div className="flex-1 flex flex-col">
                <header className="p-4 border-b flex justify-between items-center flex-shrink-0">
                    <h1 className="text-xl font-bold">{bookingResources.find(r => r.id === selectedResourceId).name}</h1>
                    <div className="flex items-center gap-2">
                        <button onClick={() => handleDateChange(-1)} className="p-2 rounded-full hover:bg-gray-100">&lt;</button>
                        <span className="font-semibold">{currentDate.toLocaleDateString('ko-KR')}</span>
                        <button onClick={() => handleDateChange(1)} className="p-2 rounded-full hover:bg-gray-100">&gt;</button>
                        <button onClick={() => setCurrentDate(new Date())} className="ml-4 px-4 py-2 text-sm border rounded-lg">오늘</button>
                    </div>
                </header>
                <TimeGrid bookings={todaysBookings} onSelectTime={handleOpenModal} />
            </div>

            {modalInfo.isOpen && (
                <BookingModal
                    date={modalInfo.date}
                    time={modalInfo.time}
                    onClose={() => setModalInfo({ isOpen: false, date: null, time: null })}
                    onSave={handleSaveBooking}
                />
            )}
        </main>
    );
};

export default BookingPage;


