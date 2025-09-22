import React from 'react';

const BoardView = ({ post, onBack }) => {
    if (!post) return null;

    return (
        <div className="p-6">
            <header className="mb-6">
                <button onClick={onBack} className="text-cyan-600 hover:underline mb-4">← 목록으로 돌아가기</button>
                <h1 className="text-3xl font-bold">{post.title}</h1>
                <div className="text-sm text-gray-500 mt-2">
                    <span>작성자: {post.author}</span>
                    <span className="mx-2">|</span>
                    <span>작성일: {post.date}</span>
                    <span className="mx-2">|</span>
                    <span>조회수: {post.views}</span>
                </div>
            </header>
            <div className="bg-white p-8 rounded-lg shadow-sm min-h-[400px]">
                {/* pre-wrap 스타일은 \n 같은 줄바꿈 */}
                <p className="text-gray-800 leading-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                    {post.content}
                </p>
            </div>
        </div>
    );
};

export default BoardView;
