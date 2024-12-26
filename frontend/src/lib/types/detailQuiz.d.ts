export type options = {
    optionText: string[];
    score: number;
};

export type Question = {
    _id: string;
    quizId: string;
    content: string;
    options: options[];
}

export type Score = {
    rangeMin: number;
    rangeMax: number;
    description: string;
};

export type DetailQuiz = {
    _id: string;
    title: string;
    description: string;
    question: Question[];
    category: string;
    scoreDescription: Score[];
    totalQuestion: number
};