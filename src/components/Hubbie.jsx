import React from 'react';

const Hubbie = ({ showCelebration }) => {
    const message = showCelebration ? "하나 완료! 짱인데? 🤩" : "오늘도 화이팅이에요! 💪";

    return (
        <div className="fixed bottom-6 right-6 flex items-end gap-3 z-50">
            {/* 말풍선 */}
            <div className={`bg-white p-3 rounded-lg shadow-lg transition-all duration-300 ${showCelebration ? 'opacity-100 translate-y-0' : 'opacity-100'}`}>
                <p className="text-sm font-semibold">{message}</p>
            </div>
            {/* 하비 캐릭터 */}
            <div className={`w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 ${showCelebration ? 'animate-bounce' : ''}`}>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xl">🤖</span>
                </div>
            </div>
        </div>
    );
};

export default Hubbie;