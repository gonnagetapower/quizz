import React from "react";

import './Game.css'

const Game = ({ step, question, onClickVariant, questions }) => {
    const percentage = Math.round((step / questions.length) * 100)
    return (
        <div className="game">
            <div className="progress">
                <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div>
            <h1 className="game__title">{question.title}</h1>
            <ul>
                {
                    question.variants.map((text, index) =>
                        <li className="game__question" onClick={() => onClickVariant(index)} key={index}>
                            <h2 className="game__answer">{text}</h2>
                        </li>)
                }
            </ul>
        </div>
    );
}

export default Game