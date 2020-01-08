import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AuthLoadingScreen from './src/pages/AuthLoadingScreen';
import SignInScreen from './src/pages/SignInScreen';
import SignUpScreen from './src/pages/SignUpScreen';
import HomeScreen from './src/pages/HomeScreen';
import ProfileScreen from './src/pages/ProfileScreen';
import WishlistScreen from './src/pages/WishlistScreen';
import NotificationScreen from './src/pages/NotificationScreen';
import CartScreen from './src/pages/CartScreen';

const HomeStack = createStackNavigator({Home: HomeScreen});
const WishlistStack = createStackNavigator({Wishlist: WishlistScreen});
const CartStack = createStackNavigator({Cart: CartScreen});
const NotificationStack = createStackNavigator({
  Notification: NotificationScreen,
});
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
    wishlist: WishlistStack,
    cart: CartStack,
    Notification: NotificationStack,
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
        } else if (routeName === 'Wishlist') {
          iconName = 'ios-heart';
        } else if (routeName === 'cart') {
          iconName = 'ios-cart';
        } else if (routeName === 'Notification') {
          iconName = 'ios-notifications';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#68CAA2',
      inactiveTintColor: 'gray',
    },
  },
);

const App = createAppContainer(RootStack);

export default createAppContainer(
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
