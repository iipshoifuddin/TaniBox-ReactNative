import React, {Component} from 'react';
import {Button, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import OneSignal from 'react-native-onesignal';
import {ONESIGNAL_API_KEY} from 'react-native-dotenv';

class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  render() {
    return (
      <View>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Profile');
  };

  _signOutAsync = async () => {
    // await OneSignal.setSubscription(false);
    await AsyncStorage.removeItem('token');
    this.props.navigation.navigate('Auth');
  };
}

export default ProfileScreen;
