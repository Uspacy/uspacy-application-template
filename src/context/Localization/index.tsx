import React, { createContext, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from '../../i18n';
import { useUserSettingsContext } from '../UserSettings';
import { IProps } from './types';

export const LocalizationContext = createContext({});

const Provider: React.FC<IProps> = ({ children }) => {
	const { userSettings } = useUserSettingsContext();

	useEffect(() => {
		i18n.changeLanguage(userSettings?.lang);
	}, [userSettings?.lang]);

	return (
		<LocalizationContext.Provider value={{ userSettings }}>
			<I18nextProvider i18n={i18n}>{children}</I18nextProvider>
		</LocalizationContext.Provider>
	);
};

export default Provider;
