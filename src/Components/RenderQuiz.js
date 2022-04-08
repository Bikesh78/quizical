import React, { useState, useEffect } from "react";
//packages
import { shuffle } from "lodash";
import axios from "axios";
import { nanoid } from "nanoid";

export default function Quiz({ question, answers, id }) {
  /*  const [quizData, setQuizData] = useState("");
  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10&type=multiple")
      .then((response) => setQuizData(response.data.results))
      .catch((error) => console.log("error", error));
  }, []);
  console.log(quizData);
  if (!quizData) {
    return <p>Loading...</p>;
  } */
  /*  setQuizData((prevQuizData) =>
    prevQuizData.map((data) => ({
      ...data,
      id: nanoid(),
    }))
  ); */
  const toggleClass = (e, content, data) => {
    // isSelected ? setIsSelected("") : setIsSelected(!isSelected);
    let siblingNodes = e.target.parentNode.parentNode.childNodes;
    siblingNodes.forEach((sibling) => {
      sibling.firstChild.classList.remove("selected");
    });
    if (e.target.classList.contains("selected")) {
      e.target.classList.remove("selected");
    } else {
      e.target.classList.add("selected");
    }
    console.log(data);
  };
  const renderQuiz = () =>
    quizData.map((data) => {
      /* console.log("id", data.id); */
      return (
        <div className="card">
          <div className="card--question">
            <p>{question}</p>
          </div>
          <div className="card--answers">
            {answers.map((item) => {
              return (
                <div className="card--answers--options">
                  <button
                    className={`btn-secondary`}
                    onClick={(e) => toggleClass(e, e.target.textContent, data)}
                  >
                    {item}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      );
    });

  return (
    <main>
      {/* {renderQuiz} */}
      {/*<div className="card">*/}
      {renderQuiz()}
      {/* <div className="card--question"> */}
      {/* <p>{quizData[0].question}</p> */}
      {/* </div> */}
      {/* <div className="card--answers">
          <div className="card--answers--options">
            <button className={`btn-secondary`} onClick={(e) => toggleClass(e)}>
              Adios
            </button>
          </div>
          <div className="card--answers--options">
            <button
              className={`btn-secondary `}
              onClick={(e) => toggleClass(e)}
            >
              Hola
            </button>
          </div>
          <div className="card--answers--options">
            <button
              className={`btn-secondary `}
              onClick={(e) => toggleClass(e)}
            >
              Au Revoir
            </button>
          </div>
          <div className="card--answers--options">
            <button
              className={`btn-secondary `}
              onClick={(e) => toggleClass(e)}
            >
              Salir
            </button>
          </div>
        </div> */}
      {/* </div> */}
      <div className="button-container">
        <button className="btn-primary">Check Answsers</button>
      </div>
    </main>
  );
}
