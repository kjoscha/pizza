import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator, createAppContainer, HeaderBackButton } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from './components/HomeScreen';
import PublishScreen from './components/PublishScreen';
import ListScreen from './components/ListScreen';

import { Provider } from "react-redux";
import store from "./store";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'THE PIZZA CALCULATOR',
      }
    },
    Publish: {
      screen: PublishScreen,
      navigationOptions: {
        title: 'PUBLISH PIZZERIA',
      }
    },
    List: {
      screen: ListScreen,
      navigationOptions: ({navigation}) => ({
        title: 'TOP 100',
        headerLeft: <HeaderBackButton onPress={ () => { navigation.navigate('Home') } } />
      })
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <Provider store={store}>
      <AppContainer />
    </Provider>
  }
}
