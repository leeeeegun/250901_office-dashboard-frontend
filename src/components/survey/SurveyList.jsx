import React from 'react';

const SurveyList = ({ surveys, onSelectSurvey, onShowCreateModal }) => {
    return (
        <div className="p-6">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">설문</h1>
                <button
                    onClick={onShowCreateModal}
                    className="px-4 py-2 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600"
                >
                    새 설문 만들기
                </button>
            </header>
            <div className="space-y-4">
                {surveys.map(survey => (
                    <div
                        key={survey.id}
                        onClick={() => onSelectSurvey(survey.id)}
                        className="bg-white p-4 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="font-bold text-lg">{survey.title}</h2>
                                <p className="text-sm text-gray-500">작성자: {survey.author}</p>
                            </div>
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                survey.status === 'ongoing'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-gray-200 text-gray-700'
                            }`}>
                                {survey.status === 'ongoing' ? '진행중' : '완료'}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SurveyList;
