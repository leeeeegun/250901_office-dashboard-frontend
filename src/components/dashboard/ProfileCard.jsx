import React from "react";
import { userInfo } from "../../data/mockData.js";

const ProfileCard = () => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="text-center mb-4">
            <img src={userInfo.avatarUrl} className="w-20 h-20 rounded-full mx-auto mb-2" alt="Profile" />
            <p className="font-bold text-lg">{userInfo.name} 사원</p>
            <p className="text-sm text-gray-500">{userInfo.team}</p>
        </div>
        <div className="flex justify-around text-center">
            <div>
                <p className="text-2xl font-bold">{userInfo.todayMailCount}</p>
                <p className="text-sm text-gray-500">오늘 메일</p>
            </div>
            <div>
                <p className="text-2xl font-bold">{userInfo.todayScheduleCount}</p>
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