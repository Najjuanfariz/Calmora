import React from 'react';
import Article from '@/components/article';

export default function ArticlePage() {
    const articlesData = [
        {
            title:"9 Cara Mengatasi Stres di Kantor",
            writer:"Krisna Octavianus",
            date:"04 Nov, 2019",
            link:"https://www.klikdokter.com/psikologi/kesehatan-mental/9-cara-mengatasi-stres-di-kantor"
          },
          {
            title:"Gangguan Mental - Gejala, Pengobatan", 
            writer:"Dr. Pittara",
            date:"20 April, 2022",
            link:"https://www.alodokter.com/kesehatan-mental"
          },
          {
            title:"Mengenali Gejala Depresi pada Remaja",
            writer:"Dr. Pittara",
            date:"2 Februari, 2022",
            link:"https://www.alodokter.com/yuk-kenali-penyebab-dan-gejala-depresi-pada-remaja"
          },
          {
            title:"5 Tanda Gangguan Jiwa yang Harus Diwaspadai",
            writer:"Dr. Airindya Bella",
            date:"17 Maret, 2022",
            link:"https://www.alodokter.com/tanda-kamu-mengalami-gangguan-jiwa"
          },
          {
            title:"Mengenali Karakter dan Tipe dari Kepribadian ISFP",
            writer:"Dr. Rizal Fadli",
            date:"30 Oktober, 2024",
            link:"https://www.halodoc.com/artikel/mengenali-karakter-dan-tipe-dari-kepribadian-isfp"
          },
          {
            title:"Catat, Ini Ciri-Ciri Orang Harus ke Psikiater", 
            writer:"Dr. Rizal Fadli",
            date:"01 November, 2024",
            link:"https://www.halodoc.com/artikel/catat-ini-ciri-ciri-orang-harus-ke-psikiater"
          },
    ];

    return (
        <div className="bg-cyan min-h-screen py-10">
            <main>
                <div className="text-center">
                    <p className="text-4xl font-extrabold mb-12">
                        Curated & Brewed Over Coffee!
                    </p>
                    <p className="text-lg mb-8">
                        Immerse yourself in articles and be swept away to a world that is separate from yours.<br />Thus, unraveling from all the dilemmas, stress & problems you might have.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                        {articlesData.map((article, index) => (
                            <Article key={index} title={article.title} writer={article.writer} date={article.date} link={article.link} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
