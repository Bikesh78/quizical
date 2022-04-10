import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function StartScreen() {
  let navigate = useNavigate();
  const pushHistory = () => {
    navigate("/quiz");
  };
  return (
    <div className="page-start">
      <div className="header">
        <h3>Quizzical</h3>
      </div>

      <button className="btn-primary" onClick={pushHistory}>
        Start Quiz
      </button>
    </div>
  );
}
