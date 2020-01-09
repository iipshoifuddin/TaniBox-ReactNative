import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Container, Content, Text, Button, Icon} from 'native-base';
import {font} from '../../helpers';
import sColor from '../../public/styles/color';
import color from '../../config';

const paymentImg =
  'https://statik.tempo.co/data/2019/04/23/id_836405/836405_720.jpg';
const courrirImg =
  'http://4.bp.blogspot.com/-jbzRwY_okf4/T0CHZ7iXv3I/AAAAAAAAFWY/5RF7fmaCSMc/s1600/LOGO+JNE.png';
const CheckOut = () => {
  return (
    <Container>
      <Content style={[sColor.grayBgColor, s.py2]}>
        <View style={s.section}>
          <Text style={[sColor.regularGrayColor, font(18), s.mb]}>
            Shipping Address
          </Text>
          <Text style={[font(19)]}>Jakarta - Tebet Utara 3B 10</Text>
        </View>
        <View style={s.section}>
          <Text style={[sColor.regularGrayColor, font(18), s.mb]}>
            Payment Method
          </Text>
          <View style={s.flexRow}>
            <Image
              source={{uri: paymentImg}}
              resizeMode="contain"
              style={s.img}
            />
            <Icon name="arrow-forward" />
          </View>
        </View>
        <View style={s.section}>
          <View style={s.flexRow}>
            <Text style={[sColor.regularGrayColor, font(18), s.mb]}>
              Shipment
            </Text>
            <Text style={[sColor.regularGrayColor, font(18), s.mb]}>
              2 hari
            </Text>
          </View>
          <View style={s.flexRow}>
            <Text style={[font(19)]}>SiCepat REG - Rp10.000</Text>
            <View style={[s.flexRowReverse]}>
              <Icon name="arrow-forward" style={s.ml_2} />
              <Image
                resizeMode="contain"
                source={{uri: courrirImg}}
                style={s.img}
              />
            </View>
          </View>
        </View>
        {/* <View style={s.section}>
          <Text style={[sColor.regularGrayColor, font(18), s.mb]}>
            Price details
          </Text>
          <View style={s.ml}>
            <Text style={[font(19)]}>Alfamart</Text>
          </View>
        </View> */}
      </Content>
      <View style={[sColor.lightBgColor, s.footer]}>
        <View style={[s.flexRow, s.mb]}>
          <Text>Total payment</Text>
          <Text>Rp. 14000</Text>
        </View>
        <Button full style={sColor.secondaryBgColor}>
          <Text>Pay Secure</Text>
        </Button>
      </View>
    </Container>
  );
};

CheckOut.navigationOptions = {
  title: 'Check Out',
};

const s = StyleSheet.create({
  img: {width: 55, height: 55},
  footer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    // borderTopWidth: 1,
    // borderColor: color.paleGray,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  section: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: color.light,
  },
  flexRow: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowReverse: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  py2: {paddingVertical: 10},
  mb: {marginBottom: 5},
  ml: {marginLeft: 5},
  ml_2: {marginLeft: 10},
});

export default CheckOut;
