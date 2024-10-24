import Link from "next/link";
import Specialist from "@/components/specialist";
import Article from "@/components/article";
import Quiz from "@/components/quiz";
import Image from "next/image";

export default function Home() {
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
            <Link href="/get-started">
            <button className="bg-lightPink text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-pink-700 transition">
              Get Started
            </button>
            </Link>
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
            Immerse yourself in articles and be swept away to a world that is separate from yours.<br/> Thus, unraveling from all the dilemmas, stress & problems you might have.
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <Article title="Kesehatan Mental dan Pentingnya Self-Care" date="12 Oktober, 2024" link="https://www.alodokter.com/yuk-kenali-penyebab-dan-gejala-depresi-pada-remaja"/>
              <Article title="Mengatasi Stres di Tempat Kerja" date="12 Oktober, 2024" link="https://www.klikdokter.com/psikologi/kesehatan-mental/9-cara-mengatasi-stres-di-kantor?srsltid=AfmBOorIhMZVOPlu3NliUDaCNnKVJb0SyUxWRYT8wRpSO0f_1KKIrxSq"/>
              <Article title="Mengenali Gejala Depresi pada Remaja" date="12 Oktober, 2024" link="https://www.alodokter.com/yuk-kenali-penyebab-dan-gejala-depresi-pada-remaja"/>
            </div>
            <Link href="/articles">
            <button className="bg-lightPink text-white font-semibold py-2 px-6 rounded">View All</button>
            </Link>
          </div>
        </div>
        <div className="bg-darkPink py-20">
          <div className="mx-auto">
            <div className="text-center mb-10">
            <h1 className="text-white text-4xl font-bold mb-6 whitespace-nowrap">
          Quizzes to Discover Your True Self
            </h1>
            </div>
            <p className="text-white text-sm mb-10 text-center">
            Our free quiz can help you take a proactive approach to your mental health and wellness!
            </p>
           <div className="flex justify-center space-x-4 mb-10">
              <Quiz title="Are You Ready For A Relationship?" imageUrl="/" link="/quiz/1" />
              <Quiz title="What's My Love Language?" imageUrl="/" link="/quiz/2"/>
              <Quiz title="Am I Lonely?" imageUrl="/" link="/quiz/3"/>
              <Quiz title="Empath Or Narcissist" imageUrl="/" link="/quiz/4"/>
              <Quiz title="The Art Of Attachment" imageUrl="/" link="/quiz/5"/>
            </div>
            <div className="flex justify-center">
              <Link href="/quiz">
                <button className="border-2 border-white text-white bg-transparent px-6 py-2 rounded-lg font-bold">
                  Take More Quizzes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
