import React, {Component} from 'react';
import {Button, View} from 'react-native';

class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View>
        <Button title="Sign In!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    // await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('SignIn');
  };
}

export default SignUpScreen;
