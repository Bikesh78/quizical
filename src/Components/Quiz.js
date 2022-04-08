import React, { useState, useEffect } from "react";

export default function Quiz({ question, answers, id }) {
  if (!question) {
    return <p>Loading...</p>;
  }
  const toggleClass = (e) => {
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
  };

  /* console.log("id", data.id); */

  return (
    <main>
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
                  onClick={(e) => toggleClass(e)}
                >
                  {item}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="button-container">
        <button className="btn-primary">Check Answsers</button>
      </div>
    </main>
  );
}
