import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { useParams, useRouter } from '@happysanta/router';

import {
  CardGrid,
  Group,
  Panel,
  PanelHeader,
  PanelHeaderButton,
  PanelHeaderBack,
  Title,
  ScreenSpinner,
} from '@vkontakte/vkui';
import { Icon28ChevronBack } from '@vkontakte/icons';
import { QuizCard } from '../../components';

import './Category.css'

const Category = ({ panel }) => {
  const router = useRouter();
  const [quizes, setQuizes] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchQuizes = async () => {
      const response = await fetch('./data.json');
      const responseJson = await response.json();
      setQuizes(responseJson[id]);
    };
    setTimeout(() => {
      fetchQuizes();
    }, 2000);
  }, []);

  if (quizes.length < 1) {
    return <ScreenSpinner></ScreenSpinner>;
  }
  return (
    <Panel id={panel}>
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
        <Title style={{ color: "#fff" }}>Категория : {quizes.category}</Title>
      </PanelHeader>
      <div className='quiz-container'>
        <Group mode="plain">
          {!quizes.quizes ? (
            <>
              <h1>Квизов еще не придумано</h1>
            </>
          ) : (
            <>
              {quizes.quizes.map((quiz, index) => (
                <QuizCard bg={quizes.background} key={index} id={index} quiz={quiz[index + 1]} />
              ))}
            </>
          )}
        </Group>
      </div>
    </Panel>
  );
};

export default Category;
