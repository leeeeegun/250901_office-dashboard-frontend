import React, { useState, useEffect } from 'react';
import AppHeader from './components/layout/AppHeader.jsx';
import Sidebar from './components/layout/Sidebar.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Hubbie from './components/Hubbie.jsx';

import MailPage from './pages/MailPage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import CalendarPage from './pages/CalendarPage.jsx';
import BookingPage from './pages/BookingPage.jsx';
import SurveyPage from './pages/SurveyPage.jsx';
import BoardPage from './pages/BoardPage.jsx';
import ApprovalPage from './pages/ApprovalPage.jsx';
import LunchPage from './pages/LunchPage.jsx';
import FortunePage from './pages/FortunePage.jsx';

export default function App() {

    const [activePage, setActivePage] = useState('dashboard');
    const [showHubbieCelebration, setShowHubbieCelebration] = useState(false);
    const [workStatus, setWorkStatus] = useState(() => localStorage.getItem('workStatus') || '업무중');

    useEffect(() => {
        localStorage.setItem('workStatus', workStatus);
    }, [workStatus]);


    const handleTaskComplete = () => {
        setShowHubbieCelebration(true);
        setTimeout(() => {
            setShowHubbieCelebration(false);
        }, 2000);
    };

    const renderContent = () => {
        switch (activePage) {
            case 'mail': return <MailPage />;
            case 'contacts': return <ContactsPage />;
            case 'calendar': return <CalendarPage />;
            case 'booking': return <BookingPage />;
            case 'survey': return <SurveyPage />;
            case 'board': return <BoardPage />;
            case 'approval': return <ApprovalPage />;
            case 'lunch': return <LunchPage />;
            case 'fortune': return <FortunePage />;
            default:
                return <Dashboard
                    onTaskComplete={handleTaskComplete}
                    workStatus={workStatus}
                    setWorkStatus={setWorkStatus}
                />;
        }
    };

    return (
        <div className="w-full h-screen flex flex-col bg-gray-50 text-gray-800">

            <AppHeader />
            <div className="flex flex-1 overflow-hidden">

                <Sidebar
                    activePage={activePage}
                    setActivePage={setActivePage}
                />
                {renderContent()}
            </div>
            <Hubbie showCelebration={showHubbieCelebration} />
        </div>
    );
}

