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
        title: 'DIE FRITTEN-APP',
      }
    },
    Publish: {
      screen: PublishScreen,
      navigationOptions: {
        title: 'FRITTEN HINZUFÜGEN',
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
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'darkred',
      },
      headerTintColor: 'white',
    },
  },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <Provider store={store}>
      <AppContainer />
    </Provider>
  }
}
