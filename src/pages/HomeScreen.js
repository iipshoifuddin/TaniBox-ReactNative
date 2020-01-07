import React, { Component } from 'react'
import { Button, View } from 'react-native'

class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome to the app!',
    };
  
    render() {
      return (
        <View>
          <Button title="Show me more of the app" onPress={this._showMoreApp} />
          <View style={{marginBottom: 30}}></View>
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
  
  export default (HomeScreen)
