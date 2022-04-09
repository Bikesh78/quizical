import React from "react";
//Components
import Quiz from "./Quiz";

export default function RenderQuiz({ quizData, quizCompleted }) {
  return (
    <>
      {quizData.map((quizData) => (
        <Quiz
          key={quizData.id}
          question={quizData.question}
          answers={quizData.answers}
          id={quizData.id}
          quizCompleted={quizCompleted}
        />
      ))}
    </>
  );
}
