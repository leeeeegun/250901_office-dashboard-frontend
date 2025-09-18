import React, { useState } from 'react';
import AttendanceCard from './AttendanceCard.jsx';
import BoardCard from './BoardCard.jsx';
import ProfileCard from './ProfileCard.jsx';
import TodoList from './TodoList.jsx';

const Dashboard = ({ workStatus, setWorkStatus, onTaskComplete }) => {
    // 전사 탭과 내 탭 중 어떤 게 선택됐는지 기억하는 저장 공간
    const [activeTab, setActiveTab] = useState('company');

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

            {/* 전사 탭이 활성화됐을 때 보여줄 내용 */}
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
            ) : (
                <div>
                    <TodoList onTaskComplete={onTaskComplete} />
                </div>
            )}
        </main>
    );
};

export default Dashboard;

