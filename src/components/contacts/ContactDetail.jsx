import React from "react";
import { EmailIcon, PhoneIcon, MobileIcon } from '../common/Icons.jsx';

const ContactDetail = ({ contact, onClose }) => {
    if (!contact) return null; // 선택된 사람이 없으면 아무것도 보여주지 않음

    return (
        <div className="w-96 bg-white border-l p-6 flex-shrink-0 flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">프로필 정보</h2>
                <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">&times;</button>
            </div>
            <div className="text-center mb-6">
                <img src={contact.avatarUrl} className="w-24 h-24 rounded-full mx-auto mb-4" alt="Profile" />
                <h3 className="text-lg font-bold">{contact.name} {contact.position}</h3>
                <p className="text-sm text-gray-500">{contact.department}</p>
            </div>
            <div className="space-y-4 text-sm">
                <div className="flex items-center">
                    <EmailIcon className="w-5 h-5 text-gray-400 mr-3" />
                    <span>{contact.email}</span>
                </div>
                <div className="flex items-center">
                    <PhoneIcon className="w-5 h-5 text-gray-400 mr-3" />
                    <span>{contact.officePhone}</span>
                </div>
                <div className="flex items-center">
                    <MobileIcon className="w-5 h-5 text-gray-400 mr-3" />
                    <span>{contact.mobilePhone}</span>
                </div>
            </div>
            <div className="mt-auto pt-6 flex gap-2">
                <button className="flex-1 py-2 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600">메일 보내기</button>
                <button className="flex-1 py-2 rounded-lg bg-gray-200 font-semibold hover:bg-gray-300">채팅하기</button>
            </div>
        </div>
    );
};

export default ContactDetail;