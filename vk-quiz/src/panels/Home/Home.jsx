import React, { useEffect, useState } from 'react';

import { CardGrid, Group, Panel, PanelHeader, ScreenSpinner } from '@vkontakte/vkui';
import { CategoryCard, Navigation, QuizCard } from '../../components';

import './Home.css';

const Home = ({ id }) => {
  const [categories, setCategories] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('./data.json');
      const responseJson = await response.json();
      setCategories(responseJson);
    };
    setTimeout(() => {
      fetchCategories();
    }, 2000);
  }, []);

  if (!categories) {
    return <ScreenSpinner></ScreenSpinner>;
  }

  console.log(categories);

  return (
    <Panel id={id}>
      <PanelHeader>Категории</PanelHeader>
      <Group mode="plain">
        <CardGrid size="l">
          {/* {[...new Array(15)].map((_, index) => (
            <CategoryCard key={index} id={index} />
          ))} */}
          {categories.map((category, index) => (
            <CategoryCard id={index} category={category.category}  img={category.img} descr={category.descr}/>
          ))}
        </CardGrid>
      </Group>
      <Navigation />
    </Panel>
  );
};
export default Home;
