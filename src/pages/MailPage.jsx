import React, { useState } from 'react';
import { emails as initialEmails } from '../data/mockData.js';
import ComposeMail from '../components/mail/ComposeMail.jsx';

const MailPage = () => {
    // 메일 목록 데이터를 저장하고 관리하는 공간
    const [emails, setEmails] = useState(initialEmails);
    // 작성 창을 보여줄지 말지 결정하는 스위치 역할 (true면 보이고, false면 안보임)
    const [isComposing, setIsComposing] = useState(false);

    const handleSendMail = (mailData) => {
        console.log('보낸 메일:', mailData);
        alert(`'${mailData.recipient}'님에게 메일이 성공적으로 발송되었습니다!`);
    };

    return (
        <main className="flex-1 flex flex-col bg-white overflow-hidden">
            {/* 메일 페이지 헤더 */}
            <header className="p-4 border-b flex justify-between items-center flex-shrink-0">
                <h1 className="text-xl font-bold">받은 메일함</h1>
                {/* '메일 보내기' 버튼을 누르면 isComposing 스위치를 true로 바꿔서 작성 창을 띄움 */}
                <button
                    onClick={() => setIsComposing(true)}
                    className="px-4 py-2 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600"
                >
                    메일 보내기
                </button>
            </header>

            {/* 메일 목록 */}
            <div className="overflow-y-auto">
                <ul>
                    {emails.map(email => (
                        <li
                            key={email.id}
                            // 안 읽은 메일(isRead: false)은 배경색을 다르게 표시
                            className={`p-4 border-b flex items-start gap-4 cursor-pointer hover:bg-gray-50 ${!email.isRead ? 'bg-cyan-50' : ''}`}
                        >
                            {/* 안 읽은 메일을 표시하는 작은 점 */}
                            <div className={`mt-1 flex-shrink-0 w-2 h-2 rounded-full ${!email.isRead ? 'bg-cyan-500' : 'bg-transparent'}`}></div>
                            <div className="w-40 flex-shrink-0">
                                <p className={`font-semibold truncate ${!email.isRead ? 'text-gray-800' : 'text-gray-500'}`}>{email.sender}</p>
                            </div>
                            <div className="flex-1">
                                <p className={`font-semibold truncate ${!email.isRead ? 'text-gray-800' : 'text-gray-500'}`}>{email.subject}</p>
                                <p className="text-sm text-gray-500 truncate">{email.snippet}</p>
                            </div>
                            <div className="w-24 text-right flex-shrink-0">
                                <p className="text-sm text-gray-500">{email.timestamp}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {isComposing && (
                <ComposeMail
                    onClose={() => setIsComposing(false)} // 닫기 버튼을 누르면 스위치를 false로 바꿔서 창을 닫음
                    onSend={handleSendMail}               // 보내기 버튼을 누르면 handleSendMail 함수를 실행
                />
            )}
        </main>
    );
};

export default MailPage;

