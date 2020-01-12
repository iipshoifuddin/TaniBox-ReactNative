import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
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
import {getDataStorage} from '../../helpers/script';

import {connect} from 'react-redux';
import {fetchCart} from '../../public/redux/actions/Cart';

export class Cart extends Component {
  static navigationOptions = {
    title: 'Shopping Cart',
  };

  componentDidMount() {
    console.warn('sss');
    let url = `${API_ENDPOINT}/products/cart-by-user-id`;
    let user_id = getDataStorage('role', value => (user_id = value));
    this.props.fetchCart(url, user_id);
  }

  render() {
    const {
      navigation: {push},
    } = this.props;
    const cabe =
      'https://ecs7.tokopedia.net/img/cache/700/product-1/2016/1/19/3755767/3755767_7e93a94a-fa76-4f7e-bf03-16457f10a991.jpg';
    const tomat =
      'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/grid/original/79865_tomat.jpg';
    return (
      <Container>
        <Content padder>
          <CartComponent
            name="Cabe Rawit"
            weight="1kg"
            price="14.000"
            img={cabe}
          />
          <CartComponent name="Tomat" weight="1kg" price="8.000" img={tomat} />
        </Content>
        <Footer style={[s.footer, sColor.lightBgColor]}>
          <View>
            <Text style={sColor.lightGrayColor}>Total</Text>
            <H3 style={sColor.primaryColor}>Rp14.000</H3>
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
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  fetchCart: (url, user_id) => dispatch(fetchCart(url, user_id)),
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
