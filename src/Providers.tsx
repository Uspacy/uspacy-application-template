import React, { ReactNode } from 'react';

import LocalizationProvider from './context/Localization';
import UserSettingsProvider from './context/UserSettings';
import { IUserSettings } from './models/userSettings';

const Providers: React.FC<{ children: ReactNode; userSettings?: IUserSettings }> = ({ children, userSettings }) => {
	return (
		<UserSettingsProvider userSettings={userSettings}>
			<LocalizationProvider>{children}</LocalizationProvider>
		</UserSettingsProvider>
	);
};

export default Providers;
