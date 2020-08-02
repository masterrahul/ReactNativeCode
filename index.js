/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import ReduxWrapper from './src/ReduxWrapper'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ReduxWrapper);
