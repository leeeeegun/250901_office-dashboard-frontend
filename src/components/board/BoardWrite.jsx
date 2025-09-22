import React, { useState } from 'react';

const BoardWrite = ({ onSave, onCancel }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSave = () => {
        if (!title.trim() || !content.trim()) {
            alert('제목과 내용을 모두 입력해주세요.');
            return;
        }
        onSave({ title, content });
    };

    return (
        <div className="p-6">
            <header className="mb-6">
                <h1 className="text-2xl font-bold">새 글 작성하기</h1>
            </header>
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="제목을 입력하세요"
                    className="w-full text-lg font-semibold p-2 border-b focus:outline-none focus:border-cyan-500"
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="내용을 입력하세요..."
                    className="w-full h-96 p-2 resize-none border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
            </div>
            <footer className="mt-6 flex justify-end gap-2">
                <button onClick={onCancel} className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">취소</button>
                <button onClick={handleSave} className="px-4 py-2 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600">저장</button>
            </footer>
        </div>
    );
};

export default BoardWrite;
