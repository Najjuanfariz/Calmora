import QuizComponent from "@/components/quiz";

export default function Quiz() {
    return <div className="bg-darkPink py-20">
        <div className="mx-auto">
            <div className="text-center mb-10">
                <h1 className="text-white text-4xl font-bold mb-6 whitespace-nowrap">
                    Quizzes to Discover Your True Self
                </h1>
            </div>
            <p className="text-white text-sm mb-10 text-center" >
                Our free quiz can help you take a proactive approach to your mental health and wellness!
            </p>
            <div className="justify-center space-x-4 mb-10 grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-5">
            <QuizComponent title="Are You Ready For A Relationship?" imageUrl="/images/relationship.svg" link="/quiz/quiz1" />
            <QuizComponent title="What's My Love Language?" imageUrl="/images/love_language.svg" link="/quiz/quiz2" />
            <QuizComponent title="Am I Lonely?" imageUrl="/images/lonely.svg" link="/quiz/quiz3" />
            <QuizComponent title="Empath Or Narcissist" imageUrl="/images/empath_narcissist.svg" link="/quiz/quiz4" />
            <QuizComponent title="The Art Of Attachment" imageUrl="/images/attachment.svg" link="/quiz/quiz5" />
            <QuizComponent title="Are You Ready For A Relationship?" imageUrl="/images/relationship.svg" link="/quiz/quiz6" />
            <QuizComponent title="What's My Love Language?" imageUrl="/images/love_language.svg" link="/quiz/quiz7" />
            <QuizComponent title="Am I Lonely?" imageUrl="/images/lonely.svg" link="/quiz/quiz8" />
            <QuizComponent title="Empath Or Narcissist" imageUrl="/images/empath_narcissist.svg" link="/quiz/quiz9" />
            <QuizComponent title="The Art Of Attachment" imageUrl="/images/attachment.svg" link="/quiz/quiz10" />
            </div>
        </div>
    </div>;
}