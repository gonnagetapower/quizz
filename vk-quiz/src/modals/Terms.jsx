import React from 'react';
import { ModalPage } from '@vkontakte/vkui';
import { useRouter } from '@happysanta/router';
import { PAGE_MAIN } from './../router';

import './Terms.css';
import { Button } from '../components';

const Terms = ({ id }) => {
  const router = useRouter();
  return (
    <ModalPage id={id} settlingHeight={100}>
      <div>
        <div className="modal-container">
          <div className="modal">
            <div>
              <h1 className="modal__title">Условия пользования</h1>
              <p className="modal__descr modal__descr-title--first">
                Данное приложение создано для прохождения различных тестов
              </p>
              <p className="modal__descr modal__descr-title">
                Пожалуйста, ознакомьтесь с полным текстом пользовательского соглашения на
                отдельной странице, или в этом окне
              </p>
            </div>
            <p className="modal__descr">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint quas suscipit libero vel ipsum, id, doloribus nihil assumenda natus deserunt, alias eligendi! Rem dolore fugiat quam vel reprehenderit dignissimos! 
            </p>
          </div>
          <Button
            handleClick={() => router.pushPage(PAGE_MAIN)}
            title="Принять правила"/>
        </div>
      </div>
    </ModalPage>
  );
};

export default Terms;
