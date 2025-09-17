import React from 'react';

const ResourceList = ({ resources, selectedResourceId, onSelect }) => {
    return (
        <aside className="w-56 bg-gray-50 border-r flex-shrink-0 p-4">
            <h2 className="font-bold mb-4">예약완료</h2>
            <ul className="space-y-2">
                {resources.map(resource => (
                    <li key={resource.id}>
                        <button
                            onClick={() => onSelect(resource.id)}
                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                                 selectedResourceId === resource.id
                                       ? 'bg-cyan-100 text-cyan-700 font-semibold'
                                       : 'hover:bg-gray-200'
                            }`}
                        >
                            {resource.name}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default ResourceList;
