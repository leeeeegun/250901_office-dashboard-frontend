import React, { useState, useEffect } from 'react';
import { surveys as initialSurveys } from '../data/mockData.js';
import SurveyList from '../components/survey/SurveyList.jsx';
import SurveyDetail from '../components/survey/SurveyDetail.jsx';
import CreateSurveyModal from '../components/survey/CreateSurveyModal.jsx';

const SurveyPage = () => {
    const [surveys, setSurveys] = useState([]);
    const [selectedSurveyId, setSelectedSurveyId] = useState(null);
    const [isCreating, setIsCreating] = useState(false);

    useEffect(() => {
        const savedSurveys = JSON.parse(localStorage.getItem('surveys'));
        setSurveys(savedSurveys || initialSurveys);
    }, []);

    useEffect(() => {
        localStorage.setItem('surveys', JSON.stringify(surveys));
    }, [surveys]);

    const handleVote = (surveyId, optionId) => {
        setSurveys(surveys.map(survey => {
            if (survey.id === surveyId) {
                return {
                    ...survey,
                    myVote: optionId,
                    options: survey.options.map(option =>
                        option.id === optionId ? { ...option, votes: option.votes + 1 } : option
                    )
                };
            }
            return survey;
        }));
    };

    const handleSaveSurvey = ({ title, options }) => {
        const newSurvey = {
            id: `survey-${Date.now()}`,
            title,
            author: '나',
            status: 'ongoing',
            myVote: null,
            options: options.map((text, index) => ({
                id: `opt-new-${index}-${Date.now()}`,
                text,
                votes: 0
            }))
        };
        setSurveys([newSurvey, ...surveys]);
    };

    const selectedSurvey = surveys.find(s => s.id === selectedSurveyId);

    return (
        <main className="flex-1 bg-gray-100 overflow-y-auto">
            {selectedSurvey ? (
                <SurveyDetail
                    survey={selectedSurvey}
                    onVote={handleVote}
                    onBack={() => setSelectedSurveyId(null)}
                />
            ) : (
                <SurveyList
                    surveys={surveys}
                    onSelectSurvey={setSelectedSurveyId}
                    onShowCreateModal={() => setIsCreating(true)}
                />
            )}

            {isCreating && (
                <CreateSurveyModal
                    onClose={() => setIsCreating(false)}
                    onSave={handleSaveSurvey}
                />
            )}
        </main>
    );
};

export default SurveyPage;