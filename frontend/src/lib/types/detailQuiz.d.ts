export type Options = {
    text: string[];
};

export type Question = {
    _id: string;
    text: string;
    Options: Options[];
}

export type Score = {
    _id: string;
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