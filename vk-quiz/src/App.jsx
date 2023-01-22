import React, { useState, useEffect } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'

import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home/Home.jsx';
import About from './panels/About/About.jsx';
import Navigation from './components/Navigation/Navigation.jsx';

const App = () => {
	return (
		<ConfigProvider >
			<AdaptivityProvider>
				<AppRoot>
					<BrowserRouter>
					<SplitLayout>
						<SplitCol>
							<Routes>
								<Route path="/" element={<Home />}/>
								<Route path="/about" element={<About />}/>
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
