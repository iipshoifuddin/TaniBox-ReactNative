import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AuthLoading from './src/screens/auth/AuthLoading';
import SignIn from './src/screens/auth/SignIn';
import SignUp from './src/screens/auth/SignUp';
import Home from './src/screens/buyer/Home';
import Profile from './src/screens/buyer/Profile';
import Wishlist from './src/screens/buyer/Wishlist';
import Notification from './src/screens/buyer/Notification';
import Cart from './src/screens/buyer/Cart';
import DetailProduct from './src/screens/product/DetailProduct';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  Detail: {
    screen: DetailProduct,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const WishlistStack = createStackNavigator({Wishlist: Wishlist});
const CartStack = createStackNavigator({Cart: Cart});
const NotificationStack = createStackNavigator({
  Notification: Notification,
});
const ProfileStack = createStackNavigator({Profile: Profile});
const AuthStack = createStackNavigator({
  SignIn: SignIn,
  SignUp: SignUp,
});

const RootStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    Wishlist: WishlistStack,
    Cart: CartStack,
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
        } else if (routeName === 'Cart') {
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
      AuthLoading: AuthLoading,
      Auth: AuthStack,
      App,
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);
