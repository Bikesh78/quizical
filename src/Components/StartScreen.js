import React from "react";
import { Link } from "react-router-dom";

export default function StartScreen() {
  return (
    <div className="page-start">
      <div className="header">
        <h3>Quizzical</h3>
      </div>
      <Link to="/quiz">
        <button className="btn-primary">Start Quiz</button>
      </Link>
    </div>
  );
}
