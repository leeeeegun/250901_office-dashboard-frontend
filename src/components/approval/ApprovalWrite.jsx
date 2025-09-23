import React, { useState } from 'react';
import { contacts } from '../../data/mockData';

const ApprovalWrite = ({ onSave, onCancel }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [approvalLine, setApprovalLine] = useState([]);

    const handleAddApprover = (contact) => {
        if (!approvalLine.find(a => a.approverId === contact.id)) {
            setApprovalLine([...approvalLine, { approverId: contact.id, approverName: contact.name }]);
        }
    };

    const handleSave = () => {
        if (!title.trim() || !content.trim() || approvalLine.length === 0) {
            alert('제목, 내용, 결재자를 모두 지정해주세요.');
            return;
        }
        onSave({ title, content, approvalLine });
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">새 기안 작성</h1>
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm space-y-4">
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목" className="w-full text-lg p-2 border-b" />
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="내용" className="w-full h-96 p-2 border rounded-md" />
                </div>
                <div className="col-span-1">
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                        <h3 className="font-bold border-b pb-2 mb-3">결재 라인 지정</h3>
                        <ul className="h-40 border rounded-md p-2 space-y-2">
                            {approvalLine.map((approver, index) => (
                                <li key={approver.approverId} className="flex items-center bg-gray-100 p-1 rounded">
                                    <span className="font-bold mr-2">{index + 1}.</span>
                                    <span>{approver.approverName}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                         <h3 className="font-bold border-b pb-2 mb-3">주소록에서 추가</h3>
                         <ul className="h-64 overflow-y-auto">
                            {contacts.map(contact => (
                                <li key={contact.id} onClick={() => handleAddApprover(contact)} className="p-2 hover:bg-gray-100 cursor-pointer rounded">
                                    {contact.name} ({contact.department})
                                </li>
                            ))}
                         </ul>
                    </div>
                </div>
            </div>
            <footer className="mt-6 flex justify-end gap-2">
                <button onClick={onCancel} className="px-4 py-2 rounded-lg bg-gray-200">취소</button>
                <button onClick={handleSave} className="px-4 py-2 rounded-lg bg-cyan-500 text-white">상신</button>
            </footer>
        </div>
    );
};

export default ApprovalWrite;
