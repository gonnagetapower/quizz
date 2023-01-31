import React, { useState } from 'react';

import { Icon24Cancel } from '@vkontakte/icons';

import { Tabbar, TabbarItem } from '@vkontakte/vkui';
import { useNavigate } from 'react-router';
import { useRouter } from '@happysanta/router';
import { PAGE_MAIN } from '../../router';

const Navigation = () => {
  const router = useRouter();

  return (
    <div>
      <Tabbar>
        <TabbarItem
          onClick={() => router.pushPage(PAGE_MAIN)}
          data-story="main"
          text="Главная">
          {/* <Icon24Cancel /> */}
        </TabbarItem>
        <TabbarItem
          onClick={() => navigate('/about')}
          data-story="about"
          text="О приложении"></TabbarItem>
      </Tabbar>
    </div>
  );
};

export default Navigation;
