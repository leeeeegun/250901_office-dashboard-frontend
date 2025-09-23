import React, { useState } from 'react';

const ApprovalView = ({ document, onApprove, onReject, onBack }) => {
    const [rejectionReason, setRejectionReason] = useState('');
    const [showRejectModal, setShowRejectModal] = useState(false);

    const handleReject = () => {
        if (!rejectionReason.trim()) {
            alert('반려 사유를 입력해주세요.');
            return;
        }
        onReject(document.id, rejectionReason);
        setShowRejectModal(false);
    };

    const isMyTurn = document.approvalLine.find(a => a.status === 'current' && a.approverId === 'me');

    return (
        <div className="p-6">
            {/* 반려 사유 입력 모달 */}
            {showRejectModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
                        <h3 className="font-bold text-lg mb-4">반려 사유 입력</h3>
                        <textarea
                            value={rejectionReason}
                            onChange={(e) => setRejectionReason(e.target.value)}
                            className="w-full h-32 p-2 border rounded-md"
                            placeholder="반려 사유를 명확하게 기재해주세요."
                        />
                        <div className="flex justify-end gap-2 mt-4">
                            <button onClick={() => setShowRejectModal(false)} className="px-4 py-2 bg-gray-200 rounded-lg">취소</button>
                            <button onClick={handleReject} className="px-4 py-2 bg-red-500 text-white rounded-lg">반려</button>
                        </div>
                    </div>
                </div>
            )}

            <header className="mb-6">
                <button onClick={onBack} className="text-cyan-600 hover:underline mb-4">← 목록으로 돌아가기</button>
                <h1 className="text-3xl font-bold">{document.title}</h1>
                <p className="text-sm text-gray-500 mt-2">기안자: {document.author} | 기안일: {document.date}</p>
            </header>
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 bg-white p-8 rounded-lg shadow-sm min-h-[400px]">
                    <p style={{ whiteSpace: 'pre-wrap' }}>{document.content}</p>
                </div>
                <div className="col-span-1">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-bold border-b pb-2 mb-3">결재 라인</h3>
                        <ul className="space-y-4">
                            {document.approvalLine.map((approver, index) => (
                                <li key={index} className="flex items-center">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white mr-3 ${
                                        approver.status === 'approved' ? 'bg-green-500' :
                                        approver.status === 'rejected' ? 'bg-red-500' :
                                        approver.status === 'current' ? 'bg-blue-500 animate-pulse' : 'bg-gray-400'
                                    }`}>
                                        {index + 1}
                                    </div>
                                    <div>
                                        <p className="font-semibold">{approver.approverName}</p>
                                        <p className="text-sm text-gray-500">{approver.status}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* 내 결재 차례일 때만 승인/반려 버튼 보임 */}
                    {isMyTurn && (
                        <div className="mt-4 flex gap-2">
                            <button onClick={() => setShowRejectModal(true)} className="flex-1 py-2 bg-red-500 text-white font-semibold rounded-lg">반려</button>
                            <button onClick={() => onApprove(document.id)} className="flex-1 py-2 bg-green-500 text-white font-semibold rounded-lg">승인</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ApprovalView;
