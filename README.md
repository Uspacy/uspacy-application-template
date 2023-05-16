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

This template contains the basic version of the Uspacy marketplace application. The main configuration file is `webpack.config.js`. To specify the modules that need to be rendered in the Uspacy interface, you need to list them in the exposes field. Specify the name of your application in Latin characters in the appName constant. Develop the frontend part of your application and configure it accordingly. The modules should export a function called start that will render your component into the element passed as an argument to the function.

`./app` is the module that will be displayed in the Uspacy interface at the specified location.
`./setting` is the module that will be displayed on the marketplace page in the application settings section, where users add configurations required for your application to work correctly.

After the application is ready for publication, you need to ensure that it builds successfully and create an archive containing all the source code of your application. Then, send an email to [support@uspacy.com](support@uspacy.com) to request the publication of your application. In the future, a form for application publication will be created within the Uspacy interface under the marketplace section.

Documentation on the [https://webpack.js.org/plugins/module-federation-plugin/](ModuleFederationPlugin) can be found at the provided link.
