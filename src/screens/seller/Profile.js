import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

export default class Profile extends Component {
  _signOutAsync = async () => {
    await AsyncStorage.removeItem('token');
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View>
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }
}
