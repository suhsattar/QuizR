import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <div className="container">
        <div>
          <Link to="/">QuizR</Link>
        </div>

        <div>
          <Link to="/">Decks</Link>
        </div>

        <div>
          <Link to="/login">QuizR</Link>
        </div>
      </div>
    </div>
  );
}
