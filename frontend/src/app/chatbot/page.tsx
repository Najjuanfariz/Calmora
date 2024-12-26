"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey || "");

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-latest",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 1000,
  responseMimeType: "text/plain",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

interface Message {
  user: string;
  ai?: string;
}

const isMentalHealthTopic = (input: string): boolean => {
  const mentalHealthKeywords = [
    "cemas",
    "stres",
    "depresi",
    "kesehatan mental",
    "emosi",
    "terapi",
    "konsultasi",
    "trauma",
    "kesedihan",
    "kecemasan",
    "overthinking",
  ];

  return mentalHealthKeywords.some((keyword) =>
    input.toLowerCase().includes(keyword)
  );
};

const removeStarsAndSymbols = (text: string): string => {
  return text.replace(/[*★☆✨]/g, ""); 
};

export default function Chatbot() {
  const [inputValue, setInputValue] = useState<string>("");
  const [history, setHistory] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(true); 

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const closeModal = () => {
    setShowModal(false); 
  };

  const handleSubmit = async () => {
    if (!inputValue.trim()) return;

    if (!isMentalHealthTopic(inputValue)) {
      setShowModal(true); 
      setInputValue(""); 
      return;
    }

    const userMessage = inputValue;
    setInputValue("");
    setIsLoading(true);

    setHistory((prev) => [...prev, { user: userMessage, ai: "Sedang memproses..." }]);

    try {
      const chatSession = model.startChat({
        generationConfig,
        safetySettings,
        history: [],
      });
      const result = await chatSession.sendMessage(userMessage);
      let responseText = await result.response.text();

      responseText = removeStarsAndSymbols(responseText);

      setHistory((prev) => {
        const updatedHistory = [...prev];
        updatedHistory[updatedHistory.length - 1].ai = responseText;
        return updatedHistory;
      });
    } catch (error) {
      console.error("Error:", error);
      setHistory((prev) => {
        const updatedHistory = [...prev];
        updatedHistory[updatedHistory.length - 1].ai =
          "Terjadi kesalahan saat menghubungi AI.";
        return updatedHistory;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#B25B8E] text-white font-sans">
      <div className="text-center w-full mb-6 p-4">
        <h1 className="text-4xl font-bold text-left mb-2">Calm.ai</h1>
      </div>

      <div className="flex flex-col w-full flex-grow overflow-y-auto px-4">
        {history.map((item, index) => (
          <div key={index} className="flex flex-col mb-6">
            <div className="flex justify-end mb-2">
              <div className="bg-blue-500 text-white rounded-lg px-4 py-2 max-w-md text-sm">
                <strong>User:</strong> {item.user}
              </div>
            </div>
            {item.ai && (
              <div className="flex justify-start">
                <div className="bg-white text-black rounded-lg px-10 py-2 max-w-md text-sm">
                  <strong>Calm.ai:</strong> {item.ai}
                </div>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex justify-center px-4 py-4">
        <div className="flex w-full max-w-lg">
          <input
            type="text"
            placeholder="How can I help you today? ❤️"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="bg-white text-black rounded-l-full px-6 py-3 shadow-md w-full"
          />
          <button
            onClick={handleSubmit}
            className="bg-gray-200 text-black rounded-r-full px-6 py-3 shadow-md"
          >
            Submit
          </button>
        </div>
      </div>

      {history.length === 0 && (
        <div className="flex justify-center gap-4 px-4 mb-4">
          <button
            onClick={() => setInputValue("Saya merasa cemas")}
            className="bg-white text-black rounded-full px-6 py-3 shadow-md"
          >
            Saya merasa cemas
          </button>
          <button
            onClick={() => setInputValue("Saya merasa overthinking")}
            className="bg-white text-black rounded-full px-6 py-3 shadow-md"
          >
            Saya merasa overthinking
          </button>
          <button
            onClick={() => setInputValue("Saya ingin konsultasi")}
            className="bg-white text-black rounded-full px-6 py-3 shadow-md"
          >
            Saya ingin konsultasi
          </button>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h2 className="text-lg font-bold mb-4">Pemberitahuan</h2>
            <p className="text-gray-700 mb-4">
              Maaf, chatbot ini hanya dapat membantu pertanyaan tentang kesehatan mental.
            </p>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-4 py-2 rounded-full"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
