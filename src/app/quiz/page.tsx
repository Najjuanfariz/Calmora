import React from 'react';
import Quiz from "@/components/quiz";

export default function QuizPage() {
    const quizData = [
        { title: "Are You Ready For A Relationship?", 
        imageUrl: "/", 
        link: "" 
        },
        { title: "What's My Love Language?", 
        imageUrl: "/", 
        link: "" 
        },
        { title: "Am I Lonely?", 
        imageUrl: "/", 
        link: "" 
        },
        { title: "Empath Or Narcissist", 
        imageUrl: "/", 
        link: "" 
        },
        { title: "The Art Of Attachment", 
        imageUrl: "/", 
        link: "" 
        },
        { title: "What is my mental age?", 
        imageUrl: "/", 
        link: "" 
        },
        { title: "Do I Have Anxiety?", 
        imageUrl: "/", 
        link: "" 
        },
        { title: "Did You Experience Childhood Trauma?", 
        imageUrl: "/", 
        link: "" 
        },
        { title: "How Well Do You Sleep?", 
        imageUrl: "/", 
        link: "" 
        },
        { title: "What Is Your Emotional Type?", 
        imageUrl: "/", 
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
                        <div className="flex flex-wrap justify-center gap-6">
                            {quizData.map((quiz, index) => (
                                <Quiz
                                    key={index}
                                    title={quiz.title}
                                    imageUrl={quiz.imageUrl}
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
