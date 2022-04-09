import React, { useState } from "react";

export default function Quiz({ question, answers, id, quizCompleted }) {
  const [isSelected, setIsSelected] = useState("");
  if (!question) {
    return <p>Loading...</p>;
  }
  const selectAnswer = (e, item) => {
    // isSelected ? setIsSelected("") : setIsSelected(!isSelected);
    /* let siblingNodes = e.target.parentNode.parentNode.childNodes;
    siblingNodes.forEach((sibling) => {
      sibling.firstChild.classList.remove("selected");
    });
    if (e.target.classList.contains("selected")) {
      e.target.classList.remove("selected");
    } else {
      e.target.classList.add("selected");
    }
    console.log(id); */
    if (!quizCompleted) {
      answers.map((item) => (item.isSelected = false));
      item.isSelected = true;
      setIsSelected(item.id);
    }
  };

  return (
    <>
      <div className="card">
        <div className="card--question">
          <p>{question}</p>
        </div>
        <div className="card--answers">
          {answers.map((item) => {
            return (
              <div className="card--answers--options">
                <button
                  className={`btn-secondary ${
                    quizCompleted && item.isCorrect ? "completed" : ""
                  }`}
                  style={{
                    backgroundColor:
                      !quizCompleted && item.isSelected === true
                        ? "#d6dbf5"
                        : quizCompleted && item.isSelected && !item.isCorrect
                        ? "#F8BCBC"
                        : "",
                  }}
                  onClick={(e) => selectAnswer(e, item)}
                >
                  {item.answer}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
