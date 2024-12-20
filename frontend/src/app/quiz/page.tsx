import React from 'react';
import Quiz from "@/components/quiz";

export default function QuizPage() {
    const quizData = [
        { title: "Are You Ready For A Relationship?", 
        link: "/quiz" 
        },
        { title: "What's My Love Language?", 
        link: "/quiz" 
        },
        { title: "Am I Lonely?", 
        link: "" 
        },
        { title: "Empath Or Narcissist", 
        link: "" 
        },
        { title: "The Art Of Attachment", 
        link: "" 
        },
        { title: "What is my mental age?", 
        link: "" 
        },
        { title: "Do I Have Anxiety?", 
        link: "" 
        },
        { title: "Did You Experience Childhood Trauma?", 
        link: "" 
        },
        { title: "How Well Do You Sleep?", 
        link: "" 
        },
        { title: "What Is Your Emotional Type?", 
        link: "" 
        },
    ];

    return (
        <div>
            <main>
                <div className="bg-darkPink min-h-screen w-full py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-10">
                            <h1 className="text-white text-4xl font-bold mb-4">Quizzes to Discover Your True Self</h1>
                            <p className="text-white text-sm">
                                Our free quiz can help you take a proactive approach to your mental health and wellness!
                            </p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 justify-items-center">
                            {quizData.map((quiz, index) => (
                                <Quiz
                                    key={index}
                                    title={quiz.title}
                                    link={quiz.link}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
