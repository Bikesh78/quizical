import React from "react";
//Components
import Quiz from "./Quiz";

export default function RenderQuiz({ quizData, quizCompleted }) {
  //   let count = 0;
  //   const checkAnswers = () => {
  //     quizData.forEach((data) => {
  //       data.answers.forEach((answer) => {
  //         if (answer.isSelected && answer.isCorrect) {
  //           count++;
  //         }
  //       });
  //     });
  //     console.log(`You scored ${count} out of 10`);
  //   };
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
