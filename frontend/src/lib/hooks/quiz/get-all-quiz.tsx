"use server"

import { DetailQuiz } from "@/lib/types/detailQuiz"

const getAllQuiz = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/v1/quizzes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        return data as DetailQuiz[];
    } catch (error) {
        console.log(error);
    }
}

export default getAllQuiz