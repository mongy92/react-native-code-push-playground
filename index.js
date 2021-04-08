/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import codePush from 'react-native-code-push';

const codePushsKeys = Platform.select({
  ios: {
    STATGING: '9oU6z9xic4FiRtyI--ZZvpwlNGLkqmQhJGnEcV',
    PRODUCTION: 'SH08OCFzA-mUGoFPBy0CScT9dbQof8z88R9rm',
  },
  android: {
    STATGING: 'gesXwoHb_ktA06gROecBeSxGfmW7tM01vkj81',
    PRODUCTION: 'rQDKzQWJLD1Vbh0vTJwCPdoYBQgSjLxWg7oFi',
  },
});

const isBetaUser = false;

const MyApp = codePush({
  deploymentKey: isBetaUser ? codePushsKeys.STATGING : codePushsKeys.PRODUCTION,
})(App);

AppRegistry.registerComponent(appName, () => MyApp);
