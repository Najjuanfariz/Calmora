import getDetailQuiz from "@/lib/hooks/quiz/get-detail-quiz";

interface QuestionProps {
    params: {id: number}
}

export const  QuizDetail = async ({params}: QuestionProps) => {
    const data = await getDetailQuiz(params.id);

    console.log("ini data", data)


return (
    <div className="min-h-screen bg-lightPink flex flex-col items-center py-10 px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-white mt-5 mb-4">
            {data?.title}
        </h1>
        <p>{data?.description}</p>

        {data?.scoreDescription.map((score, index) => (
            <div key={index}>
                <p className="text-sm md:text-lg text-center font-medium text-white mb-2">
                    {score.description}
                </p>
                <p className="text-sm md:text-lg text-center font-medium text-white mb-6">
                    {score.rangeMin} - {score.rangeMax}
                </p>
            </div>
        ))}
    </div>
    );
};

export default QuizDetail;