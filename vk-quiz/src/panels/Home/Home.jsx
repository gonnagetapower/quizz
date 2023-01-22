import React from 'react';

import { Group, Panel, PanelHeader } from '@vkontakte/vkui';
import {TestCard} from '../../components';

const Home = () => (
	<Panel id={'home'}>
		<PanelHeader>Главная</PanelHeader>
		<Group mode="plain" >
			{[...new Array(6)].map((_, index) =>
				<TestCard key={index} id={index} />
			)}
		</Group>
	</Panel>
);


export default Home;
