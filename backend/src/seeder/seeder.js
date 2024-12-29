const mongoose = require("mongoose");
const Quiz = require("../models/quiz");
const Question = require("../models/question");

const seedDatabase = async () => {
  await mongoose.connect("mongodb+srv://dipokusumo7:dipokusumo7@cluster0.ralnu.mongodb.net/Calmora", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {

    // Insert quizzes and questions
    const quizzes = [
      {
        title: "Relationship Readiness Quiz",
        description: "Assess your readiness for a healthy relationship.",
        category: "Relationship",
        scoreDescription: [
          {
            rangeMin: 0,
            rangeMax: 10,
            description: "Kamu menunjukkan kesiapan yang tinggi untuk menjalani hubungan yang sehat dan stabil. Skor rendah ini menunjukkan bahwa kamu sudah memahami kebutuhanmu, siap berbagi ruang dan waktu, serta mampu menangani konflik dan emosi dengan baik. Kamu memiliki fondasi yang kuat untuk menjalani hubungan jangka panjang dengan kedewasaan dan keseimbangan.",
          },
          {
            rangeMin: 11,
            rangeMax: 20,
            description: "Kamu cukup siap untuk menjalin hubungan, tetapi ada beberapa area yang mungkin masih perlu diperhatikan. Misalnya, mungkin ada sedikit tantangan dalam menangani konflik atau komitmen jangka panjang. Namun, dengan beberapa peningkatan dalam hal manajemen emosi dan komunikasi, kamu akan semakin siap untuk menjalani hubungan yang stabil dan penuh makna.",
          },
          {
            rangeMin: 21,
            rangeMax: 30,
            description: "Dengan skor ini, ada beberapa aspek penting dalam hubungan yang perlu diperbaiki. Kamu mungkin sudah memahami kebutuhan diri, tetapi mungkin masih merasa ragu dalam hal komitmen atau pengelolaan konflik. Cobalah untuk fokus pada pengembangan diri, terutama dalam hal memahami kebutuhan emosional dan memperkuat kestabilan pribadi. Ini akan membantu membangun fondasi yang lebih kuat untuk hubungan ke depan.",
          },
          {
            rangeMin: 31,
            rangeMax: 40,
            description: "Skor ini menunjukkan bahwa kamu mungkin belum siap untuk menjalin hubungan yang sehat dan stabil saat ini. Masih ada beberapa area yang perlu dipahami dan diperbaiki, seperti kestabilan emosi, kemampuan menghadapi konflik, dan komitmen. Fokuslah pada diri sendiri terlebih dahulu, pelajari apa yang kamu butuhkan dalam hubungan, dan tingkatkan stabilitas hidupmu. Semua ini akan membantumu lebih siap di masa mendatang.",
          },
        ],
        totalQuestion: 10,
        questions: [
          {
            content: "How do you feel about your current status?",
            options: [
              { optionText: "Single, happy, and content", score: 1 },
              { optionText: "Single, but lonely", score: 2 },
              { optionText: "Single, unhappy, and often lonely", score: 3 },
              { optionText: "Not happy being single and want to change it ASAP", score: 4 },
            ],
          },
          {
            content: "How well do you know yourself and your needs?",
            options: [
              { optionText: "Very well. I know what I want", score: 1 },
              { optionText: "I have some ideas, but not much", score: 2 },
              { optionText: "I’m not that aware of my needs", score: 3 },
              { optionText: "I have no idea what I want", score: 4 },
            ],
          },
          {
            content: "Are you good at handling conflicts?",
            options: [
              { optionText: "I can calmly handle and resolve conflicts", score: 1 },
              { optionText: "I try to avoid conflicts but handle them when they arise", score: 2 },
              { optionText: "I feel stressed when conflicts arise, but I deal with them", score: 3 },
              { optionText: "I avoid conflicts at all costs", score: 4 },
            ],
          },
          {
            content: "How stable would you say your life is currently?",
            options: [
              { optionText: "I have a stable and satisfying life", score: 1 },
              { optionText: "I have a mostly stable life with minor problems", score: 2 },
              { optionText: "I have a somewhat stable but manageable life", score: 3 },
              { optionText: "I have an unstable and stressful life", score: 4 },
            ],
          },
          {
            content: "How comfortable are you with being vulnerable with another person?",
            options: [
              { optionText: "Very comfortable", score: 1 },
              { optionText: "Somewhat comfortable. I share my thoughts selectively", score: 2 },
              { optionText: "I struggle with opening up about my thoughts and feelings", score: 3 },
              { optionText: "I avoid being vulnerable with others", score: 4 },
            ],
          },
          {
            content: "How do you handle past relationship experiences?",
            options: [
              { optionText: "I prefer to learn from them and move forward", score: 1 },
              { optionText: "I reflect on them, but struggle to move on", score: 2 },
              { optionText: "They affect me, but I try to let go of them for my sake", score: 3 },
              { optionText: "I find it hard to let go of my past", score: 4 },
            ],
          },
          {
            content: "What do you think about commitment?",
            options: [
              { optionText: "I am ready for a serious commitment", score: 1 },
              { optionText: "I am curious about commitment", score: 2 },
              { optionText: "I am not sure about long-term commitment", score: 3 },
              { optionText: "I am not ready for a commitment", score: 4 },
            ],
          },
          {
            content: "What do you think about sharing your space and time with someone?",
            options: [
              { optionText: "I feel excited and comfortable", score: 1 },
              { optionText: "I am open to it but still need my personal space", score: 2 },
              { optionText: "I feel apprehensive about it, but I’m willing to try", score: 3 },
              { optionText: "I feel uncomfortable and need my space", score: 4 },
            ],
          },
          {
            content: "What are your thoughts about compromise in a relationship?",
            options: [
              { optionText: "Compromise is important and should be mutual", score: 1 },
              { optionText: "It’s important, but it can be challenging as well", score: 2 },
              { optionText: "It’s necessary to compromise, but it’s hard for me", score: 3 },
              { optionText: "I struggle with the idea of compromise", score: 4 },
            ],
          },
          {
            content: "How much time do you think you can invest in a relationship?",
            options: [
              { optionText: "I’m ready to prioritize my relationship", score: 1 },
              { optionText: "I’m OK with a good amount, but I need a balance", score: 2 },
              { optionText: "Little time. I have other commitments I need to see", score: 3 },
              { optionText: "I am too busy, so very little time", score: 4 },
            ],
          },
          // Add other questions for this quiz
        ],
      }
    ];

    for (const quizData of quizzes) {
      const questionDocs = [];
      for (const questionData of quizData.questions) {
        const questionDoc = await Question.create(questionData);
        questionDocs.push(questionDoc._id);
      }
      quizData.questions = questionDocs;
      await Quiz.create(quizData);
    }

    console.log("Seeding successful");
  } catch (error) {
    console.error("Seeding failed", error);
  } finally {
    await mongoose.disconnect();
  }
};

seedDatabase();
