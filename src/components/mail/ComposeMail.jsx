import React, { useState } from 'react';

const ComposeMail = ({ onClose, onSend }) => {
    const [recipient, setRecipient] = useState ('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const handleSend = () => {
        if (!recipient || !subject) {
            alert('받는 사람과 제목을 입력해 주세요.');
            return;
        }
        // onSend를 호출해서 메일이 발송되었다는 사실을 알려줌
        onSend({ recipient, subject, body });
        onClose(); // 보내고 창 닫기
    };

    return (
            // 화면 전체를 덮는 반투명 배경 (모달)
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                {/* 메일 작성 창 본체 */}
                <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
                    <header className="bg-gray-100 p-4 rounded-t-lg flex justify-between items-center">
                        <h2 className="font-semibold">새 메일 작성</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-800">&times;</button>
                    </header>
                    <div className="p-4 space-y-3">
                        <input
                            type="email"
                            placeholder="받는 사람"
                            value={recipient}
                            onChange={(e) => setRecipient(e.target.value)}
                            className="w-full p-2 border-b focus:outline-none focus:border-cyan-500"
                        />
                        <input
                            type="text"
                            placeholder="제목"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="w-full p-2 border-b focus:outline-none focus:border-cyan-500"
                        />
                        <textarea
                            placeholder="내용을 입력하세요..."
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            className="w-full h-64 p-2 resize-none focus:outline-none"
                        />
                    </div>
                    <footer className="p-4 flex justify-end gap-2">
                        <button onClick={onClose} className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">취소</button>
                        <button onClick={handleSend} className="px-4 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600">보내기</button>
                    </footer>
                </div>
            </div>
        );
    };

    export default ComposeMail;