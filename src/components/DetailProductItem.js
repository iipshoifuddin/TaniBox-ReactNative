import React, {useState} from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import color from '../config';

import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {Button} from 'native-base';

import Ionicons from 'react-native-vector-icons/Ionicons';

const DetailProductItem = ({item}) => {
  let name, photo, description, price;

  console.log(item);

  if (typeof item === 'undefined' || item === null) {
    return false;
  } else {
    name = item.name;
    photo = item.photo;
    description = item.description;
    price = item.price;
  }

  const [wish, setWish] = useState(false);

  const toggleWish = event => {
    const {wish} = wish;
    setWish({
      wish: !wish,
    });
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.carouselContainer}>
            <Image
              style={{width: 400, height: 400}}
              source={{
                uri: `http://34.202.135.29:4000/images/products/${photo}`,
              }}
            />
          </View>
        </View>
        <View style={styles.mt}>
          <View style={styles.view}>
            <View>
              <Text style={[styles.h1, styles.primaryColor]}> {name} </Text>
              <Text style={styles.price}>Rp. {price} / Kg</Text>
            </View>
            <TouchableOpacity onPress={e => toggleWish(e)}>
              <Ionicons
                size={40}
                color={color.primary}
                name={wish ? 'ios-heart' : 'ios-heart-empty'}
              />
            </TouchableOpacity>
          </View>
          <Text style={[styles.h3, styles.primaryColor]}>Description</Text>
          <Text style={styles.textDescription}>{description}</Text>
          <View style={[styles.section, styles.center]}>
            <View>
              <Button bordered style={styles.buttonCart}>
                <Text style={styles.textButtonCart}>Add To Cart</Text>
              </Button>
            </View>
            <View>
              <Button style={styles.buttonBuyNow}>
                <Text style={styles.textButtonBuyNow}>Buy Now</Text>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
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

export default DetailProductItem;
