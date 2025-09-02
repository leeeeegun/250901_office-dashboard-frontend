import React from 'react';
import * as Icons from '../common/Icons.jsx';

const NavItem = ({ icon, label, active }) => (
    <a href="#" className={`flex flex-col items-center justify-center p-2 rounded-lg w-full ${active ? 'text-cyan-600 bg-cyan-50' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'}`} title={label}>
        {icon}
        <span className="text-xs font-medium">{label}</span>
    </a>
);

const Sidebar = () => {
    const menuItems = [
        { icon: <Icons.DashboardIcon />, label: "대시보드", active: true },
        { icon: <Icons.MailIcon />, label: "메일" },
        { icon: <Icons.AddressBookIcon />, label: "주소록" },
        { icon: <Icons.CalendarIcon />, label: "캘린더" },
        { icon: <Icons.ReservationIcon />, label: "예약" },
        { icon: <Icons.SurveyIcon />, label: "설문" },
        { icon: <Icons.BoardIcon />, label: "게시판" },
        { icon: <Icons.ApprovalIcon />, label: "전자결제" },
        { icon: <Icons.LunchIcon />, label: "점심추천" },
        { icon: <Icons.FortuneIcon />, label: "오늘운세" },
    ];
    return (
        <nav className="w-20 bg-white border-r flex flex-col items-center py-4 space-y-2">
            {menuItems.map(item => <NavItem key={item.label} {...item} />)}
        </nav>
    );
};

export default Sidebar;