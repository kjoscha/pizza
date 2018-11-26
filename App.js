import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator, createAppContainer, HeaderBackButton } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from './HomeScreen';
import PublishScreen from './PublishScreen';
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
    Publish: {
      screen: PublishScreen,
      navigationOptions: {
        title: 'THE PIZZA CALCULATOR',
        headerTitleStyle: { color: 'lightgrey' },
      }
    },
    List: {
      screen: ListScreen,
      navigationOptions: ({navigation}) => ({
        title: 'THE PIZZA CALCULATOR',
        headerTitleStyle: { color: 'lightgrey' },
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
    return <AppContainer />;
  }
}
