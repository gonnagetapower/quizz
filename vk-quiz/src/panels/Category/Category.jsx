import React from 'react';

import { useRouter } from '@happysanta/router';

import {
  CardGrid,
  Group,
  Panel,
  PanelHeader,
  PanelHeaderButton,
  PanelHeaderBack,
  Title,
} from '@vkontakte/vkui';
import { Icon28ChevronBack } from '@vkontakte/icons';
import { QuizCard } from '../../components';

const Category = ({ id }) => {
  const router = useRouter();
  return (
    <Panel id={id}>
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
