"use client"
import React from "react";

interface ArticleProps {
    title: string;
    writer: string;
    date: string;
    link: string;
}

const Article: React.FC<ArticleProps> = ({ title, date, link, writer }) => {
    const handleClick = () => {
        window.open(link, "_blank"); // Membuka link di tab baru
    };

    return (
        <div
            onClick={handleClick}
            className="bg-lightPink text-white rounded-lg p-12 w-[370px] h-[300px] cursor-pointer"
        >
            <h2 className="text-xl font-semibold mb-12">{title}</h2>
            <p className="font-semibold">Penulis: {writer}</p>
            <p className="mb-6 font-extralight">{date}</p>
        </div>
    );
};

export default Article;
