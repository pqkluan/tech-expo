import React from 'react';
import type { FC } from 'react';

import { RootStackNavigator } from './src/navigation/RootStackNavigator';
import { NavigationProvider } from './src/navigation/NavigationProvider';

const App: FC = () => {
	return (
		<NavigationProvider>
			<RootStackNavigator />
		</NavigationProvider>
	);
};

export default App;