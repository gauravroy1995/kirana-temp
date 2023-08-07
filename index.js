/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import {LandingScreen} from './src/screens/LandingScreen';
import {NewsProvider} from './src/context/newsContext';

const FirstScreen = () => {
  return (
    <NewsProvider>
      <LandingScreen />
    </NewsProvider>
  );
};

AppRegistry.registerComponent(appName, () => FirstScreen);
