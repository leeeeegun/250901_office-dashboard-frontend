import React from 'react';
import AttendanceCard from './AttendanceCard.jsx';
import BoardCard from './BoardCard.jsx';
import ProfileCard from './ProfileCard.jsx';

const Dashboard = () => (
    <div className="flex flex-1 overflow-hidden">
        <aside className="w-60 bg-white border-r p-4 overflow-y-auto">
            <h2 className="text-lg font-bold mb-4">전사 대시보드</h2>
            <ul className="space-y-1">
                <li><a href="#" className="block px-4 py-2 rounded font-semibold bg-cyan-50 text-cyan-600">전사 대시보드</a></li>
                <li><a href="#" className="block px-4 py-2 rounded hover:bg-gray-100">내 대시보드</a></li>
            </ul>
        </aside>
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 space-y-6">
                    <AttendanceCard />
                    <BoardCard />
                </div>
                <div className="col-span-1 space-y-6">
                    <ProfileCard />
                </div>
            </div>
        </main>
        <aside className="w-16 bg-white border-l flex flex-col items-center py-4 space-y-2">
        </aside>
    </div>
);

export default Dashboard;