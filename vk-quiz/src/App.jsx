import React, { useState, useEffect } from 'react';

import bridge from '@vkontakte/vk-bridge';
import axios from 'axios';

import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol,
  View,
  usePlatform,
  useAppearance,
  Root,
  useAdaptivity,
  ScreenSpinner,
  ModalRoot,
} from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';

import { Navigation } from './components/';

import { Home, About, Quiz, Category } from './panels/';

// import './Normalize.css';
import './App.css';

import {
  appRoutes,
  MODAL_UNAVAILABLE,
  MODAL_TERMS,
  PANEL_CATEGORY,
  PANEL_MAIN,
  PANEL_QUIZ,
  PANEL_WELCOME,
  VIEW_MAIN,
} from './router';
import { useLocation, useRouter } from '@happysanta/router';
import Welcome from './panels/Welcome/Welcome';
import Terms from './modals/Terms';
import Unavailable from './modals/Unavailable/Unavailable';
import http from './api';

const App = () => {
  const platform = usePlatform();
  const appearance = useAppearance();
  const location = useLocation();
  const { viewWidth } = useAdaptivity();

  const [data, setData] = useState('');

  const [popout, setPopout] = useState(null);

  const router = useRouter();

    bridge.send('VKWebAppGetLaunchParams')
      .then((data) => {
        console.log('Данные получены')
        if (data.vk_app_id) {
          http.get('https://quizz-mxmc-git-master-gonnagetapower.vercel.app/api/user').then((data) => console.log(data))
        }
        else {
          console.log('Не получилось получить данные о пользователе')
        }
      })
      .catch((error) => {
        // Ошибка
        console.log(error);
      });

  // Тема и платформа

  const modal = (
    <ModalRoot activeModal={location.getModalId()} onClose={() => router.popPage()}>
      <Terms id={MODAL_TERMS} />
      <Unavailable id={MODAL_UNAVAILABLE} content="привет" />
    </ModalRoot>
  );

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot scroll="global">
          <div className='app'>
            <SplitLayout popout={popout} modal={modal}>
              <SplitCol>
                <View
                  id={VIEW_MAIN}
                  activePanel={location.getViewActivePanel(VIEW_MAIN)}
                  data={data}>
                  <Welcome id={PANEL_WELCOME} />
                  <Home id={PANEL_MAIN} platform={platform} data={data} />
                  <Category id={PANEL_CATEGORY} panel={PANEL_CATEGORY} data={data} />
                  <Quiz id={PANEL_QUIZ} />
                </View>
              </SplitCol>
            </SplitLayout>
          </div>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
