import React from 'react';
import { PanelHeader, Panel, Title, usePlatform, Group } from '@vkontakte/vkui';
import { PanelHeaderButton, PanelHeaderBack } from '@vkontakte/vkui';
import { questions } from '../../utils/questions';

import { Icon28ChevronBack } from '@vkontakte/icons';

import { Game, Result } from '../../components';

import './Quiz.css';

import { useRouter } from '@happysanta/router';

const Quiz = ({ id }) => {
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
    <Panel id={id}>
      <PanelHeader
        left={
          <PanelHeaderButton
            aria-label="Back"
            onClick={() => {
              router.popPage();
            }}>
            <Icon28ChevronBack fill="#fff" />
          </PanelHeaderButton>
        }
        before={<PanelHeaderBack color="#fff" />}>
        <Title style={{ color: "#fff" }}>Квизы</Title>
      </PanelHeader>

      {step !== questions.length ? (
        <div className='quiz'>
          <Game
            step={step}
            question={question}
            onClickVariant={onClickVariant}
            questions={questions}
          />
        </div>
      ) : (
        <Result refreshGame={refreshGame} correct={correct} questions={questions} />
      )}
    </Panel>
  );
};

export default Quiz;
