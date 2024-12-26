"use server";

import { DetailQuiz } from "@/lib/types/detailQuiz";

const submitQuiz = async (quizId: number, userId: number, answers: { questionId: number; selectedOption: string }[]) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/v1/submit-quiz`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId,
                quizId,
                answers,
            }),
        });

        const data = await res.json();
        
        return data as DetailQuiz;
    } catch (error) {
        console.log("Error submitting quiz:", error);
        throw new Error("Failed to submit quiz");
    }
};

export default submitQuiz;