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
} from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';

import { Navigation } from './components/';

import { Home, About, Quiz } from './panels/';

import './Normalize.css';
import { appRoutes, PANEL_MAIN, PANEL_QUIZ, VIEW_MAIN } from './router';
import { useLocation } from '@happysanta/router';

const App = () => {
  const platform = usePlatform();
  const appearance = useAppearance();
  const location = useLocation();

  // Тема и платформа

  console.log('Platform', platform);
  console.log('Appearance', appearance);

  return (
    <ConfigProvider platform={platform} appearance={appearance}>
      <AdaptivityProvider>
        <AppRoot>
          <BrowserRouter>
            <SplitLayout>
              <SplitCol>
                {/* <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/test/:id" element={<TestPage />} />
                  <Route path="*" element={<Home />} />
                </Routes> */}
                <Root activeView={location.getViewId()}>
                  <View
                    id={VIEW_MAIN}
                    activePanel={location.getViewActivePanel(VIEW_MAIN)}>
                    <Home id={PANEL_MAIN} />
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
