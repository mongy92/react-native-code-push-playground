/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import codePush from 'react-native-code-push';

const MyApp = codePush(App);

AppRegistry.registerComponent(appName, () => MyApp);
