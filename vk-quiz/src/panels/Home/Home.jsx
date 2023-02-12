import React from 'react';

import { CardGrid, Group, Panel, PanelHeader } from '@vkontakte/vkui';
import { CategoryCard, Navigation, QuizCard } from '../../components';

import './Home.css';

const Home = ({ id }) => (
  <Panel id={id}>
    <PanelHeader>Категории</PanelHeader>
    <Group mode="plain">
      <CardGrid size="l">
        {[...new Array(15)].map((_, index) => (
          <CategoryCard key={index} id={index} />
        ))}
      </CardGrid>
    </Group>
    <Navigation />
  </Panel>
);

export default Home;
