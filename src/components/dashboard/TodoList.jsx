import React, { useState } from 'react';
import { CheckIcon, PencilIcon, TrashIcon } from '../common/Icons.jsx';

const getTodayDateString = () => {
    return new Date().toISOString().split('T')[0];
};

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: "주간 업무 보고서 작성", completed: true, createdAt: "2025-09-03" },
        { id: 2, text: "디자인 팀과 미팅", completed: false, createdAt: "2025-09-03" },
        { id: 3, text: "HUB 오피스 버그 수정", completed: false, createdAt: "2025-09-02" },
    ]);
    const [newTodo, setNewTodo] = useState("");
    const [editingTodo, setEditingTodo] = useState(null);
    const [editingText, setEditingText] = useState("");

    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            const newTodoItem = {
                id: Date.now(),
                text: newTodo,
                completed: false,
                createdAt: getTodayDateString() // 오늘 날짜 추가
            };
            setTodos([newTodoItem, ...todos]); // 새 항목을 맨 위에 추가
            setNewTodo("");
        }
    };

    const handleToggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };
    const handleDeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    const handleStartEdit = (todo) => {
        setEditingTodo(todo.id);
        setEditingText(todo.text);
    };
    const handleSaveEdit = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, text: editingText } : todo));
        setEditingTodo(null);
        setEditingText("");
    };

    // 날짜별로 할 일을 그룹핑하는 로직
    const groupedTodos = todos.reduce((acc, todo) => {
        const date = todo.createdAt;
        if (!acc[date]) acc[date] = [];
        acc[date].push(todo);
        return acc;
    }, {});

    const sortedDates = Object.keys(groupedTodos).sort((a, b) => new Date(b) - new Date(a));

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-bold mb-4">내 할 일 목록 (To-do List)</h2>
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
                    placeholder="새로운 할 일을 입력하고 Enter!"
                    className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <button
                    onClick={handleAddTodo}
                    className="px-4 py-2 bg-cyan-500 text-white font-semibold rounded-md hover:bg-cyan-600"
                >
                    추가
                </button>
            </div>
            <div className="mt-6">
                {sortedDates.map(date => (
                    <div key={date} className="mb-6">
                        <h3 className="font-bold border-b pb-2 mb-3">
                            {new Date(date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}
                        </h3>
                        <ul className="space-y-3">
                            {groupedTodos[date].map(todo => (
                                <li key={todo.id} className="flex items-center p-3 bg-gray-50 rounded-md transition-all hover:bg-gray-100">
                                    <button onClick={() => handleToggleComplete(todo.id)} className={`mr-3 ${todo.completed ? 'text-cyan-500' : 'text-gray-300'}`}>
                                        <CheckIcon />
                                    </button>
                                    <div className="flex-1">
                                        {editingTodo === todo.id ? (
                                            <input
                                                type="text"
                                                value={editingText}
                                                onChange={(e) => setEditingText(e.target.value)}
                                                onKeyPress={(e) => e.key === 'Enter' && handleSaveEdit(todo.id)}
                                                onBlur={() => handleSaveEdit(todo.id)}
                                                autoFocus
                                                className="w-full p-1 border-b-2 border-cyan-500 focus:outline-none bg-transparent"
                                            />
                                        ) : (
                                            <span className={todo.completed ? "line-through text-gray-400" : ""}>{todo.text}</span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2 ml-4">
                                        {editingTodo === todo.id ? (
                                            <button onClick={() => handleSaveEdit(todo.id)} className="text-green-500 hover:text-green-700 font-semibold text-sm">저장</button>
                                        ) : (
                                            <>
                                                <button onClick={() => handleStartEdit(todo)} className="text-gray-400 hover:text-blue-500"><PencilIcon /></button>
                                                <button onClick={() => handleDeleteTodo(todo.id)} className="text-gray-400 hover:text-red-500"><TrashIcon /></button>
                                            </>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;

