import React from 'react';

import { CardGrid, Group, Panel, PanelHeader } from '@vkontakte/vkui';
import TestCard from '../../components/TestCard/TestCard';

const Home = props => (
	<Panel id={props.id}>
		<PanelHeader>Главная</PanelHeader>
		<Group mode="plain" >
				<TestCard />
				<TestCard />
				<TestCard />
				<TestCard />
				<TestCard />
				<TestCard />
		</Group>
	</Panel>
);


export default Home;
