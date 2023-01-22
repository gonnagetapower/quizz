import React from 'react';

import { Group, Panel, PanelHeader } from '@vkontakte/vkui';
import {TestCard} from '../../components';

const Home = props => (
	<Panel id={props.id}>
		<PanelHeader>Главная</PanelHeader>
		<Group mode="plain" >
			{[...new Array(6)].map((_, index) =>
				<TestCard id={index} />
			)}
		</Group>
	</Panel>
);


export default Home;
