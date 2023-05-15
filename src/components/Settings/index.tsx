import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from 'react';
import { createRoot } from 'react-dom/client';

const Settings = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<TextField placeholder="Api key" />
		</Box>
	);
};

export default Settings;

export const start = (el) => {
	const root = createRoot(el);
	root.render(<Settings />);
};
