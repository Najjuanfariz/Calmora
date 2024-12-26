"use client";
import React from "react";
import Link from "next/link";


interface QuizProps {
    _id: string;
    title : string;
}

const Quiz: React.FC<QuizProps> = ({ _id, title }) => {
    return (
        <Link key={_id} href={`/quiz/${_id}`} passHref>
        <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex flex-col items-center w-[190px] h-[270px]">
      <div className="bg-lightPink rounded-full w-28 h-28 mb-6 flex items-center justify-center">
        <div className= "rounded-full w-24 h-24 flex items-center justify-center">
        </div>
      </div>
      <p className="text-center font-semibold">{title}</p>
    </div>
        </Link>
    );
}

export default Quiz;