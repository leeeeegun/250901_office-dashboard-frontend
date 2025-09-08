import React from "react";

const ContactSidebar = ({ contacts, selectedGroup, onSelectGroup }) => {
    const departments = [...new Set(contacts.map(c => c.department))];

    return (
        <aside className="w-64 bg-gray-50 border-r flex-shrink-0 p-4">
            <h2 className="font-bold mb-4">주소록 그룹</h2>
            <ul className="space-y-1">

                {/* 전체 주소록 메뉴 */}
                <li>
                    <button
                        onClick={() => onSelectGroup({ type: 'all'})}
                        className={`w-full text-left px-2 rounded-md text-sm transition-colors ${selectedGroup.type === 'all' ? 'bg-cyan-100 text-cyan-700 font-semibold' : 'hover:bg-gray-200'}`}
                    >
                        전체 주소록
                    </button>
                </li>

                {/* 즐겨찾기 메뉴 */}
                <li>
                    <button
                        onClick={() => onSelectGroup({ type: 'favorites' })}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${selectedGroup.type === 'favorites' ? 'bg-cyan-100 text-cyan-700 font-semibold' : 'hover:bg-gray-200'}`}
                    >
                        즐겨찾기
                    </button>
                </li>

                {/* 부서별 메뉴 */}
                <li className="pt-4">
                    <h3 className="text-xs font-semibold text-gray-500 px-3 mb-2">부서별</h3>
                    <ul className="space-y-1">
                        {departments.map(dept => (
                            <li key={dept}>
                                <button
                                    onClick={() => onSelectGroup({ type: 'department', value: dept })}
                                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${selectedGroup.type === 'department' && selectedGroup.value === dept ? 'bg-cyan-100 text-cyan-700 font-semibold' : 'hover:bg-gray-200'}`}
                                >
                                    {dept}
                                </button>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </aside>
    );
};

export default ContactSidebar;