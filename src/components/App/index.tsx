import Box from '@mui/material/Box';
import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
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

export const start = (el) => {
	const root = createRoot(el);
	root.render(<App />);
};
