import React, { useState } from 'react';
import AttendanceCard from './AttendanceCard.jsx';
import BoardCard from './BoardCard.jsx';
import ProfileCard from './ProfileCard.jsx';
import TodoList from './TodoList.jsx';

const Dashboard = () => {
    // 전사탭과 내탭 구분
    const [activeTab, setActiveTab] = useState('company');
    // 근무 상태를 해당 컴포넌트에서 관리
    const [workStatus, setWorkStatus] = useState('업무중');

    return (
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">대시보드</h1>
                <div className="flex gap-2 p-1 bg-gray-200 rounded-lg">
                    <button
                        onClick={() => setActiveTab('company')}
                        className={`px-4 py-1 text-sm font-semibold rounded-md ${activeTab === 'company' ? 'bg-white shadow' : 'text-gray-600'}`}
                    >
                        전사 대시보드
                    </button>
                    <button
                        onClick={() => setActiveTab('my')}
                        className={`px-4 py-1 text-sm font-semibold rounded-md ${activeTab === 'my' ? 'bg-white shadow' : 'text-gray-600'}`}
                    >
                        내 대시보드
                    </button>
                </div>
            </div>

            {/* 전사 탭 활성화 */}
            {activeTab === 'company' ? (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <AttendanceCard workStatus={workStatus} setWorkStatus={setWorkStatus} />
                        <BoardCard />
                    </div>
                    <div className="lg:col-span-1">
                        <ProfileCard workStatus={workStatus} />
                    </div>
                </div>
            ):(
                <div>
                    <TodoList />
                </div>

            )}
        </main>
    )
};

export default Dashboard;

