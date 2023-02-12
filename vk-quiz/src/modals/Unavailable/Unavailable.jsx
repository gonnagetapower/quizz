import { ModalPage } from '@vkontakte/vkui';
import React from 'react';

const Unavailable = ({ id }) => {
  return (
    <ModalPage id={id}>
      <div style={{ padding: '50px' }}>
        <h1>Купить</h1>
      </div>
    </ModalPage>
  );
};

export default Unavailable;
