import React, {useState} from "react";

const CreateSurveyModal = ({ onClose, onSave }) => {
    const [title, setTitle] = useState("");
    const [options, setOptions] = useState(["", ""]); // 기타 답변 항목 2개

    const handleOptionChange = (indexedDB,  value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const addOption = () => setOptions([...options, '']);
    const removeOption = (index) => setOptions(options.filter((_, i) => i !== index));

    const handleSave = () => {
        if (!title.trim() || options.some(opt => !opt.trim())) {
            alert('설문 제목과 모든 답변 항목을 입력해주세요.');
            return;
        }
        onSave({title, options});
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
                <header className="p-4 border-b">
                    <h2 className="font-semibold text-lg">새 설문 만들기</h2>
                </header>
                <div className="p-6 space-y-4">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="설문 제목"
                        className="w-full p-2 border rounded-md"
                    />
                    <div>
                        <h3 className="text-sm font-semibold mb-2">답변 항목</h3>
                        <div className="space-y-2">
                            {options.map((option, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        value={option}
                                        onChange={(e) => handleOptionChange(index, e.target.value)}
                                        placeholder={`항목 ${index + 1}`}
                                        className="flex-1 p-2 border rounded-md"
                                    />
                                    <button onClick={() => removeOption(index)} disabled={options.length <= 2} className="p-2 text-red-500 disabled:text-gray-300">&times;</button>
                                </div>
                            ))}
                        </div>
                        <button onClick={addOption} className="mt-2 text-sm text-cyan-600 hover:underline">+ 항목 추가</button>
                    </div>
                </div>
                <footer className="p-4 flex justify-end gap-2 bg-gray-50 rounded-b-lg">
                    <button onClick={onClose} className="px-4 py-2 rounded-lg bg-gray-200">취소</button>
                    <button onClick={handleSave} className="px-4 py-2 rounded-lg bg-cyan-500 text-white">저장</button>
                </footer>
            </div>
        </div>
    );
};

export default CreateSurveyModal;
