import { useRouter } from '@happysanta/router';
import { Card, Tappable } from '@vkontakte/vkui';
import React from 'react';
import { PAGE_QUIZ } from '../../router';

import './QuizCard.css';

const QuizCard = ({ id }) => {
  const router = useRouter();
  return (
    <Card mode="shadow" onClick={() => router.pushPage(PAGE_QUIZ, { id: id })}>
      <Tappable>
        <div className="quiz-card">
          <h1 className="quiz-card__title">{id + 1}</h1>
        </div>
      </Tappable>
    </Card>
  );
};

export default QuizCard;
