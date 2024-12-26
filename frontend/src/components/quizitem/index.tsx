import React from 'react';

interface Option {
label: string;
points: number;
}

interface QuizItemProps {
question: string;
options: Option[];
onAnswer: (points: number) => void;
}

const QuizItem: React.FC<QuizItemProps> = ({ question, options, onAnswer }) => {
return (
    <div className="mb-6">
    <h2 className="text-lg font-semibold mb-3">{question}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option, index) => (
        <label
            key={index}
            className="border-2 border-black rounded-lg px-5 py-2 flex items-center gap-2 cursor-pointer"
        >
            <input
            type="radio"
            name={question}
            className="form-radio"
            onClick={() => onAnswer(option.points)}
            />
            {option.label}
            </label>
        ))}
        </div>
    </div>
    );
};

export default QuizItem;
