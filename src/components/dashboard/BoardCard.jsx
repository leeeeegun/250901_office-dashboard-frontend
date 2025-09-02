import React from "react";
import { boardItems } from "../../data/mockData.js";

const BoardCard = () => (
    <div className="bg-white p-6 rouinded-lg shadow-sm">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold">게시판</h2>
            <div className="flex items-center gap-4 text-sm">
                <a href="#" className="font-semibold text-cyan-500">전체</a>
                <a href="#" className="text-gray-500 hover:text-gray-800">공지사항</a>
                <a href="#" className="text-gray-500 hover:text-gray-800">설문조사</a>
            </div>
        </div>
        <ul className="space-y-4">
            {boardItems.map(item => (
                <li key={item.id} className="flex items-start gap-4">
                    <img src={item.thumbnailUrl} className="rounded w-[120px] h-[80px] object-cover" alt="thumbnail" />
                    <div>
                        <p className="font-semibold">{`[${item.category}] ${item.title}`}</p>
                        <p className="text-sm text-gray-500">{`${item.author} · ${item.date} · ${item.group}`}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

export default BoardCard;

