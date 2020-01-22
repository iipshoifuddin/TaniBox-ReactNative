import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import {Header, Left, Body, Right, H1, H3, Button} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../../config';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import axios from 'axios';
import {connect} from 'react-redux';
import {getProduct} from '../../public/redux/actions/product';
import DetailProductItem from '../../components/DetailProductItem';
import AsyncStorage from '@react-native-community/async-storage';

const DetailProduct = ({getProduct, product: {product}, navigation}) => {
  const product_id = navigation.state.params.product_id;

  useEffect(() => {
    const getSingleProduct = async product_id => {
      try {
        const response = await axios.get(
          `http://34.202.135.29:4000/api/v1/products/show-product/${product_id}`,
        );
        getProduct(response);
      } catch (error) {
        console.error(error);
      }
    };
    getSingleProduct(product_id);
  }, [getProduct, product_id]);

  return (
    <>
      <Header style={styles.header}>
        <Left>
          <Ionicons
            onPress={() => navigation.navigate('Home')}
            size={40}
            name={'ios-arrow-round-back'}
          />
        </Left>
        <Body>
          <Text style={styles.title}>{product.name}</Text>
        </Body>
        <Right />
      </Header>
      <DetailProductItem item={product} />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
  },
  carouselContainer: {
    height: hp('35%'),
  },
  carousel: {
    flex: 1,
  },
  mt: {
    marginTop: 5,
    paddingTop: 20,
    backgroundColor: '#ffffff',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    borderColor: 'white',
    elevation: 3,
  },
  imageBackground: {
    flex: 2,
    backgroundColor: '#EBEBEB',
    borderWidth: 5,
    borderColor: 'white',
  },
  container: {
    width: wp('100%'),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingBottom: 10,
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
  section: {
    marginVertical: 30,
    flex: 1,
    flexDirection: 'row',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCart: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.light,
    borderColor: color.primary,
    width: 176,
    height: 43,
    borderRadius: 5,
    marginTop: 40,
    marginRight: 10,
  },
  textButtonCart: {
    color: color.secondary,
    fontSize: 15,
  },
  buttonBuyNow: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.primary,
    width: 176,
    height: 43,
    borderRadius: 5,
    marginTop: 40,
  },
  textButtonBuyNow: {
    color: color.secondary,
    fontSize: 15,
  },
});

const mapStateToProps = state => ({
  product: state.product,
});

export default connect(
  mapStateToProps,
  {getProduct},
)(DetailProduct);
