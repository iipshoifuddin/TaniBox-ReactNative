import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AuthLoading from './src/screens/AuthLoading';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Wishlist from './src/screens/Wishlist';
import Notification from './src/screens/Notification';
import Cart from './src/screens/Cart';
import DetailProduct from './src/screens/DetailProduct';

const HomeStack = createStackNavigator({Home: Home});
const DetailStack = createStackNavigator({
  DetailProduct: {
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
      AuthLoading: AuthLoading,
      Auth: AuthStack,
      App,
      DetailProduct: DetailStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
