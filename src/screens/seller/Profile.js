import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'native-base';

export default class Profile extends Component {
  render() {
    return (
      <View>
        <Button onPress={() => this.props.navigation.navigate('Upload')}>
          <Text>upload product</Text>
        </Button>
      </View>
    );
  }
}
