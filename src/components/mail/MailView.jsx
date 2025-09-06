import React from 'react';
import { userInfo } from '../../data/mockData.js';

const MailView = ({ email, onBack }) => {
    return (
        <div className="flex-1 flex flex-col bg-white overflow-hidden">
            {/* 상세 보기 헤더 */}
            <header className="p-4 border-b flex items-center flex-shrink-0">
                <button onClick={onBack} className="mr-4 p-2 rounded-full hover:bg-gray-100" title="목록으로 돌아가기">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </button>
                <h1 className="text-xl font-bold truncate">{email.subject}</h1>
            </header>
            {/* 메일 본문 영역 */}
            <div className="p-6 overflow-y-auto">
                <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold text-xl mr-4">
                        {email.sender.charAt(0)}
                    </div>
                    <div>
                        <p className="font-semibold">{email.sender}</p>
                        <p className="text-sm text-gray-500">받는사람: 나 ({userInfo.name})</p>
                    </div>
                    <p className="ml-auto text-sm text-gray-500">{email.timestampFull}</p>
                </div>
                <div className="text-gray-800 leading-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                    {email.body}
                </div>
            </div>
        </div>
    );
};
export default MailView;