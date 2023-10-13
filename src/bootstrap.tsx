import { StoreProvider } from '@uspacy/store';
import FetchCommonData from '@uspacy/store/lib/components/FetchCommonData';
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';
import { login } from './helpers/preauth';

(async () => {
	await login(process.env.PORTAL_AUTH_EMAIL, process.env.PORTAL_AUTH_PASSWORD);
	const container = document.getElementById('root');
	const root = createRoot(container);
	root.render(
		<StoreProvider>
			<FetchCommonData />
			<App />
		</StoreProvider>,
	);
})();
