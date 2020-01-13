import React, {Component} from 'react';
import {StyleSheet, View, Text as TextMedium} from 'react-native';
import {
  List,
  ListItem,
  Left,
  Thumbnail,
  Body,
  Text,
  Right,
  Button,
  Icon,
} from 'native-base';
import sColor from '../public/styles/color';
import {API_ENDPOINT} from 'react-native-dotenv';

import {connect} from 'react-redux';
import {addQty, fetchCart} from '../public/redux/actions/Cart';

export class Cart extends Component {
  constructor(props) {
    super(props);
  }

  increase = async () => {
    let {id, product_id, user_id, qty, unit_price} = this.props;
    qty = qty + 1;
    const data = {
      cart_id: id,
      product_id: product_id,
      user_id: user_id,
      qty: qty,
      unit_price: unit_price,
    };
    const urlFetch = `${API_ENDPOINT}products/${user_id}/cart`;
    const url = `${API_ENDPOINT}products/update-cart`;
    await this.props.addQty(url, data).then(res => {
      this.props.fetchCart(urlFetch);
    });
  };

  decrease = async () => {
    let {id, product_id, user_id, qty, unit_price} = this.props;
    qty = qty - 1;
    const data = {
      cart_id: id,
      product_id: product_id,
      user_id: user_id,
      qty: qty,
      unit_price: unit_price,
    };
    const urlFetch = `${API_ENDPOINT}products/${user_id}/cart`;
    const url = `${API_ENDPOINT}products/update-cart`;
    await this.props.addQty(url, data).then(res => {
      this.props.fetchCart(urlFetch);
    });
  };

  render() {
    const {name, weight, price, img, qty} = this.props;
    return (
      <List style={[sColor.grayBgColor, s.list]}>
        <ListItem thumbnail noBorder>
          <Left>
            <Thumbnail square source={{uri: img}} />
          </Left>
          <Body>
            <Text>{name}</Text>
            <Text note numberOfLines={1}>
              {weight}
            </Text>
            <View style={s.cartFoot}>
              <TextMedium>Rp{price}</TextMedium>
              <View style={s.action}>
                <Button transparent onPress={this.increase}>
                  <Icon name="add" style={sColor.regularGrayColor} />
                </Button>
                <Text
                  style={[
                    s.count,
                    sColor.lightBgColor,
                    sColor.regularGrayColor,
                  ]}>
                  {qty}
                </Text>
                <Button transparent onPress={this.decrease}>
                  <Icon name="remove" style={sColor.regularGrayColor} />
                </Button>
              </View>
            </View>
          </Body>
          <Right>
            <Button transparent style={s.remove}>
              <Icon name="close" style={sColor.regularGrayColor} />
            </Button>
          </Right>
        </ListItem>
      </List>
    );
  }
}

const s = StyleSheet.create({
  list: {marginVertical: 5},
  cartFoot: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  action: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  count: {
    borderColor: 'rgba(0, 0, 0, .2)',
    borderWidth: 0.7,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 0,
  },
  remove: {position: 'absolute', top: 0, right: 0},
  textCenter: {justifyContent: 'center'},
});

const mapStateToProps = state => ({
  propsData: state.cart,
});

const mapDispatchToProps = dispatch => ({
  addQty: (url, data) => dispatch(addQty(url, data)),
  fetchCart: url => dispatch(fetchCart(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
