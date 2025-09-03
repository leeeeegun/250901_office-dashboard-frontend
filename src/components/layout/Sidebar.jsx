import React from 'react';
import * as Icons from '../common/Icons.jsx';

const Sidebar = ({ activePage, setActivePage }) => {

    const menuItems = [
        { key: 'dashboard', label: '대시보드', Icon: Icons.DashboardIcon },
        { key: 'mail', label: '메일', Icon: Icons.MailIcon },
        { key: 'contacts', label: '주소록', Icon: Icons.ContactsIcon },
        { key: 'calendar', label: '캘린더', Icon: Icons.CalendarIcon },
        { key: 'booking', label: '예약', Icon: Icons.BookingIcon },
        { key: 'survey', label: '설문', Icon: Icons.SurveyIcon },
        { key: 'board', label: '게시판', Icon: Icons.BoardIcon },
        { key: 'approval', label: '전자결재', Icon: Icons.ApprovalIcon },
        { key: 'lunch', label: '점심추천', Icon: Icons.LunchIcon },
        { key: 'fortune', label: '오늘의운세', Icon: Icons.FortuneIcon },
    ];

    return (
        <aside className="w-24 bg-white border-r flex flex-col items-center py-4 flex-shrink-0">
            <nav className="flex-1">
                <ul className="space-y-2">
                    {menuItems.map(item => (
                        <li key={item.key}>
                            <button
                                onClick={() => setActivePage(item.key)}
                                className={`w-full flex flex-col items-center p-2 rounded-lg transition-colors ${
                                    activePage === item.key
                                        ? 'bg-cyan-50 text-cyan-600' 
                                        : 'text-gray-500 hover:bg-gray-100' 
                                }`}
                            >
                                <item.Icon />
                                <span className="text-xs mt-1 font-semibold">{item.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;