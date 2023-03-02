import { useRouter } from '@happysanta/router';
import { Card, Tappable } from '@vkontakte/vkui';
import React from 'react';
import { PAGE_CATEGORY } from '../../router';

import './CategoryCard.css';

const CategoryCard = ({ id, category, img, descr, background }) => {
  const router = useRouter();
  return (
    <Card style={{borderRadius: '30px'}} mode="shadow" onClick={() => router.pushPage(PAGE_CATEGORY, { id: id })}>
      <Tappable>
        <div className="category-card" style={{background: background}}>
        <div class="flare"></div>
          <div className='img-wrapper'>
            <img src={img} />
          </div>
          <div className='category-text'>
            <h1 className="category-card__title">{category}</h1>
            <p className="category-card__descr">
              {descr}
            </p>
          </div>
        </div>
      </Tappable>
    </Card>
  );
};

export default CategoryCard;
