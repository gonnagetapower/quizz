import { useRouter } from '@happysanta/router';
import { Card, Tappable } from '@vkontakte/vkui';
import React from 'react';
import { PAGE_CATEGORY } from '../../router';

import './CategoryCard.css';

const CategoryCard = ({ id }) => {
  const router = useRouter();
  return (
    <Card mode="shadow" onClick={() => router.pushPage(PAGE_CATEGORY, { id: id })}>
      <Tappable>
        <div className="category-card">
          <h1 className="category-card__title">Психологический</h1>
          <p className="category-card__descr">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores cupiditate
            tempore atque est hic dolor sapiente. Ipsam totam dolore iure ducimus, alias
            corrupti voluptate nulla ullam aliquid quas, animi libero!
          </p>
        </div>
      </Tappable>
    </Card>
  );
};

export default CategoryCard;
