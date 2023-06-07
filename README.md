# Application boilerplate for Uspacy marketplace

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `dist` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

Your app is ready to be deployed!

This template contains the basic version of the Uspacy marketplace application. The main configuration file is `webpack.config.js`. To specify the modules that need to be rendered in the Uspacy interface, you need to list them in the exposes field. Specify the name of your application in Latin characters in the `appName` constant. Develop the frontend part of your application and configure it accordingly. Modules should export a default component that will be rendered on the Uspacy portal.

### Example

```typescript
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { IUserSettings } from 'models/settings';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { IProps } from './types';

const Settings: React.FC<IProps> = () => {
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
```

You need to create a `.env` file and add the necessary environment variables as specified in the `.env.template` file. The template file contains basic variables required for working with this template. You can add any additional variables required for your application to function properly.

`./app` is the module that will be displayed in the Uspacy interface at the specified location.<br />
`./settings` is the module that will be displayed on the marketplace page in the application settings section, where users add configurations required for your application to work correctly.

After the application is ready for publication, you need to ensure that it builds successfully and create an archive containing all the source code of your application. Then, send an email to [support@uspacy.com](support@uspacy.com) to request the publication of your application. In the future, a form for application publication will be created within the Uspacy interface under the marketplace section.

Documentation on the [https://webpack.js.org/plugins/module-federation-plugin/](ModuleFederationPlugin) can be found at the provided link.
