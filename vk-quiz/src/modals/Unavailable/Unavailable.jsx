import { ModalCard, ModalPage } from '@vkontakte/vkui';
import React from 'react';
import { Button } from '../../components';

const Unavailable = ({ id, content }) => {
  return (
    <ModalCard id={id}>
      <div style={{ padding: '50px', display: 'flex', justifyContent: 'center'}}>
        <Button title={content}/>
      </div>
    </ModalCard>
  );
};

export default Unavailable;
