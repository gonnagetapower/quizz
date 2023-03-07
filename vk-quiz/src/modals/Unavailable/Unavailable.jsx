import { useLocation } from '@happysanta/router';
import { ModalCard, ModalPage } from '@vkontakte/vkui';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Button } from '../../components';

const Unavailable = ({ id, content }) => {
  const location = useLocation();

  useEffect(() => {
    const fetchQuizes = async () => {
      const response = await fetch('./data.json');
      const responseJson = await response.json();
      console.log(responseJson);
    };
    fetchQuizes();
  }, []);

  return (
    <ModalCard id={id}>
      <div style={{ padding: '50px', display: 'flex', justifyContent: 'center' }}>
        <Button title={content} />
        {console.log(location)}
      </div>
    </ModalCard>
  );
};

export default Unavailable;
