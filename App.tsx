import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {NewsScreen} from './src/screens';

const AppNavigator = createStackNavigator(
  {
    News: NewsScreen,
  },
  {
    initialRouteName: 'News',
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;
