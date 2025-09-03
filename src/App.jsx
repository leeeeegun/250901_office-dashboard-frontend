/*
  - 파일 경로: src/App.jsx
  - 역할: 우리 앱의 모든 조각을 조립하고, 페이지 이동을 총괄하는 최종 지휘자야.
*/
import React, { useState } from 'react';
import AppHeader from './components/layout/AppHeader.jsx';
import Sidebar from './components/layout/Sidebar.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';

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
                return <Dashboard />;
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
        </div>
    );
}

