import React, { useState, useEffect } from 'react';
import { boardItems as initialPosts } from '../data/mockData.js';
import BoardList from '../components/board/BoardList.jsx';
import BoardView from '../components/board/BoardView.jsx';
import BoardWrite from '../components/board/BoardWrite.jsx';

const BoardPage = () => {
    const [posts, setPosts] = useState([]);
    const [view, setView] = useState({ mode: 'list', postId: null });

    useEffect(() => {
        const savedPosts = JSON.parse(localStorage.getItem('boardPosts'));
        setPosts(savedPosts || initialPosts);
    }, []);

    useEffect(() => {
        localStorage.setItem('boardPosts', JSON.stringify(posts));
    }, [posts]);

    const handleSelectPost = (postId) => {
        setPosts(posts.map(p => p.id === postId ? { ...p, views: p.views + 1 } : p));
        setView({ mode: 'view', postId });
    };

    const handleSavePost = ({ title, content }) => {
        const newPost = {
            id: `post-${Date.now()}`,
            category: '일반',
            title,
            author: '나',
            date: new Date().toLocaleString('ko-KR'),
            group: '내 부서',
            views: 0,
            content,
        };
        setPosts([newPost, ...posts]);
        setView({ mode: 'list', postId: null }); // 저장 후 목록으로 돌아가기
    };

    const renderContent = () => {
        switch (view.mode) {
            case 'view': // 상세 보기 모드일 때
                const post = posts.find(p => p.id === view.postId);
                return <BoardView post={post} onBack={() => setView({ mode: 'list', postId: null })} />;
            case 'write': // 글쓰기 모드일 때
                return <BoardWrite onSave={handleSavePost} onCancel={() => setView({ mode: 'list', postId: null })} />;
            case 'list': // 목록 보기 모드일 때
            default:
                return <BoardList posts={posts} onSelectPost={handleSelectPost} onShowWrite={() => setView({ mode: 'write' })} />;
        }
    };

    return (
        <main className="flex-1 bg-gray-100 overflow-y-auto">
            {renderContent()}
        </main>
    );
};

export default BoardPage;

