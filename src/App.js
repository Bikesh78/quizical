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
  const decodeHtmlCharCodes = (str) => {
    str = str.replace(/&quot;/g, `"`);
    str = str.replace(/&amp;/g, `&`);
    return str.replace(/(&#(\d+);)/g, (match, capture, charCode) =>
      String.fromCharCode(charCode)
    );
  };

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
              answer: decodeHtmlCharCodes(answer),
            };
          });
          return {
            id: nanoid(),
            question: decodeHtmlCharCodes(item.question),
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
    return <div className="loader"></div>;
  }

  return (
    <main>
      {/* <BrowserRouter basename="/quizical"> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<StartScreen />} />
          <Route
            path="/quiz"
            element={
              <RenderQuiz quizData={quizData} setQuizData={setQuizData} />
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
