import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

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
} from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';

import { Navigation } from './components/';

import { Home, About, Quiz, Category } from './panels/';

import './Normalize.css';
import { appRoutes, PANEL_CATEGORY, PANEL_MAIN, PANEL_QUIZ, VIEW_MAIN } from './router';
import { useLocation } from '@happysanta/router';

const App = () => {
  const platform = usePlatform();
  const appearance = useAppearance();
  const location = useLocation();
  const { viewWidth } = useAdaptivity();

  // Тема и платформа

  console.log('Platform', platform);
  console.log('Appearance', appearance);
  console.log('width', viewWidth);

  return (
    <ConfigProvider platform={platform} appearance={appearance}>
      <AdaptivityProvider>
        <AppRoot>
          <BrowserRouter>
            <SplitLayout>
              <SplitCol>
                <Root activeView={location.getViewId()}>
                  <View
                    id={VIEW_MAIN}
                    activePanel={location.getViewActivePanel(VIEW_MAIN)}>
                    <Home id={PANEL_MAIN} platform={platform} />
                    <Category id={PANEL_CATEGORY} />
                    <Quiz id={PANEL_QUIZ} />
                  </View>
                </Root>
                <Navigation />
              </SplitCol>
            </SplitLayout>
          </BrowserRouter>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
