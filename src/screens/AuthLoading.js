import React from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';

class AuthLoadingScreen extends React.Component {
  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;
