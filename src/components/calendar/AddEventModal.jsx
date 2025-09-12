import React, { useState } from 'react';

const AddEventModal = ({ date, onClose, onSave }) => {
    const [title, setTitle] = useState('');

    const handleSave = () => {
        if (title.trim()) {
            onSave(title);
            onClose();
        }
    };

    const formattedDate = new Date(date).toLocaleDateString('ko-KR', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                <header className="p-4 border-b">
                    <h2 className="font-semibold text-lg">새 일정 추가</h2>
                    <p className="text-sm text-gray-500">{formattedDate}</p>
                </header>
                <div className="p-6">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="일정 내용을 입력하세요"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        autoFocus
                    />
                </div>
                <footer className="p-4 flex justify-end gap-2 bg-gray-50 rounded-b-lg">
                    <button onClick={onClose} className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">취소</button>
                    <button onClick={handleSave} className="px-4 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600">저장</button>
                </footer>
            </div>
        </div>
    );
};

export default AddEventModal;
