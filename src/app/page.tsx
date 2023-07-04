"use client"

import { questions } from "@/data/questions";
import { QuestionItem } from "@/components/QuestionItem";
import { useState } from "react";
import { Results } from "@/components/Results";

const Page = () => {

  const title = 'Quiz de Vôlei';
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const loadNextQuestion = () => {

    if (questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }

  const HandleAnswer = (answer: number) => {
    setAnswers([ ...answers, answer ]);
    loadNextQuestion();
  }

  const HandleRestartButton = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
  }

  return (

    <div className="w-screen h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black">
        <div className="p-5 font-bold text-2xl shadow shadow-gray-300">{title}</div>
        <div className="p-5">
          {!showResult && 
            <QuestionItem
              question={questions[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={HandleAnswer}
            />
          }
          {showResult &&
            <Results questions={questions} answers={answers}/>
          }
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {!showResult &&
            `${currentQuestion + 1} de ${questions.length} pergunta${questions.length === 1 ? '' : 's'}`
          }
          {showResult &&
            <button onClick={HandleRestartButton} className="p-3 py-3 bg-blue-800 text-white rounded-md">Reiniciar Quiz</button>
          }
        </div>
      </div>
    </div>
  );
}

export default Page;