import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol, View } from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';

import { Navigation } from './components/';

import { Home, About, TestPage } from './panels/'

import './Normalize.css'

const App = () => {
	return (
		<ConfigProvider >
			<AdaptivityProvider>
				<AppRoot>
					<BrowserRouter>
						<SplitLayout>
							<SplitCol>
								<Routes>
									<Route path="/" element={<Home />} />
									<Route path="/about" element={<About />} />
									<Route path="/test/:id" element={<TestPage />} />
									<Route path="*" element={<Home />} />
								</Routes>
								<Navigation />
							</SplitCol>
						</SplitLayout>
					</BrowserRouter>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
