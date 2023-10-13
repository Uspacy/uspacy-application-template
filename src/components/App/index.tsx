import Box from '@mui/material/Box';
import { useAppSelector } from '@uspacy/store';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Providers from '../../Providers';
import { IProps } from './types';

const App: React.FC = () => {
	const { t } = useTranslation();
	const profile = useAppSelector((state) => state.profile.data);

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				color: (theme) => theme.palette.primary.main,
			}}
		>
			{t('helloWorld')} | {profile?.firstName} {profile?.lastName}
		</Box>
	);
};

const AppWrap: React.FC<IProps> = ({ userSettings }) => {
	return (
		<Providers userSettings={userSettings}>
			<App />
		</Providers>
	);
};

export default AppWrap;
