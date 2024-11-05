"use client";
import React, { useState, useEffect } from "react";
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

export default function Chatbot() {
  const [inputValue, setInputValue] = useState<string>(""); 
  const [history, setHistory] = useState<Message[]>([]);    
  const [isLoading, setIsLoading] = useState<boolean>(false); 
  const [isTyping, setIsTyping] = useState<boolean>(false);   
  const [aiResponse, setAIResponse] = useState<string>("");    
  const [displayedResponse, setDisplayedResponse] = useState<string>(""); 

  
  const handleSubmit = async () => {
    if (!inputValue.trim()) return; 

    const userMessage = inputValue; 
    setInputValue(""); // Clear input field after submission
    setIsLoading(true); // Set loading state
    setIsTyping(true); // Set typing state to true
    setAIResponse(""); // Reset AI response to avoid duplicates

    // Add user message to history only once
    setHistory((prev) => [...prev, { user: userMessage }]);
    setDisplayedResponse(""); // Reset displayed response for new input

    try {
      // Start a chat session with the model and send user input
      const chatSession = model.startChat({
        generationConfig,
        safetySettings,
        history: [], // You might want to pass the previous history here
      });
      const result = await chatSession.sendMessage(userMessage);
      const responseText = await result.response.text(); // Get AI response

      // Set AI response for typing effect
      setAIResponse(responseText);
    } catch (error) {
      console.error("Error:", error);
      setHistory((prev) => [
        ...prev,
        { user: userMessage, ai: "Terjadi kesalahan saat menghubungi AI." },
      ]); // Add error to history
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  
  useEffect(() => {
    if (aiResponse && isTyping) {
      let index = 0;
      setDisplayedResponse(""); 

      const intervalId = setInterval(() => {
        if (index < aiResponse.length) {
          setDisplayedResponse((prev) => prev + aiResponse[index]);
          index++;
        } else {
          clearInterval(intervalId); 

          
          setHistory((prev) => {
            const lastMessage = prev[prev.length - 1];
            if (lastMessage && !lastMessage.ai) {
              return [
                ...prev.slice(0, -1),
                { user: lastMessage.user, ai: aiResponse },
              ];
            }
            return prev;
          });

          setAIResponse(""); 
          setIsTyping(false); 
        }
      }, 50); 

      return () => clearInterval(intervalId); 
    }
  }, [aiResponse, isTyping]);

  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

 
  const handleStopTyping = () => {
    setIsTyping(false);
    setDisplayedResponse(aiResponse); 
    setAIResponse(""); 

   
    setHistory((prev) => {
      const lastMessage = prev[prev.length - 1];
      if (lastMessage && !lastMessage.ai) {
        return [
          ...prev.slice(0, -1),
          { user: lastMessage.user, ai: displayedResponse || aiResponse },
        ];
      }
      return prev;
    });
  };

  return (
    <div className="flex flex-col h-screen bg-[#B25B8E] text-white font-sans">
      <div className="text-center w-full mb-6 p-4">
        <h1 className="text-4xl font-bold text-left mb-2">Calm.ai</h1>
      </div>

      {/* Display conversation history */}
      <div className="flex flex-col w-full flex-grow overflow-y-auto mb-4 px-4">
        {history.map((item, index) => (
          <div key={index} className="flex flex-col mb-2">
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white rounded-lg px-4 py-2 max-w-xs shadow-md">
                <strong>User:</strong> {item.user}
              </div>
            </div>
            {item.ai ? (
              <div className="flex justify-start">
                <div className="bg-white text-black rounded-lg px-4 py-2 max-w-xs shadow-md">
                  <strong>Calm.ai:</strong> {item.ai}
                </div>
              </div>
            ) : isTyping && displayedResponse ? (
              <div className="flex justify-start">
                <div className="bg-white text-black rounded-lg px-4 py-2 max-w-xs shadow-md">
                  <strong>Calm.ai:</strong> {displayedResponse}
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {/* Fixed container for the input box and button at the bottom */}
      <div className="flex justify-center px-4 py-4 bg-[#B25B8E]">
        <div className="flex w-full max-w-md">
          <input
            type="text"
            placeholder="How can I help you today? ❤️"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="bg-white text-black rounded-l-full px-6 py-3 shadow-md w-full"
          />
          <button
            onClick={isTyping ? handleStopTyping : handleSubmit}
            className="bg-gray-200 text-black rounded-r-full px-6 py-3 shadow-md"
          >
            {isTyping ? "Stop" : "Submit"}
          </button>
        </div>
      </div>

      {/* Quick prompt buttons, only show if there are no messages */}
      {history.length === 0 && (
        <div className="flex justify-center gap-4 mt-6 px-4 mb-6">
          <button onClick={() => setInputValue("Saya merasa cemas")} className="bg-white text-black rounded-full px-6 py-3 shadow-md">
            Saya merasa cemas
          </button>
          <button onClick={() => setInputValue("Saya butuh bantuan")} className="bg-white text-black rounded-full px-6 py-3 shadow-md">
            Saya butuh bantuan
          </button>
          <button onClick={() => setInputValue("Saya ingin konsultasi")} className="bg-white text-black rounded-full px-6 py-3 shadow-md">
            Saya ingin konsultasi
          </button>
        </div>
      )}
    </div>
  );
}
