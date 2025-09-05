import React from "react";
import { userInfo } from "../../data/mockData.js";

const ProfileCard = ({ workStatus }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
        <img src={userInfo.avatarUrl} className="w-20 h-20 rounded-full mx-auto mb-4" alt="User Avatar" />
        <h3 className="font-bold text-lg">{userInfo.name}</h3>

        <p className="text-sm text-gray-500">{userInfo.team} / <span className="font-semibold text-cyan-600">{workStatus}</span></p>

        <div className="flex justify-around my-6">
            <div>
                <p className="font-bold text-2xl">{userInfo.todayMailCount}</p>
                <p className="text-sm text-gray-500">오늘 온 메일</p>
            </div>
            <div>
                <p className="font-bold text-2xl">{userInfo.todayScheduleCount}</p>
                <p className="text-sm text-gray-500">오늘의 일정</p>
            </div>
        </div>

        <ul className="mt-6 space-y-3 text-sm">
            <li className="flex justify-between"><span>내 커뮤니티 새 글</span> <span className="font-semibold">{userInfo.communityNewPostCount}</span></li>
            <li className="flex justify-between"><span>내역서 / TO-DO</span> <span className="font-semibold">{userInfo.todoCount}</span></li>
            <li className="flex justify-between"><span>결재할 문서</span> <span className="font-semibold text-red-500">{userInfo.approvalPendingCount}</span></li>
        </ul>
    </div>
);

export default ProfileCard;
