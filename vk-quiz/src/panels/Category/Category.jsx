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

const Category = ({ panel }) => {
  const router = useRouter();
  const [quizes, setQuizes] = useState([]);
  const { id } = useParams();

  // useEffect(() => {
  //   const fetchQuizes = async () => {
  //     const data = await axios.get('/utils/categories');
  //     setQuizes(data);
  //   };
  //   fetchQuizes();
  // }, []);

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
            <Icon28ChevronBack fill="black" />
          </PanelHeaderButton>
        }
        before={<PanelHeaderBack color="black" />}>
        <Title>Квизы</Title>
      </PanelHeader>
      <Group mode="plain">
        <CardGrid size="m">
          {[...new Array(15)].map((_, index) => (
            <QuizCard key={index} id={index} />
          ))}
        </CardGrid>
      </Group>
    </Panel>
  );
};

export default Category;
