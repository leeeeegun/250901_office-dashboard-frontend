import React from 'react';

const ApprovalDashboard = ({ counts, onSelectCategory }) => {
    const categories = [
        { key: 'pending', title: '결재 대기 문서', description: '내가 결재해야 할 문서입니다.', count: counts.pending },
        { key: 'in-progress', title: '결재 진행 문서', description: '내가 올린 문서 중 진행중인 문서입니다.', count: counts.inProgress },
        { key: 'completed', title: '완료 문서', description: '결재가 완료된 모든 문서입니다.', count: counts.completed },
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">전자결재 홈</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categories.map(cat => (
                    <div
                        key={cat.key}
                        onClick={() => onSelectCategory(cat.key)}
                        className="bg-white p-6 rounded-lg shadow-sm cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all"
                    >
                        <h2 className="font-bold text-lg">{cat.title}</h2>
                        <p className="text-sm text-gray-500 mt-1">{cat.description}</p>
                        <p className="text-4xl font-bold text-right mt-4 text-cyan-600">{cat.count}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ApprovalDashboard;
