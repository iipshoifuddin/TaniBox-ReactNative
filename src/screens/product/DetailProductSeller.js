import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
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
import Carousel from 'react-native-anchor-carousel';
import loadingBlurImage from '../../public/images/loading-blur.jpeg';
import {TouchableOpacity} from 'react-native-gesture-handler';

const data = [
  {
    photo:
      'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/2/11/9627105/9627105_08c857a8-c683-4bd5-97b2-f41f37c6b93e_320_320.png',
  },
];

export default class DetailProduct extends Component {
  constructor() {
    super();
    this.state = {
      wish: false,
    };
  }

  wish = e => {
    const {wish} = this.state;
    this.setState({
      wish: !wish,
    });
  };
  renderItem = ({item, index}) => {
    const {backgroundColor, photo} = item;
    return (
      <View
        style={[styles.item, {backgroundColor}]}
        onPress={() => {
          this._carousel.scrollToIndex(index);
        }}>
        <ImageBackground
          source={{uri: photo}}
          style={styles.imageBackground}
          loadingIndicatorSource={loadingBlurImage}
        />
      </View>
    );
  };
  render() {
    return (
      <>
        <Header style={styles.header}>
          <Left>
            <Ionicons
              onPress={() => this.props.navigation.navigate('HomeSeller')}
              size={40}
              name={'ios-arrow-round-back'}
            />
          </Left>
          <Body />
          <Right />
        </Header>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.carouselContainer}>
              <Carousel
                style={styles.carousel}
                data={data}
                renderItem={this.renderItem}
                itemWidth={250}
                separatorWidth={0}
                ref={c => {
                  this._carousel = c;
                }}
              />
            </View>
          </View>
          <View style={styles.mt}>
            <View style={styles.view}>
              <View>
                <H1 style={[styles.h1, styles.primaryColor]}>Cabai Merah</H1>
                <Text style={styles.price}>Rp.30.000 / Kg</Text>
              </View>
            </View>
            <H3 style={[styles.h3, styles.primaryColor]}>Description</H3>
            <Text style={styles.textDescription}>
              Cabai Merah keriting selain sering dijadikan penambah rasa pedas
              pada masakan bisa juga sebagai pewarna merah pada masakan loh,
              cabai keriting berukuran kecil namun berbentuk memanjang dan
              memiliki permukaan yang kurang merata.
            </Text>
            <View style={[styles.section, styles.center]}>
              <View>
                <Button bordered style={styles.buttonCart}>
                  <Text style={styles.textButtonCart}>Edit Product</Text>
                </Button>
              </View>
              <View>
                <Button style={styles.buttonBuyNow}>
                  <Text style={styles.textButtonBuyNow}>Delete Product</Text>
                </Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

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
