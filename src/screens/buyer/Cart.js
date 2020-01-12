import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {
  Container,
  Content,
  Footer,
  View,
  H3,
  Text,
  Icon,
  Button,
} from 'native-base';
import CartComponent from '../../components/Cart';
import sColor from '../../public/styles/color';
import {API_ENDPOINT} from 'react-native-dotenv';
import AsyncStorage from '@react-native-community/async-storage';

import {connect} from 'react-redux';
import {fetchCart} from '../../public/redux/actions/Cart';

export class Cart extends Component {
  static navigationOptions = {
    title: 'Shopping Cart',
  };

  _fetchingData = async () => {
    const user_id = await AsyncStorage.getItem('user_id');
    const url = `${API_ENDPOINT}products/${user_id}/cart`;
    this.props.fetchCart(url);
  };

  componentDidMount() {
    this._fetchingData();
  }

  render() {
    const {
      navigation: {push},
      propsData,
    } = this.props;
    const tomat =
      'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/grid/original/79865_tomat.jpg';
    return (
      <Container>
        <Content padder>
          {propsData.isLoading && (
            <ActivityIndicator size="large" color="#00ff00" />
          )}
          {!propsData.isLoading &&
            propsData.cart &&
            propsData.cart.map(function(item, index) {
              return (
                <CartComponent
                  name={item.name}
                  weight={item.unit + 'Kg'}
                  unit_price={item.unit_price}
                  price={item.total}
                  img={tomat}
                  qty={item.qty}
                  id={item.id}
                  product_id={item.product_id}
                  user_id={item.user_id}
                />
              );
            })}
        </Content>
        {propsData.cart.length !== 0 && (
          <Footer style={[s.footer, sColor.lightBgColor]}>
            <View>
              <Text style={sColor.lightGrayColor}>Total</Text>
              <H3 style={sColor.primaryColor}>
                {'Rp.' + propsData.cart[0].totalAmount}
              </H3>
            </View>
            <View>
              <Button
                iconRight
                style={sColor.secondaryBgColor}
                onPress={() => push('CheckOut')}>
                <Text>Checkout</Text>
                <Icon name="arrow-forward" />
              </Button>
            </View>
          </Footer>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  propsData: state.cart,
});

const mapDispatchToProps = dispatch => ({
  fetchCart: url => dispatch(fetchCart(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);

const s = StyleSheet.create({
  footer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
