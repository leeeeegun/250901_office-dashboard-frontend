import React, {useState} from "react";

const SurveyDetail = ({survey, onVote, onBack}) => {
    const [selectedOptionId, setSelectedOptionId] = useState(null);

    const hanldeVote = () => {
        if (selectedOptionId) {
            onVote(survey.id, selectedOptionId);
        }
    };

    const totalVotes = survey.options.reduce((sum, option) => sum + option.votes, 0);

    return (
        <div className="p-6">
            <header className="mb-6">
                <button onClick={onBack} className="text-cyan-600 hover:underline mb-2">← 목록으로 돌아가기</button>
                <h1 className="text-2xl font-bold">{survey.title}</h1>
                <p className="text-sm text-gray-500">작성자: {survey.author}</p>
            </header>

            {/* 이미 투표했으면 다른 화면 보여줌 */}
            {survey.myVote ? (
                // 결과 화면
                <div className="space-y-4">
                    <h2 className="font-semibold">투표 결과 (총 {totalVotes}표)</h2>
                    {survey.options.map(option => {
                        const percentage = totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;
                        const isMyChoice = survey.myVote === option.id;

                        return (
                            <div key={option.id}>
                                <div className="flex justify-between items-center mb-1 text-sm">
                                <span className={`font-semibold ${isMyChoice ? "text-cyan-600" : ''}`}>
                                    {option.text} {isMyChoice && "(내 선택)"}
                                </span>
                                    <span>{option.votes}표 ({percentage.toFixed(1)}%)</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-4">
                                    <div
                                        className={`h-4 rounded-full ${isMyChoice ? 'bg-cyan-500' : 'bg-gray-400'}`}
                                        style={{width: `${percentage}%`}}
                                    ></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                // --- 투표 하기 화면 ---
                <div className="space-y-3">
                    {survey.options.map(option => (
                        <label key={option.id}
                               className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                            <input
                                type="radio"
                                name={`survey-${survey.id}`}
                                value={option.id}
                                checked={selectedOptionId === option.id}
                                onChange={() => setSelectedOptionId(option.id)}
                                className="w-4 h-4"
                            />
                            <span className="ml-3">{option.text}</span>
                        </label>
                    ))}
                    <button
                        onClick={handleVote}
                        disabled={!selectedOptionId}
                        className="mt-4 w-full px-4 py-2 rounded-lg bg-cyan-500 text-white font-semibold transition-colors disabled:bg-gray-300 hover:enabled:bg-cyan-600"
                    >
                        투표하기
                    </button>
                </div>
            )}
        </div>
    );
};

export default SurveyDetail;
