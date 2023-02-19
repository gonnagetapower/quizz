import { useRouter } from '@happysanta/router';
import { Card, Tappable } from '@vkontakte/vkui';
import React from 'react';
import { MODAL_UNAVAILABLE, PAGE_QUIZ } from '../../router';

import './QuizCard.css';

const QuizCard = ({ id, quiz, bg }) => {
  console.log(quiz);

  const router = useRouter();
  return (
    <Card mode="shadow">
      <Tappable>
        {quiz.available ? (
          <div
            style={{ background: bg }}
            className="quiz-card"
            onClick={() => router.pushPage(PAGE_QUIZ, { id: id })}>
            <h1 className="quiz-card__title">{quiz.title}</h1>
            <p className='quiz-card__descr'>{quiz.descr}</p>
          </div>
        ) : (
          <div
            style={{ background: bg }}
            className="quiz-card quiz-card--blocked"
            onClick={() => router.pushModal(MODAL_UNAVAILABLE)}>
            <h1 className="quiz-card__title quiz-card__title--blocked">{quiz.title}</h1>
            <p className='quiz-card__descr'>{quiz.descr}</p>
          </div>
        )}
      </Tappable>
    </Card>
  );
};

export default QuizCard;
