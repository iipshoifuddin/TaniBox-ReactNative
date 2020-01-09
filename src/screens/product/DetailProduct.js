import React, {Component} from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import {Header, Left, Body, Right, Container, H1, H3} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../../config';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class DetailProduct extends Component {
  render() {
    const data = [
      {
        uri: 'https://i.imgur.com/GImvG4q.jpg',
        title: 'Lorem ipsum dolor sit amet',
        content:
          'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      },
      {
        uri: 'https://i.imgur.com/Pz2WYAc.jpg',
        title: 'Lorem ipsum ',
        content: 'Neque porro quisquam est qui dolorem ipsum ',
      },
    ];
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
          <Body />
          <Right />
        </Header>
        <Container style={styles.container}>
          <Image
            source={{
              uri:
                'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/2/11/9627105/9627105_08c857a8-c683-4bd5-97b2-f41f37c6b93e_320_320.png',
            }}
            style={styles.img}
          />
        </Container>
        <Container>
          <H1 style={[styles.h1, styles.primaryColor]}>Cabai Merah</H1>
          <Text style={styles.price}>Rp.30.000 / Kg</Text>
          <H3 style={[styles.h3, styles.primaryColor]}>Description</H3>
          <Text style={styles.textDescription}>
            Cabai Merah keriting selain sering dijadikan penambah rasa pedas
            pada masakan bisa juga sebagai pewarna merah pada masakan loh, cabai
            keriting berukuran kecil namun berbentuk memanjang dan memiliki
            permukaan yang kurang merata.
          </Text>
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
    width: wp('100%'),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  h1: {
    fontWeight: 'bold',
    marginLeft: 20,
  },
  h3: {
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 50,
  },
  primaryColor: {
    color: color.primary,
  },
  img: {
    width: wp('80%'),
    height: hp('36%'),
  },
  price: {
    fontWeight: '600',
    fontSize: 12,
    marginLeft: 20,
  },
  textDescription: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    paddingTop: 10,
  },
});
