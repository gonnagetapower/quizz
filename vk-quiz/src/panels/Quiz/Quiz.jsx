import React from 'react';
import { PanelHeader } from '@vkontakte/vkui';
import { questions } from '../../utils/questions';

import { Game, Result } from '../../components';

import { ReactComponent as BackArrow } from './../../assets/img/leftArrow.svg';

import './Quiz.css';
import { useRouter } from '@happysanta/router';

const Quiz = () => {
  const router = useRouter();

  const [step, setStep] = React.useState(0);
  const [correct, setCorret] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorret(correct + 1);
    }
  };

  const refreshGame = () => {
    setCorret(0);
    setStep(0);
  };

  return (
    <>
      <PanelHeader>
        <div className="header">
          <BackArrow onClick={() => router.popPage()} />
          <p>Тест по истории</p>
        </div>
      </PanelHeader>
      <div className="App">
        {step !== questions.length ? (
          <Game
            step={step}
            question={question}
            onClickVariant={onClickVariant}
            questions={questions}
          />
        ) : (
          <Result refreshGame={refreshGame} correct={correct} questions={questions} />
        )}
      </div>
    </>
  );
};

export default Quiz;
