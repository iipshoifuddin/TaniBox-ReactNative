import React from 'react';
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

const Cart = props => {
  const {name, weight, price, img} = props;
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
              <Button transparent>
                <Icon name="add" style={sColor.regularGrayColor} />
              </Button>
              <Text
                style={[s.count, sColor.lightBgColor, sColor.regularGrayColor]}>
                1
              </Text>
              <Button transparent>
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
};

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

export default Cart;
