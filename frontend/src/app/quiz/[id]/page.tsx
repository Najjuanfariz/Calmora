'use client';
import { useState, useEffect } from 'react';
import getDetailQuiz from "@/lib/hooks/quiz/get-detail-quiz";
import submitQuiz from "@/lib/hooks/quiz/post-submit-quiz";

interface QuizDetailProps {
    params: { id: number };
}

interface Question {
    _id: string;
    content: string;
    options: Option[];
}

interface Option {
    _id: string;
    optionText: string;
}

interface QuizData {
    title: string;
    description: string;
    question: Question[];
}

interface QuizResult {
    message: string;
    quizAttempt: {
        score: number;
        scoreDescription: string;
    };
}

export const QuizDetail = ({ params }: QuizDetailProps) => {
    const [data, setData] = useState<QuizData | null>(null);
    const [answers, setAnswers] = useState<{ [key: string]: string }>({});
    const [result, setResult] = useState<QuizResult | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const quizData: QuizData = await getDetailQuiz(params.id);
                setData(quizData);
            } catch (error) {
                console.error("Failed to fetch quiz data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [params.id]);

    const handleOptionSelect = (questionId: string, optionText: string) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: optionText,
        }));
    };

    const handleSubmit = async () => {
        if (!data || Object.keys(answers).length !== data.question.length) {
            alert("Please answer all questions");
            return;
        }

        try {
            const response: QuizResult = await submitQuiz(
                params.id,
                Object.entries(answers).map(([questionId, selectedOption]) => ({
                    questionId,
                    selectedOption,
                }))
            );
            setResult(response);
        } catch (error) {
            console.error("Failed to submit quiz", error);
        }
    };

    if (loading) return <div>Loading...</div>;

    if (result) {
        return (
            <div className="min-h-screen bg-lightPink flex flex-col items-center py-10 px-4">
                <h1 className="text-2xl md:text-4xl font-bold text-center text-white mt-5 mb-4">
                    Quiz Result
                </h1>
                <p className="text-lg text-center text-white mb-6">{result.message}</p>
                <div className="bg-white rounded-lg p-6 shadow-lg max-w-2xl text-gray-800 text-center">
                    <h2 className="text-2xl font-bold mb-4">
                        Your Score: {result.quizAttempt.score}
                    </h2>
                    <p>{result.quizAttempt.scoreDescription}</p>
                </div>
                <button
                    onClick={() => {
                        setResult(null);
                        setAnswers({});
                    }}
                    className="mt-6 py-3 px-6 text-white font-semibold bg-blue-600 rounded-md hover:bg-blue-700 transition"
                >
                    Retake Quiz
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-lightPink flex flex-col items-center py-10 px-4">
            <h1 className="text-2xl md:text-4xl font-bold text-center text-white mt-5 mb-4">
                {data?.title}
            </h1>
            <p className="text-center text-white mb-6">{data?.description}</p>

            <div className="w-full max-w-2xl space-y-6">
                {data?.question.map((question, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-lg">
                        <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                            {index + 1}. {question.content}
                        </p>

                        <div className="space-y-4">
                            {question.options.map((option) => (
                                <button
                                    key={option._id}
                                    className={`w-full p-3 text-lg rounded-md text-white font-medium
                                        ${
                                            answers[question._id] === option.optionText
                                                ? 'bg-blue-500'
                                                : 'bg-gray-500 hover:bg-gray-600'
                                        }`}
                                    onClick={() =>
                                        handleOptionSelect(question._id, option.optionText)
                                    }
                                >
                                    {option.optionText}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6">
                <button
                    onClick={handleSubmit}
                    className="py-3 px-6 text-white font-semibold bg-blue-600 rounded-md hover:bg-blue-700 transition"
                >
                    Submit Quiz
                </button>
            </div>
        </div>
    );
};

export default QuizDetail;
