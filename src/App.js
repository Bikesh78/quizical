import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Components
import StartScreen from "./Components/StartScreen";
import RenderQuiz from "./Components/RenderQuiz";
//stylesheet
import "./stylesheet/style.scss";
//package
import axios from "axios";
import { shuffle } from "lodash";
import { nanoid } from "nanoid";

function App() {
  const [quizData, setQuizData] = useState("");
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=10&type=multiple"
        );
        // await setQuizData(response.data.results);
        const triviaData = await response.data.results.map((item) => {
          const answerArray = [item.correct_answer, ...item.incorrect_answers];
          const answers = answerArray.map((answer) => {
            return {
              id: nanoid(),
              isSelected: false,
              isCorrect: answer === item.correct_answer ? true : false,
              answer: answer,
            };
          });
          return {
            id: nanoid(),
            question: item.question,
            answers: shuffle(answers),
          };
        });
        await setQuizData(triviaData);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);
  if (!quizData) {
    return <p>Loading...</p>;
  }
  let count = 0;
  const checkAnswers = () => {
    quizData.forEach((data) => {
      data.answers.forEach((answer) => {
        if (answer.isSelected && answer.isCorrect) {
          count++;
        }
      });
    });
    console.log(`You scored ${count} out of 10`);
    setQuizCompleted(true);
  };
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route
            path="/quiz"
            element={
              <RenderQuiz quizData={quizData} quizCompleted={quizCompleted} />
            }
          />
        </Routes>
      </BrowserRouter>
      <div className="button-container">
        <button className="btn-primary" onClick={checkAnswers}>
          Check Answsers
        </button>
      </div>
    </main>
  );
}

export default App;
