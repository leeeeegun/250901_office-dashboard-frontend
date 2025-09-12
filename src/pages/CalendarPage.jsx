import React, { useState, useEffect } from 'react';
import { calendarEvents as initialEvents } from '../data/mockData.js';
import CalendarHeader from '../components/calendar/CalendarHeader.jsx';
import CalendarGrid from '../components/calendar/CalendarGrid.jsx';
import AddEventModal from '../components/calendar/AddEventModal.jsx';

const CalendarPage = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [events, setEvents] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        const savedEvents = JSON.parse(localStorage.getItem('calendarEvents'));
        setEvents(savedEvents || initialEvents);
    }, []);

    useEffect(() => {
        localStorage.setItem('calendarEvents', JSON.stringify(events));
    }, [events]);

    const handlePrevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    const handleNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    const handleToday = () => setCurrentDate(new Date());

    const handleDateClick = (dateString) => {
        setSelectedDate(dateString);
        setIsModalOpen(true);
    };

    const handleSaveEvent = (title) => {
        const newEvent = {
            id: `event-${Date.now()}`,
            date: selectedDate,
            title,
        };
        setEvents([...events, newEvent]);
    };

    return (
        <main className="flex-1 flex flex-col bg-white overflow-hidden">
            {/* 달력 헤더 (월 이동, 오늘 버튼) */}
            <CalendarHeader
                currentDate={currentDate}
                onPrevMonth={handlePrevMonth}
                onNextMonth={handleNextMonth}
                onToday={handleToday}
            />
            {/* 달력 본체 (날짜 그리드) */}
            <CalendarGrid
                currentDate={currentDate}
                events={events}
                onDateClick={handleDateClick}
            />
            {isModalOpen && (
                <AddEventModal
                    date={selectedDate}
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleSaveEvent}
                />
            )}
        </main>
    );
};

export default CalendarPage;

