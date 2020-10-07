/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './Screens/Login';
import Signup from './Screens/SignUp';

AppRegistry.registerComponent(appName, () => Login);
