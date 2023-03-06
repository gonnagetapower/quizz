import { Tappable } from '@vkontakte/vkui';
import React from 'react';

import './Game.css';

const Game = ({ step, question, onClickVariant, questions }) => {
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <div className="game">
      {/* <div className="progress"> */}
      {/* <div style={{ width: `${percentage}%` }} className="progress__inner"></div> */}
      {/* </div> */}
      <div className='step-container'>
        <h2 className='step'>{step} / {questions.length}</h2>
      </div>

      <h1 className="game__title">{question.title}</h1>
      <ul className="game-list">
        {question.variants.map((text, index) => (
          <Tappable>
            <li
              className="game__question"
              onClick={() => onClickVariant(index)}
              key={index}>
              <h2 className="game__answer">{text}</h2>
            </li>
          </Tappable>
        ))}
      </ul>
    </div>
  );
};

export default Game;
