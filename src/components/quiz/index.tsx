"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface QuizProps {
    title : string;
    imageUrl : string;
    link : string;
}

const Quiz: React.FC<QuizProps> = ({ title, imageUrl, link }) => {
    return (
        <Link href={link}>
        <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex flex-col items-center w-[190px] h-[270px]">
      <div className="bg-lightPink rounded-full w-28 h-28 mb-6 flex items-center justify-center">
        <div className= "rounded-full w-24 h-24 flex items-center justify-center">
          <Image src={imageUrl} alt="Quiz Image" className="rounded-full" width={80} height={80}/>
        </div>
      </div>
      <p className="text-center font-semibold">{title}</p>
    </div>
        </Link>
    );
}

export default Quiz;