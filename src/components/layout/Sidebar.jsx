import React from 'react';
import * as Icons from '../common/Icons.jsx';

const Sidebar = ({ activeMenu, onMenuClick }) => {
    const menuItems = [
        { key: 'dashboard', label: '대시보드', icon: <Icons.DashboardIcon /> },
        { key: 'mail', label: '메일', icon: <Icons.MailIcon /> },
        { key: 'contacts', label: '주소록', icon: <Icons.ContactsIcon /> },
        { key: 'calendar', label: '캘린더', icon: <Icons.CalendarIcon /> },
        { key: 'booking', label: '예약', icon: <Icons.BookingIcon /> },
        { key: 'survey', label: '설문', icon: <Icons.SurveyIcon /> },
        { key: 'board', label: '게시판', icon: <Icons.BoardIcon /> },
        { key: 'approval', label: '전자결재', icon: <Icons.ApprovalIcon /> },
        { key: 'lunch', label: '점심추천', icon: <Icons.LunchIcon /> },
        { key: 'fortune', label: '오늘운세', icon: <Icons.FortuneIcon /> },
    ];

    return (
        <aside className="w-20 bg-white border-r flex flex-col items-center py-4 space-y-2 flex-shrink-0">
            {menuItems.map(item => (
                <a
                    key={item.key}
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        onMenuClick(item.key);
                    }}
                    className={`w-16 h-16 flex flex-col items-center justify-center rounded-lg transition-colors ${
                        activeMenu === item.key ? 'bg-cyan-50 text-cyan-500' : 'text-gray-500 hover:bg-gray-100'
                    }`}
                >
                    {item.icon}
                    <span className="text-xs font-medium mt-1">{item.label}</span>
                </a>
            ))}
        </aside>
    );
};

export default Sidebar;