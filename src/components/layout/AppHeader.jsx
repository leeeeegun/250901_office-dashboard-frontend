import React from 'react';
import { userInfo } from '../../data/mockData.js'; // 헤더에 사용자 이름을 표시하기 위해 데이터 import

const AppHeader = () => {
    return (
        <header className="h-16 bg-white border-b flex items-center justify-between px-6 flex-shrink-0">
            <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-cyan-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M22 12L18 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M6 12L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 12C16 14.2091 14.2091 16 12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 8C9.79086 8 8 9.79086 8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <rect x="10" y="10" width="4" height="4" rx="1" fill="currentColor"/>
                </svg>
                <span className="text-xl font-light text-gray-800">HUB 오피스</span>
            </div>
            <div className="flex items-center gap-4">
                <div className="relative">
                    <input type="text" placeholder="검색어를 입력하세요" className="w-64 pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                    <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-2 rounded-full hover:bg-gray-100">{/* 설정 아이콘 */}</button>
                    <button className="p-2 rounded-full hover:bg-gray-100">{/* 알림 아이콘 */}</button>
                </div>
                <div className="flex items-center gap-2 border-l pl-4">
                    <img src={userInfo.avatarUrl} className="w-8 h-8 rounded-full" alt="User Avatar" />
                    <div>
                        <span className="font-semibold text-sm">{userInfo.name}</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppHeader;