import React from 'react';

import { CardGrid, Group, Panel, PanelHeader } from '@vkontakte/vkui';
import { CategoryCard, QuizCard } from '../../components';

const Category = ({ id }) => {
  return (
    <Panel id={id}>
      <PanelHeader>Категории</PanelHeader>
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
