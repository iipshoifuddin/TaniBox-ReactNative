import React from 'react';
import {Root} from 'native-base';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Provider} from 'react-redux';
import {store, persistor} from './src/public/redux/store';
import {PersistGate} from 'redux-persist/es/integration/react';

// Buyer Screens
import AuthLoading from './src/screens/auth/AuthLoading';
import SignIn from './src/screens/auth/SignIn';
import SignUp from './src/screens/auth/SignUp';
import ForgotPassword from './src/screens/auth/ForgotPassword';
import ResetPassword from './src/screens/auth/ResetPassword';
import Home from './src/screens/buyer/Home';
import Profile from './src/screens/buyer/Profile';
import EditProfileBuyer from './src/screens/buyer/EditProfile';
import Wishlist from './src/screens/buyer/Wishlist/Wishlist';
import Notification from './src/screens/buyer/Notification/Notifications';
import Cart from './src/screens/buyer/Cart';
import CheckOut from './src/screens/buyer/CheckOut';
import SingleNotification from './src/screens/buyer/Notification/SingleNotification';

// Product Screens
import DetailProduct from './src/screens/product/DetailProduct';
import UploadProduct from './src/screens/product/UploadProduct';

// Seller Screens
import HomeSeller from './src/screens/seller/Home';
import NotificationSeller from './src/screens/seller/Notification';
import SellerAccount from './src/screens/seller/Account';
import SellerProfile from './src/screens/seller/Profile';
import SellerAddress from './src/screens/seller/Address';
import ChangeSellerPassword from './src/screens/seller/ChangePassword';

import {getDataStorage} from './src/helpers/script';

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
  EachProduct: {
    screen: EachProduct,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const SellerStack = createStackNavigator({
  HomeSeller: {
    screen: HomeSeller,
    navigationOption: {
      headerShown: false,
    },
  },
});

const WishlistStack = createStackNavigator({Wishlist: Wishlist});
const CartStack = createStackNavigator({Cart, CheckOut});
const NotificationStack = createStackNavigator({
  Notification: {
    screen: Notification,
    navigationOptions: {
      headerShown: false,
    },
  },
  SingleNotification,
});
const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerShown: false,
    },
  },
  EditProfileBuyer: EditProfileBuyer,
});
const AuthStack = createStackNavigator({
  SignIn,
  SignUp,
  ForgotPassword,
  ResetPassword,
});
const NotificationStackSeller = createStackNavigator({
  Notification: NotificationSeller,
});
const ProfileStackSeller = createStackNavigator({
  Account: SellerAccount,
  Profile: SellerProfile,
  Address: SellerAddress,
  Upload: UploadProduct,
  ChangePassword: ChangeSellerPassword,
});

const sellerBottom = {
  Home: SellerStack,
  Notification: NotificationStackSeller,
  Profile: ProfileStackSeller,
};

const buyerBottom = {
  Home: HomeStack,
  Wishlist: WishlistStack,
  Cart: CartStack,
  Notification: NotificationStack,
  Profile: ProfileStack,
};

let role = getDataStorage('role', value => (role = value));
const useBottom = role === 'buyer' ? buyerBottom : sellerBottom;

const RootStackBuyer = createBottomTabNavigator(buyerBottom, {
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
});
const RootStackSeller = createBottomTabNavigator(sellerBottom, {
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
});

const AppBuyer = createAppContainer(RootStackBuyer);
const AppSeller = createAppContainer(RootStackSeller);

const Navigation = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      Auth: AuthStack,
      AppBuyer,
      AppSeller,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

export default class NavigationBase extends React.Component {
  render() {
    return (
      <Root>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navigation />
          </PersistGate>
        </Provider>
      </Root>
    );
  }
}
