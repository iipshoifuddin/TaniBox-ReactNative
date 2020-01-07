import React, {Component} from 'react';
import {Button, View} from 'react-native';

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View>
        <Button title="Sign Up!" onPress={this._signUpAsync} />
        <View style={{marginBottom: 30}} />
        <Button title="Go To App" onPress={this._goToAppAsync} />
      </View>
    );
  }

  _goToAppAsync = async () => {
    // await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  _signUpAsync = async () => {
    // await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('SignUp');
  };
}

export default SignInScreen;
