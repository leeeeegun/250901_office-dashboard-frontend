import React, { useState } from 'react';
import { boardItems } from '../../data/mockData.js';

const BoardCard = () => {

const [activeTab, setActiveTab] = useState('all');

// 활성화된 탭에 따라 데이터를 필터링하고, 최신순으로 2개만 잘라서 보여주는 로직
const filteredItems = boardItems
    .filter(item => {
        if (activeTab === 'all') return true;
        if (activeTab === 'notice') return item.category === '공지사항';
        if (activeTab === 'survey') return item.category === '설문조사';
        return false;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // 최신순 정렬
    .slice(0, 2);

return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold">게시판</h2>
            <div className="flex items-center gap-4 text-sm">
                <button onClick={() => setActiveTab('all')} className={activeTab === 'all' ? 'font-semibold text-cyan-500' : 'text-gray-500 hover:text-gray-800'}>전체</button>
                <button onClick={() => setActiveTab('notice')} className={activeTab === 'notice' ? 'font-semibold text-cyan-500' : 'text-gray-500 hover:text-gray-800'}>공지사항</button>
                <button onClick={() => setActiveTab('survey')} className={activeTab === 'survey' ? 'font-semibold text-cyan-500' : 'text-gray-500 hover:text-gray-800'}>설문조사</button>
            </div>
        </div>
        <ul className="space-y-4">
            {filteredItems.map(item => (
                <li key={item.id} className="flex items-start gap-4">
                    <img src={item.thumbnailUrl} className="rounded w-[120px] h-[80px] object-cover" alt="thumbnail" />
                    <div>
                        <p className="font-semibold">{`[${item.category}] ${item.title}`}</p>
                        <p className="text-sm text-gray-500">{`${item.author} · ${item.date} · ${item.group}`}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);
};

export default BoardCard;