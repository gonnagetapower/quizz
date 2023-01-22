import React, { useState } from 'react';

import { Icon24Cancel } from '@vkontakte/icons';

import { Tabbar, TabbarItem } from '@vkontakte/vkui';
import { useNavigate } from 'react-router';

const Navigation = () => {
  
   const navigate = useNavigate()

  return (
    <div>
      <Tabbar>
        <TabbarItem
          onClick={() => navigate('/')}
          data-story="main"
          text="Главная">
          {/* <Icon24Cancel /> */}
        </TabbarItem>
        <TabbarItem
          onClick={() => navigate('/about')}
          data-story="about"
          text="О приложении">
        </TabbarItem>
      </Tabbar>
    </div>
  );
};

export default Navigation;