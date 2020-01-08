import React from 'react';
import {View, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {GREEN} from 'react-native-dotenv';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    // this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    this.props.navigation.navigate('Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.viewStyles}>
        <Image
          source={require('../public/images/TaniBoxLogo.png')}
          style={[styles.box]}
          resizeMode="cover"
        />
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#68CAA2',
  },
  box: {
    width: '55%',
    height: '30%',
    alignItems: 'flex-start',
  },
};

export default AuthLoadingScreen;
