import React, {Component} from 'react';
import {Button, View} from 'react-native';
import {DARK_GREEN} from 'react-native-dotenv';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  render() {
    return (
      <View>
        <Button title={DARK_GREEN} onPress={this._showMoreApp} />
        <View style={{marginBottom: 30}} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Profile');
  };

  _signOutAsync = async () => {
    // await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

export default HomeScreen;
