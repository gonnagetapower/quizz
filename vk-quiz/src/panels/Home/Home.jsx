import React from 'react';

import { Group, Panel, PanelHeader } from '@vkontakte/vkui';
import { QuizCard } from '../../components';

const Home = ({ id }) => (
  <Panel id={id}>
    <PanelHeader>Главная</PanelHeader>
    <Group mode="plain">
      {[...new Array(6)].map((_, index) => (
        <QuizCard key={index} id={index} />
      ))}
    </Group>
  </Panel>
);

export default Home;
