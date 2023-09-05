import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { api } from '../../helpers/api';
import { ISettings } from '../../models/settings';
import Providers from '../../Providers';
import { IProps } from './types';

const Settings: React.FC = () => {
	const [settings, setSettings] = useState<ISettings>();
	const { t } = useTranslation('settings');

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
				<Typography variant="h4" sx={{ mb: 2 }}>
					{t('title')}
				</Typography>
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
					{t('save')}
				</Button>
			</Box>
		</Box>
	);
};

const SettingsWrap: React.FC<IProps> = ({ userSettings }) => (
	<Providers userSettings={userSettings}>
		<Settings />
	</Providers>
);

export default SettingsWrap;
