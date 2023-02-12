import { useRouter } from '@happysanta/router';
import { Card, Tappable } from '@vkontakte/vkui';
import React from 'react';
import { MODAL_UNAVAILABLE, PAGE_QUIZ } from '../../router';

import './QuizCard.css';

const QuizCard = ({ id, quiz }) => {
  console.log(quiz);

  const router = useRouter();
  return (
    <Card mode="shadow">
      <Tappable>
        {quiz.available ? (
          <div
            className="quiz-card"
            onClick={() => router.pushPage(PAGE_QUIZ, { id: id })}>
            <h1 className="quiz-card__title">{id + 1}</h1>
          </div>
        ) : (
          <div
            className="quiz-card quiz-card--blocked"
            onClick={() => router.pushModal(MODAL_UNAVAILABLE)}>
            <h1 className="quiz-card__title quiz-card__title--blocked">{id + 1}</h1>
          </div>
        )}
      </Tappable>
    </Card>
  );
};

export default QuizCard;
