import React, { useState } from "react";
//Components
import Quiz from "./Quiz";
//package
import Swal from "sweetalert2";

export default function RenderQuiz({ quizData, setQuizData }) {
  const [quizCompleted, setQuizCompleted] = useState(false);

  let count = 0;
  const checkAnswers = () => {
    quizData.forEach((data) => {
      data.answers.forEach((answer) => {
        if (answer.isSelected && answer.isCorrect) {
          count++;
        }
      });
    });
    setQuizCompleted(true);
    Swal.fire({
      title: `You scored ${count} out of 10`,
      text: `Do you want to play again?`,
      showCloseButton: true,
      confirmButtonText: `Play Again`,
    }).then((result) => {
      if (result.isConfirmed) {
        setQuizCompleted(false);
        window.location.reload(false);
      }
    });
  };
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
      <div className="button-container">
        <button className="btn-primary" onClick={checkAnswers}>
          Check Answsers
        </button>
      </div>
    </>
  );
}
