import Box from '@mui/material/Box';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { IUserSettings } from '../../models/userSettings';
import { IProps } from './types';

const App: React.FC<IProps> = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			App
		</Box>
	);
};

export default App;

export const start = (el: HTMLElement, settings?: IUserSettings) => {
	const root = createRoot(el);
	root.render(<App userSettings={settings} />);
};
