import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Provider} from 'react-redux';
import {store, persistor} from './src/public/redux/store';
import {PersistGate} from 'redux-persist/es/integration/react';

import AuthLoadingScreen from './src/pages/AuthLoadingScreen';
import SignInScreen from './src/pages/SignInScreen';
import SignUpScreen from './src/pages/SignUpScreen';
import HomeScreen from './src/pages/HomeScreen';
import ProfileScreen from './src/pages/ProfileScreen';

const HomeStack = createStackNavigator({Home: HomeScreen});
const ProfileStack = createStackNavigator({Profile: ProfileScreen});
const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
});

// const RootStack = createMaterialBottomTabNavigator({
//   AuthLoading: AuthLoadingScreen,
//   App: AppStack,
//   Auth: AuthStack,
// });

const RootStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    Profile: ProfileStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-home';
        } else if (routeName === 'Profile') {
          iconName = 'ios-contact';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#009688',
      inactiveTintColor: 'gray',
    },
  },
);

const App = createAppContainer(RootStack);

const Navigation = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      App,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

export default class NavigationBase extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}
