import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Header, Container, Left, Body, Right} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class DetailProduct extends Component {
  render() {
    return (
      <>
        <Header style={styles.header}>
          <Left>
            <Ionicons
              onPress={() => this.props.navigation.navigate('Home')}
              size={40}
              name={'ios-arrow-round-back'}
            />
          </Left>
          <Body>
            <Text>isi</Text>
          </Body>
          <Right></Right>
        </Header>
        <Container style={styles.container}>
          <View>
            <Text> iki DetailProduct </Text>
          </View>
        </Container>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
  },
  container: {
    backgroundColor: '#FFFFFF',
  },
});
