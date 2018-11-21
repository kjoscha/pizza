import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from './HomeScreen';
import ListScreen from './ListScreen';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
          title: 'THE PIZZA CALCULATOR',
          headerTitleStyle: { color: 'lightgrey' },
      }
    },
    List: {
      screen: ListScreen,
      navigationOptions: {
          title: 'THE PIZZA CALCULATOR',
          headerTitleStyle: { color: 'lightgrey' },
      }
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
