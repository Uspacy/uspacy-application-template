import React, { createContext, useContext } from 'react';

import { IProps, IUserSettingsContext } from './types';

export const UserSettingsContext = createContext({});
export const useUserSettingsContext = () => useContext<IUserSettingsContext>(UserSettingsContext);

const Provider: React.FC<IProps> = ({ children, userSettings }) => {
	return <UserSettingsContext.Provider value={{ userSettings }}>{children}</UserSettingsContext.Provider>;
};

export default Provider;
