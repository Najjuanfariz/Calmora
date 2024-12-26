"use client";
import React, { useState } from "react";
import Specialist from "@/components/specialist";
import Quiz from "@/components/quiz";
import Article from "@/components/article";

export default function Home() {
  const initialQuizzes = [
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
      imageUrl: "", 
      link: "" 
    },
    { title: "The Art Of Attachment", 
      imageUrl: "/", 
      link: "" 
    },
  ];

  const additionalQuizzes = [
    { title: "What is my mental age?", 
      imageUrl: "/", 
      link: "" 
    },
    { title: "Do i have anxiety", 
      imageUrl: "/", 
      link: "" 
    },
    { title: "did you experience childhood trauma", 
      imageUrl: "/", 
      link: "" 
    },
    { title: "how well do you sleep", 
      imageUrl: "/", 
      link: "" 
    },
    { title: "what is your emotional type", 
      imageUrl: "/", 
      link: "" 
    },
  ];

  const [quizzes] = useState(initialQuizzes);
  const [showAdditionalQuizzes, setShowAdditionalQuizzes] = useState(false);

  const toggleAdditionalQuizzes = () => {
    setShowAdditionalQuizzes((prev) => !prev);
  };
  
  
  const initialArticle = [
    {
      title:"9 Cara Mengatasi Stres di Kantor",
      date:"12 Oktober, 2024",
      link:"https://www.klikdokter.com/psikologi/kesehatan-mental/9-cara-mengatasi-stres-di-kantor"
    },
    {
      title:"Gangguan Mental - Gejala, Pengobatan", 
      date:"12 Oktober, 2024",
      link:"https://www.alodokter.com/kesehatan-mental"
    },
    {
      title:"Mengenali Gejala Depresi pada Remaja",
      date:"12 Oktober, 2024",
      link:"https://www.alodokter.com/yuk-kenali-penyebab-dan-gejala-depresi-pada-remaja"
    },
  ];
  const additionalArticle  = [
    {
      title:"5 Tanda Gangguan Jiwa yang Harus Diwaspadai",
      date:"12 Oktober, 2024",
      link:"https://www.alodokter.com/tanda-kamu-mengalami-gangguan-jiwa"
    },
    {
      title:"Mengenali Karakter dan Tipe dari Kepribadian ISFP",
      date:"12 Oktober, 2024",
      link:"https://www.halodoc.com/artikel/mengenali-karakter-dan-tipe-dari-kepribadian-isfp"
    },
    {
      title:"Catat, Ini Ciri-Ciri Orang Harus ke Psikiater", 
      date:"12 Oktober, 2024",
      link:"https://www.halodoc.com/artikel/catat-ini-ciri-ciri-orang-harus-ke-psikiater"
    },
  ];

  const [articles] = useState(initialArticle);
  const [showAdditionalArticles, setShowAdditionalArticles] = useState(false);

  const toggleAdditionalArticles = () => {
    setShowAdditionalArticles((prev) => !prev);
  };

  return (
    <div>
      <main>
        <div className="bg-cyan h-screen flex items-center justify-start px-10">
          <div className="ml-8 max-w-xl">
            <h1 className="text-4xl font-extrabold text-black mb-10">
              Improve your <br /> mental well-being <br /> with Calmora
            </h1>
            <p className="text-lg font-medium text-black mb-6">
              Take a step to feeling better with the help of a licensed mental health professional. 
              Benefit from online therapy sessions and self-therapy tools.
            </p>
          </div>
        </div>

        <div className="bg-darkPink py-20">
          <div className="mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-white text-4xl font-bold mb-6 whitespace-nowrap">
                Specialities of Calmora therapists
              </h1>
            </div>
            <p className="text-white text-sm mb-5 text-center">
              Calmora platform can help overcome almost all types of mental health issues 
              and be useful for anyone looking <br /> to make a change. <br />Our network of therapists 
              covers a range of specialities to meet your specific needs. Only evidence-based 
              therapy <br/> and counseling approaches.
            </p>
            <Specialist />
          </div>
        </div>

        <div className="bg-cyan py-20">
          <div className="text-center py-10">
            <h1 className="text-4xl font-extrabold mb-12">
              Curated & Brewed Over Coffee!
            </h1>
            <p className="text-lg mb-8">
              Immerse yourself in articles and be swept away to a world that is separate from yours.<br/>
              Thus, unraveling from all the dilemmas, stress & problems you might have.
            </p>
            <div className="flex justify-center flex-wrap space-x-12 mb-10">
              {articles.map((article, index) => (
                <Article key={index} title={article.title} date={article.date} link={article.link} />
              ))}
            </div>
            {showAdditionalArticles && (
              <div className="flex justify-center flex-wrap space-x-12 mb-10">
                {additionalArticle.map((article, index) => (
                  <Article key={index} title={article.title} date={article.date} link={article.link} />
                ))}
              </div>
            )}

          <div className="flex justify-center">
            <button
              className="bg-lightPink text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-lightPink/80 transition"
              onClick={toggleAdditionalArticles}
              >
              {showAdditionalArticles ? "Hide More" : "View More"}
            </button>
              </div>
            </div>
        </div>

        <div className="bg-darkPink py-20">
          <div className="mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-white text-4xl font-bold mb-10 whitespace-nowrap">
                Quizzes to Discover Your True Self
              </h1>
            </div>
            <p className="text-white text-sm mb-10 text-center">
              Our free quiz can help you take a proactive approach to your mental health and wellness!
            </p>

            <div className="flex justify-center flex-wrap space-x-12 mb-10">
              {quizzes.map((quiz, index) => (
                <Quiz key={index} title={quiz.title} link={quiz.link} />
              ))}
            </div>

            {showAdditionalQuizzes && (
              <div className="flex justify-center flex-wrap space-x-12 mb-10">
                {additionalQuizzes.map((quiz, index) => (
                  <Quiz key={index} title={quiz.title} link={quiz.link} />
                ))}
              </div>
            )}

            <div className="flex justify-center mb-10">
              <button 
                onClick={toggleAdditionalQuizzes} 
                className="border-2 border-white text-white bg-transparent px-6 py-2 rounded-lg font-bold"
              >
                {showAdditionalQuizzes ? "Hide More Quizzes" : "Take More Quizzes"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
