import { useRouter } from '@happysanta/router';
import { Card, Tappable } from '@vkontakte/vkui';
import React from 'react';
import { PAGE_CATEGORY } from '../../router';

import './CategoryCard.css';

const CategoryCard = ({ id, category }) => {
  const router = useRouter();
  return (
    <Card mode="shadow" onClick={() => router.pushPage(PAGE_CATEGORY, { id: id })}>
      <Tappable>
        <div className="category-card">
          <h1 className="category-card__title">{category}</h1>
          <p className="category-card__descr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, animi. Hic
            magnam assumenda harum vitae neque perspiciatis dolorem eos modi fuga impedit
            qui delectus consequatur vel, facilis ex ipsum? Nulla?
          </p>
        </div>
      </Tappable>
    </Card>
  );
};

export default CategoryCard;
