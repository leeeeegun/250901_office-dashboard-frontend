import React, { useState, useMemo } from 'react';
import { contacts as initialContacts } from '../data/mockData.js';
import ContactSidebar from '../components/contacts/ContactSidebar.jsx';
import ContactDetail from '../components/contacts/ContactDetail.jsx';
import { StarIcon } from '../components/common/Icons.jsx';

const ContactsPage = () => {
    // 전체 연락처 목록을 저장하고 관리하는 공간
    const [contacts, setContacts] = useState(initialContacts);
    // 왼쪽 사이드바에서 어떤 그룹이 선택됐는지 기억하는 공간 (기본값: '전체')
    const [selectedGroup, setSelectedGroup] = useState({ type: 'all' });
    // 검색창에 입력된 텍스트를 저장하는 공간
    const [searchTerm, setSearchTerm] = useState('');
    // 목록에서 클릭된 사람의 정보를 저장하는 공간 (null이면 아무도 선택 안 된 상태)
    const [selectedContact, setSelectedContact] = useState(null);

    // 즐겨찾기 별표를 눌렀을 때, 해당 연락처의 isFavorite 상태를 반대로 바꿔주는 함수
    const toggleFavorite = (contactId) => {
        setContacts(contacts.map(c =>
            c.id === contactId ? { ...c, isFavorite: !c.isFavorite } : c
        ));
    };

    // 검색어와 선택된 그룹에 따라 보여줄 목록을 실시간으로 필터링하는 로직
    const filteredContacts = useMemo(() => {
        return contacts
            .filter(contact => {
                if (selectedGroup.type === 'favorites' && !contact.isFavorite) return false;
                if (selectedGroup.type === 'department' && contact.department !== selectedGroup.value) return false;
                return true; // 'all' 이거나 위 조건에 걸리지 않으면 통과
            })
            .filter(contact => {
                // 검색어 필터링 (이름, 부서, 이메일을 소문자로 바꿔서 검색)
                const term = searchTerm.toLowerCase();
                if (!term) return true; // 검색어가 없으면 모두 통과
                return contact.name.toLowerCase().includes(term) ||
                    contact.department.toLowerCase().includes(term) ||
                    contact.email.toLowerCase().includes(term);
            });
    }, [contacts, selectedGroup, searchTerm]);

    return (
        <main className="flex-1 flex bg-white overflow-hidden">
            {/* 왼쪽 그룹 메뉴 사이드바 */}
            <ContactSidebar contacts={contacts} selectedGroup={selectedGroup} onSelectGroup={setSelectedGroup} />

            {/* 중앙 연락처 목록 */}
            <div className="flex-1 flex flex-col">
                <header className="p-4 border-b flex-shrink-0">
                    <input
                        type="text"
                        placeholder="이름, 부서, 이메일로 검색..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                </header>
                <div className="overflow-y-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="p-3 w-12"></th>
                            <th className="p-3">이름</th>
                            <th className="p-3">부서</th>
                            <th className="p-3">직급</th>
                            <th className="p-3">이메일</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredContacts.map(contact => (
                            <tr key={contact.id} onClick={() => setSelectedContact(contact)} className="border-b hover:bg-gray-50 cursor-pointer">
                                <td className="p-3">
                                    {/* 즐겨찾기 버튼 */}
                                    <button onClick={(e) => { e.stopPropagation(); toggleFavorite(contact.id); }} className={contact.isFavorite ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'}>
                                        <StarIcon isFavorite={contact.isFavorite} />
                                    </button>
                                </td>
                                <td className="p-3 font-semibold">{contact.name}</td>
                                <td className="p-3">{contact.department}</td>
                                <td className="p-3">{contact.position}</td>
                                <td className="p-3">{contact.email}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <ContactDetail contact={selectedContact} onClose={() => setSelectedContact(null)} />
        </main>
    );
};

export default ContactsPage;

