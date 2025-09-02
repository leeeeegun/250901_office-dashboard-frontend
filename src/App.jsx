import React, {useState} from "react";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import MailPage from "./pages/MailPage.jsx";
import ContactsPage from "./pages/ContactsPage.jsx";
import CalendarPage from "./pages/CalendarPage.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import SurveyPage from "./pages/SurveyPage.jsx";
import BoardPage from "./pages/BoardPage.jsx";
import ApprovalPage from "./pages/ApprovalPage.jsx";
import LunchPage from "./pages/LunchPage.jsx";
import FortunePage from "./pages/FortunePage.jsx";
import AppHeader from "./components/layout/AppHeader.jsx";
import Sidebar from "./components/layout/Sidebar.jsx";


export default function App() {
    const [activeMenu, setActiveMenu] = useState('dashboard');
    const renderContent = () => {
        switch (activeMenu) {
            case 'dashboard': return <Dashboard />;
            case 'mail': return <MailPage />;
            case 'contacts': return <ContactsPage />;
            case 'calendar': return <CalendarPage />;
            case 'booking': return <BookingPage />;
            case 'survey': return <SurveyPage />;
            case 'board': return <BoardPage />;
            case 'approval': return <ApprovalPage />;
            case 'lunch': return <LunchPage />;
            case 'fortune': return <FortunePage />;
            default: return <Dashboard />; //잘못된 값이 들어오면 기본 페이지 전환
        }
    };

    return (
        <div className="w-full h-screen flex flex-col bg-gray-50 text-gray-800">
            <AppHeader />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar activeMenu={activeMenu} onMenuClick={setActiveMenu} />

                {/* 메인 콘텐츠 영역 */}
                <main className="flex-1 overflow-y-auto">
                    {renderContent()}
                </main>
            </div>
        </div>
    )
}