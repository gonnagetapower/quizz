import { useRouter } from '@happysanta/router';
import { Card, Tappable } from '@vkontakte/vkui';
import React from 'react';
import { MODAL_UNAVAILABLE, PAGE_QUIZ } from '../../router';

import coin from './../../assets/img/coin.svg';

import './QuizCard.css';

const QuizCard = ({ id, quiz, bg }) => {
  const router = useRouter();
  return (
    <Card mode="shadow" style={{ borderRadius: '30px' }}>
      <Tappable style={{ borderRadius: '28px' }}>
        {quiz.available ? (
          <div
            style={{ background: bg }}
            className="quiz-card"
            onClick={() => router.pushPage(PAGE_QUIZ, { id: id })}>
            {console.log('id', { id })}
            <h1 className="quiz-card__title">{quiz.title}</h1>
            <p className="quiz-card__descr">{quiz.descr}</p>
            <div className="price">
              {quiz.price}
              <img className="price__img" src={coin} />
            </div>
            <div className="count">
              <p>Вопросов : {quiz.quiz.length}</p>
            </div>
          </div>
        ) : (
          <div
            style={{ background: bg }}
            className="quiz-card quiz-card--blocked"
            onClick={() => router.pushModal(MODAL_UNAVAILABLE, { id: id })}>
            {console.log('id', { id })}
            <h1 className="quiz-card__title quiz-card__title--blocked">{quiz.title}</h1>
            <p className="quiz-card__descr">{quiz.descr}</p>
            <div className="price">
              {quiz.price}
              <img className="price__img" src={coin} />
            </div>
            <div className="count">
              <p>Вопросов : {quiz.quiz.length}</p>
            </div>
          </div>
        )}
      </Tappable>
    </Card>
  );
};

export default QuizCard;
