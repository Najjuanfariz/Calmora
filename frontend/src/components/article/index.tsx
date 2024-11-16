import React from "react";
import Link from "next/link";

interface ArticleProps {
    title: string;
    date : string;
    link : string;
}

const Article: React.FC<ArticleProps> = ({ title, date , link }) => {
    return (
        <div className="bg-lightPink text-white rounded-lg p-12 w-[370px] h-[300px]">
            <h2 className="text-xl font-semibold mb-12">{title}</h2>
            <p className="mb-6 font-extralight">{date}</p>
            <Link href={link}
            className="border-2 border-white bg-transparent px-4 py-2 rounded-lg font-bold">
                Read Article
            </Link>
        </div>
    );
};

export default Article;