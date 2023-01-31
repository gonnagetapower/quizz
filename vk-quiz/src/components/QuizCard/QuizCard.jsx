import { useRouter } from '@happysanta/router';
import { Card, CardGrid } from '@vkontakte/vkui';
import React from 'react';
import { PAGE_QUIZ } from '../../router';

import './QuizCard.css';

const QuizCard = ({ id }) => {
  const router = useRouter();
  return (
    <CardGrid size="l">
      <Card mode="shadow">
        <div
          onClick={() => router.pushPage(PAGE_QUIZ, { id: id })}
          className="card-container">
          <div className="card">
            <h1 className="card__text">Тест по истории</h1>
          </div>
        </div>
      </Card>
    </CardGrid>
  );
};

export default QuizCard;
