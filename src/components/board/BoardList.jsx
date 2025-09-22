import React from 'react';

const BoardList = ({ posts, onSelectPost, onShowWrite }) => {
    return (
        <div className="p-6">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">게시판</h1>
                <hutton
                    onClick={onShowWrite}
                    className="px-4 py-2 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600"
                >
                    글쓰기
                </button>
            </header>
            <div className="bg-white rounded-lg shadow-sm">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600">
                        <tr>
                            <th className="p-3 w-20 text-center">번호</th>
                            <th className="p-3">제목</th>
                            <th className="p-3 w-32">작성자</th>
                            <th className="p-3 w-40">작성일</th>
                            <th className="p-3 w-24 text-center">조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post,index) => (
                            <tr
                                key={post.id}
                                onClick={() => onSelectPost(post.id)}
                                className="border-b hover:bg-gray-50 cursor-pointer"
                            >
                                <td className="p-3 text-center text-gray-500">{posts.length - index}</td>
                                <td className="p-3 font-semibold">{post.title}</td>
                                <td className="p-3">{post.author}</td>
                                <td className="p-3 text-gray-500">{post.date}</td>
                                <td className="p-3 text-center text-gray-500">{post.views}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BoardList;
