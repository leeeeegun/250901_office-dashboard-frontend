import React, { useState, useEffect, useMemo } from 'react';
import { approvals as initialApprovals } from '../data/mockData.js';
import ApprovalDashboard from '../components/approval/ApprovalDashboard.jsx';
import ApprovalView from '../components/approval/ApprovalView.jsx';
import ApprovalWrite from '../components/approval/ApprovalWrite.jsx';

const ApprovalList = ({ title, documents, onSelect, onBack }) => (
    <div className="p-6">
        <button onClick={onBack} className="text-cyan-600 hover:underline mb-4">← 홈으로 돌아가기</button>
        <h1 className="text-2xl font-bold mb-6">{title}</h1>
        <div className="bg-white rounded-lg shadow-sm">
            {documents.length > 0 ? (
                documents.map(doc => (
                    <div key={doc.id} onClick={() => onSelect(doc.id)} className="p-4 border-b hover:bg-gray-50 cursor-pointer">
                        <p className="font-semibold">{doc.title}</p>
                        <p className="text-sm text-gray-500">기안자: {doc.author} | 상태: {doc.status}</p>
                    </div>
                ))
            ) : (
                <p className="p-4 text-gray-500">해당 문서가 없습니다.</p>
            )}
        </div>
    </div>
);


const ApprovalPage = () => {
    // 모든 결재 문서 저장 및 관리
    const [approvals, setApprovals] = useState([]);
    const [view, setView] = useState({ mode: 'dashboard' });

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('approvals'));
        setApprovals(saved || initialApprovals);
    }, []);

    // 결재 목록이 바뀔 때마다, 브라우저 저장소에 자동으로 덮어쓰기
    useEffect(() => {
        localStorage.setItem('approvals', JSON.stringify(approvals));
    }, [approvals]);

    // 결재 승인 로직
    const handleApprove = (docId) => {
        setApprovals(approvals.map(doc => {
            if (doc.id !== docId) return doc;

            let isCompleted = true;
            let nextApproverFound = false;
            const newApprovalLine = doc.approvalLine.map(approver => {
                if (approver.status === 'current' && approver.approverId === 'me') {
                    nextApproverFound = true;
                    return { ...approver, status: 'approved', comment: '승인' };
                }
                if (nextApproverFound && approver.status === 'pending') {
                    isCompleted = false;
                    nextApproverFound = false;
                    return { ...approver, status: 'current' };
                }
                return approver;
            });

            return { ...doc, approvalLine: newApprovalLine, status: isCompleted ? 'completed' : 'in-progress' };
        }));
        setView({ mode: 'dashboard' }); // 처리 후 홈으로
    };

    // 결재 반려 로직
    const handleReject = (docId, reason) => {
        setApprovals(approvals.map(doc => {
            if (doc.id !== docId) return doc;
            const newApprovalLine = doc.approvalLine.map(approver =>
                (approver.status === 'current' && approver.approverId === 'me')
                    ? { ...approver, status: 'rejected', comment: reason }
                    : approver
            );
            return { ...doc, approvalLine: newApprovalLine, status: 'rejected' };
        }));
        setView({ mode: 'dashboard' }); // 처리 후 홈으로
    };

    // 새 기안 저장 로직
    const handleSave = ({ title, content, approvalLine }) => {
        const newApproval = {
            id: `approval-${Date.now()}`,
            title,
            content,
            author: '나',
            date: new Date().toISOString().split('T')[0],
            status: 'in-progress',
            approvalLine: [
                { approverId: 'me', approverName: '나', status: 'approved', comment: '기안' },
                ...approvalLine.map((approver, index) => ({
                    ...approver,
                    status: index === 0 ? 'current' : 'pending',
                    comment: ''
                }))
            ]
        };
        setApprovals([newApproval, ...approvals]);
        setView({ mode: 'dashboard' }); // 저장 후 홈으로
    };

    const counts = useMemo(() => ({
        pending: approvals.filter(a => a.approvalLine.some(l => l.status === 'current' && l.approverId === 'me')).length,
        inProgress: approvals.filter(a => a.author === '나' && a.status === 'in-progress').length,
        completed: approvals.filter(a => a.status === 'completed' || a.status === 'rejected').length,
    }), [approvals]);

    const renderContent = () => {
        switch (view.mode) {
            case 'view': // 상세 보기 모드
                const docToView = approvals.find(a => a.id === view.docId);
                return <ApprovalView document={docToView} onApprove={handleApprove} onReject={handleReject} onBack={() => setView({ mode: 'list', category: view.prevCategory })} />;
            case 'write': // 글쓰기 모드
                 return <ApprovalWrite onSave={handleSave} onCancel={() => setView({ mode: 'dashboard' })} />;
            case 'list': // 목록 보기 모드
                 let documents = [];
                 let listTitle = "";
                 if(view.category === 'pending') {
                    documents = approvals.filter(a => a.approvalLine.some(l => l.status === 'current' && l.approverId === 'me'));
                    listTitle = "결재 대기 문서";
                 } else if (view.category === 'in-progress') {
                    documents = approvals.filter(a => a.author === '나' && a.status === 'in-progress');
                    listTitle = "결재 진행 문서";
                 } else if (view.category === 'completed') {
                    documents = approvals.filter(a => a.status === 'completed' || a.status === 'rejected');
                    listTitle = "완료 문서";
                 }
                 return <ApprovalList title={listTitle} documents={documents} onSelect={(docId) => setView({ mode: 'view', docId, prevCategory: view.category })} onBack={() => setView({ mode: 'dashboard' })}/>
            default: // 기본값은 결재 홈
                return <ApprovalDashboard counts={counts} onSelectCategory={(category) => setView({ mode: 'list', category })} />;
        }
    };

    return (
        <main className="flex-1 bg-gray-100 overflow-y-auto">
            {renderContent()}
        </main>
    );
};

export default ApprovalPage;

