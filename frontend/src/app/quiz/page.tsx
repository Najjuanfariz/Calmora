'use client';
import React, { useState, useEffect } from 'react';
import Quiz from "@/components/quiz";
import getAllQuiz from "@/lib/hooks/quiz/get-all-quiz";

interface DetailQuiz {
_id: string;
  title: string;
}

export default function QuizPage() {
  const [quizData, setQuizData] = useState<DetailQuiz[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllQuiz();
      if (data) {
        setQuizData(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <main>
        <div className="bg-darkPink min-h-screen w-full py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h1 className="text-white text-4xl font-bold mb-4">
                Quizzes to Discover Your True Self
              </h1>
              <p className="text-white text-sm">
                Our free quiz can help you take a proactive approach to your mental health and wellness!
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 justify-items-center">
              {quizData.map((quiz) => (
                <Quiz key={quiz._id} title={quiz.title} _id={quiz._id} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}