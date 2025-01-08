"use client";

import React, { useState, useEffect } from "react";
import Specialist from "@/components/specialist";
import Quiz from "@/components/quiz";
import getAllQuiz from "@/lib/hooks/quiz/get-all-quiz";
import Article from "@/components/article";
import Image from "next/image";
import LogoMental from "@/assets/icons/LogoMental.jpg";

interface DetailQuiz {
  _id: string;
  title: string;
}

interface ArticleData {
  title: string;
  writer: string;
  date: string;
  link: string;
}

export default function Home() {
  const [quizData, setQuizData] = useState<DetailQuiz[]>([]);
  const [loadingQuizzes, setLoadingQuizzes] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllQuiz();
        if (data) {
          setQuizData(data);
        }
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      } finally {
        setLoadingQuizzes(false);
      }
    };
    fetchData();
  }, []);

  const initialArticle: ArticleData[] = [
    {
      title: "9 Cara Mengatasi Stres di Kantor",
      writer: "Krisna Octavianus",
      date: "04 Nov, 2019",
      link: "https://www.klikdokter.com/psikologi/kesehatan-mental/9-cara-mengatasi-stres-di-kantor",
    },
    {
      title: "Gangguan Mental - Gejala, Pengobatan",
      writer: "Dr. Pittara",
      date: "20 April, 2022",
      link: "https://www.alodokter.com/kesehatan-mental",
    },
    {
      title: "Mengenali Gejala Depresi pada Remaja",
      writer: "Dr. Pittara",
      date: "2 Februari, 2022",
      link: "https://www.alodokter.com/yuk-kenali-penyebab-dan-gejala-depresi-pada-remaja",
    },
  ];

  const additionalArticle: ArticleData[] = [
    {
      title: "5 Tanda Gangguan Jiwa yang Harus Diwaspadai",
      writer: "Dr. Airindya Bella",
      date: "17 Maret, 2022",
      link: "https://www.alodokter.com/tanda-kamu-mengalami-gangguan-jiwa",
    },
    {
      title: "Mengenali Karakter dan Tipe dari Kepribadian ISFP",
      writer: "Dr. Rizal Fadli",
      date: "30 Oktober, 2024",
      link: "https://www.halodoc.com/artikel/mengenali-karakter-dan-tipe-dari-kepribadian-isfp",
    },
    {
      title: "Catat, Ini Ciri-Ciri Orang Harus ke Psikiater",
      writer: "Dr. Rizal Fadli",
      date: "01 November, 2024",
      link: "https://www.halodoc.com/artikel/catat-ini-ciri-ciri-orang-harus-ke-psikiater",
    },
  ];
  const [showAdditionalArticles, setShowAdditionalArticles] = useState(false);

  return (
    <div>
      <main>
        <div className="bg-gradient-to-r from-white max-w-[1920px] h-screen flex items-center justify-start px-10">
          <Image
            src={LogoMental}
            alt="Logo Mental"
            width={0}
            height={0}
            priority={true}
            quality={100}
            className="absolute w-[500px] h-[380px] translate-x-[750px]"
          />
          <div className="ml-8 max-w-xl">
            <h1 className="text-4xl font-extrabold text-black mb-10">
              Improve your <br /> mental well-being <br /> with Calmora
            </h1>
            <p className="text-lg font-medium text-black mb-6">
              Take a step to feeling better with the help of a licensed mental
              health professional. Benefit from online therapy sessions and
              self-therapy tools.
            </p>
          </div>
        </div>
        <div className="bg-darkPink py-20 max-w-[1920px] w-full">
          <div className="mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-white text-4xl font-bold mb-6 whitespace-nowrap">
                Specialities of Calmora therapists
              </h1>
            </div>
            <div className="text-white text-sm mb-5 text-center">
              <p>
                Calmora platform can help overcome almost all types of mental
                health issues and be useful for anyone looking to make a change.
              </p>
              <p>
                Our network of therapists covers a range of specialities to meet
                your specific needs.
              </p>
            </div>
            <Specialist />
          </div>
        </div>
        <div className="bg-cyan py-20 max-w-[1920px] w-full">
          <div className="text-center py-10">
            <h1 className="text-4xl font-extrabold mb-12">
              Curated & Brewed Over Coffee!
            </h1>
            <p className="text-lg mb-8">
              Immerse yourself in articles and be swept away to a world that is
              separate from yours.
            </p>
            <div className="flex justify-center flex-wrap space-x-12 mb-10">
              {initialArticle.map((article, index) => (
                <Article
                  key={index}
                  title={article.title}
                  writer={article.writer}
                  date={article.date}
                  link={article.link}
                />
              ))}
            </div>
            {showAdditionalArticles && (
              <div className="flex justify-center flex-wrap space-x-12 mb-10">
                {additionalArticle.map((article, index) => (
                  <Article
                    key={index}
                    title={article.title}
                    writer={article.writer}
                    date={article.date}
                    link={article.link}
                  />
                ))}
              </div>
            )}
            <div className="flex justify-center">
              <button
                className="bg-lightPink text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-lightPink/80 transition"
                onClick={() => setShowAdditionalArticles((prev) => !prev)}
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
              Our free quiz can help you take a proactive approach to your
              mental health and wellness!
            </p>
            {loadingQuizzes ? (
              <p className="text-white text-center">Loading quizzes...</p>
            ) : (
              <div className="flex justify-center flex-wrap space-x-12 mb-10">
                {quizData.map((quiz) => (
                  <Quiz
                    key={quiz._id}
                    title={quiz.title}
                    _id={quiz._id}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
