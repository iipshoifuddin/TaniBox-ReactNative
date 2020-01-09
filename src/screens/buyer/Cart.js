import React from 'react';
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
import Cart from '../../components/Cart';
import sColor from '../../public/styles/color';

const cabe =
  'https://ecs7.tokopedia.net/img/cache/700/product-1/2016/1/19/3755767/3755767_7e93a94a-fa76-4f7e-bf03-16457f10a991.jpg';
const tomat =
  'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/grid/original/79865_tomat.jpg';

const ShoppingCart = props => {
  const {
    navigation: {push},
  } = props;
  return (
    <Container>
      <Content padder>
        <Cart name="Cabe Rawit" weight="1kg" price="14.000" img={cabe} />
        <Cart name="Tomat" weight="1kg" price="8.000" img={tomat} />
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
};

const s = StyleSheet.create({
  footer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default ShoppingCart;
