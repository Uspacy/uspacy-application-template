import React from 'react';

import { IUserSettings } from '../../models/userSettings';

export interface IProps {
	children?: React.ReactNode;
	userSettings?: IUserSettings;
}

export interface IUserSettingsContext {
	userSettings?: IUserSettings;
}
