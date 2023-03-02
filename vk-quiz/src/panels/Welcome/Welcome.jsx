import { useRouter } from '@happysanta/router';
import { Panel } from '@vkontakte/vkui';
import React, { useEffect } from 'react';
import { MODAL_TERMS, PAGE_MAIN } from '../../router';

import './Welcome.css';

const Welcome = ({ id }) => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      //fetch data
    }, 1000);
  }, []);

  return (
    <Panel id={id}>
      <div className="welcome-container">
        <div class="splash">
          <div class="splash_logo">Квизы</div>
          <div class="splash_svg">
            <svg width="100%" height="100%">
              <rect width="100%" height="100%" />
            </svg>
          </div>
          <div class="splash_minimize">
            <svg width="100%" height="100%">
              <rect width="100%" height="100%" />
            </svg>
          </div>
        </div>
        <div class="text">
          <p>Проверь</p>
          <p>свои знания</p>
          <button onClick={() => router.pushModal(MODAL_TERMS)}>Войти</button>
        </div>
      </div>
    </Panel>
  );
};

export default Welcome;
