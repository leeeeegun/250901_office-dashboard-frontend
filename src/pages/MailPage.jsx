import React, { useState } from 'react';
import { emails as initialEmails } from '../data/mockData.js';
import ComposeMail from '../components/mail/ComposeMail.jsx';
import MailView from '../components/mail/MailView.jsx';

const MailPage = () => {
    // 메일 목록 데이터를 저장하고 관리
    const [emails, setEmails] = useState(initialEmails);
    // 작성 창을 보여줄지 말지 결정하는 스위치
    const [isComposing, setIsComposing] = useState(false);
    // 어떤 이메일이 선택되었는지 기억하는 저장 공간
    const [selectedEmail, setSelectedEmail] = useState(null);

    // 메일 보내기 버튼을 눌렀을 때 실행될 함수
    const handleSendMail = (mailData) => {
        console.log('보낸 메일:', mailData);
        alert(`'${mailData.recipient}'님에게 메일이 성공적으로 발송되었습니다!`);
    };

    // 메일 목록에서 특정 메일을 클릭했을 때 실행되는 함수
    const handleSelectEmail = (emailId) => {
        const emailToView = emails.find(e => e.id === emailId);
        setSelectedEmail(emailToView); // 선택된 이메일을 저장 공간에 기억시켜서 상세 보기로 전환!

        // 릭한 메일을 읽음 상태로 바꿔주는 로직
        setEmails(emails.map(e => e.id === emailId ? { ...e, isRead: true } : e));
    };

    // [핵상세 보기 화면에서 '뒤로가기' 버튼을 눌렀을 때 실행되는 함수
    const handleBackToList = () => {
        setSelectedEmail(null); // 저장 공간을 비워서 다시 목록 보기로 전환!
    };

    if (selectedEmail) {
        // 선택된 이메일이 있으면, 상세 보기 화면(MailView)을 보여줌
        return <MailView email={selectedEmail} onBack={handleBackToList} />;
    }

    // 선택된 이메일이 없으면(null), 기존의 메일 목록을 보여줌
    return (
        <main className="flex-1 flex flex-col bg-white overflow-hidden">
            <header className="p-4 border-b flex justify-between items-center flex-shrink-0">
                <h1 className="text-xl font-bold">받은 메일함</h1>
                <button onClick={() => setIsComposing(true)} className="px-4 py-2 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600">
                    메일 보내기
                </button>
            </header>
            <div className="overflow-y-auto">
                <ul>
                    {emails.map(email => (
                        <li
                            key={email.id}
                            onClick={() => handleSelectEmail(email.id)}
                            className={`p-4 border-b flex items-start gap-4 cursor-pointer hover:bg-gray-50 ${!email.isRead ? 'bg-cyan-50' : ''}`}
                        >
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
                    onClose={() => setIsComposing(false)}
                    onSend={handleSendMail}
                />
            )}
        </main>
    );
};

export default MailPage;

