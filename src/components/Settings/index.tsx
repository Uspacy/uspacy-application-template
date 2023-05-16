import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { api } from '../../helpers/api';
import { ISettings } from '../../models/settings';
import { IUserSettings } from '../../models/userSettings';
import { IProps } from './types';

const Settings: React.FC<IProps> = () => {
	const [settings, setSettings] = useState<ISettings>();

	useEffect(() => {
		(async () => {
			api.get<ISettings>('/settings')
				.then((response) => {
					setSettings(response.data);
				})
				.catch((err) => {
					// eslint-disable-next-line no-console
					console.log(err);
				});
		})();
	}, []);

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		api.post('/settings', settings).catch((err) => {
			// eslint-disable-next-line no-console
			console.log(err);
		});
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSettings((state) => ({
			...state,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					width: 500,
				}}
				component={'form'}
				onSubmit={handleSubmit}
			>
				<TextField
					fullWidth
					required
					value={settings?.apiKey}
					name="apiKey"
					variant="outlined"
					label="Api key"
					sx={{ mb: 2 }}
					onChange={handleChange}
				/>
				<Button variant="outlined" type="submit">
					Save
				</Button>
			</Box>
		</Box>
	);
};

export default Settings;

export const start = (el: HTMLElement, settings?: IUserSettings) => {
	const root = createRoot(el);
	root.render(<Settings userSettings={settings} />);
};
