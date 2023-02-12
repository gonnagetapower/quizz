import React, { useState, useEffect } from 'react';

import bridge from '@vkontakte/vk-bridge';

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

const App = () => {
  const platform = usePlatform();
  const appearance = useAppearance();
  const location = useLocation();
  const { viewWidth } = useAdaptivity();

  const [data, setData] = useState('');

  const [popout, setPopout] = useState(null);

  const router = useRouter();

  // Тема и платформа

  useEffect(() => {
    bridge
      .send('VKWebAppInit')
      .then((res) => {
        if (res.result) {
          console.log('Success', res);
        } else {
          console.log('Eroor');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('./data.json');
  //     const responseJson = await response.json();
  //     setData(responseJson);
  //   };
  //   setTimeout(() => {
  //     fetchData();
  //   }, 3000);
  // }, []);

  console.log(data);

  console.log('Platform', platform);
  console.log('Appearance', appearance);
  console.log('width', viewWidth);

  // if (!data) {
  //   return <ScreenSpinner></ScreenSpinner>;
  // }

  const modal = (
    <ModalRoot activeModal={location.getModalId()} onClose={() => router.popPage()}>
      <Terms id={MODAL_TERMS} />
    </ModalRoot>
  );

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot scroll="global">
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
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
