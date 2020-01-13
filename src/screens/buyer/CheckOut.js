import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Container, Content, Text, Button, Icon, Picker} from 'native-base';
import {font} from '../../helpers';
import sColor from '../../public/styles/color';
import color from '../../config';
import {API_ENDPOINT} from 'react-native-dotenv';

import {fetchCost} from '../../public/redux/actions/Shipment';
import {connect} from 'react-redux';

const BrandImage = props => {
  return <Image source={props.uri} resizeMode="contain" style={s.img} />;
};

export class CheckOut extends Component {
  static navigationOptions = {
    title: 'Check Out',
  };

  constructor(props) {
    super(props);
    this.state = {
      bank: 'bca',
      courier: 'jne',
      service: 'OKE',
      shipmentPrice: 0,
    };
  }

  componentDidMount() {
    this.setState({
      shipmentPrice: parseInt(this.props.propsCost.costs[0].cost[0].value),
    });
  }

  render() {
    const {propsProfile, propsCost, propsData} = this.props;
    return (
      <Container>
        <Content style={[sColor.grayBgColor, s.py2]}>
          <View style={s.section}>
            <Text style={[sColor.regularGrayColor, font(18), s.mb]}>
              Shipping Address
            </Text>
            <Text style={[font(19)]}>
              Province : {propsProfile.province_name}
            </Text>
            <Text style={[font(19)]}>city : {propsProfile.city_name}</Text>
            <Text style={[font(19)]}>kecamatan : {propsProfile.kecamatan}</Text>
            <Text style={[font(19)]}>Address : {propsProfile.address}</Text>
          </View>
          {/* <View style={s.section}>
            <Text style={[sColor.regularGrayColor, font(18), s.mb]}>
              Payment Method
            </Text>
            <View style={s.flexRow}>
              <View style={s.paymentImg}>
                <BrandImage uri={require('../../public/images/bca.png')} />
                <BrandImage uri={require('../../public/images/bri.png')} />
                <BrandImage uri={require('../../public/images/bni.png')} />
              </View>
              <Icon name="arrow-forward" />
            </View>
          </View> */}
          <View style={s.section}>
            <Text style={[sColor.regularGrayColor, font(18), s.mb]}>
              Payment Method
            </Text>
            <Picker
              selectedValue={this.state.bank}
              onValueChange={(value, itemIndex) =>
                this.setState({bank: value})
              }>
              <Picker.Item label="BCA" value="bca" />
              <Picker.Item label="BNI" value="bni" />
              <Picker.Item label="BRI" value="bri" />
            </Picker>
          </View>
          <View style={s.section}>
            <Text style={[sColor.regularGrayColor, font(18), s.mb]}>
              Shipment
            </Text>
            <Picker
              selectedValue={this.state.service}
              onValueChange={(value, itemIndex) =>
                this.setState({service: value, shipmentPrice: value})
              }>
              {propsCost.costs.map((item, key) => {
                return (
                  <Picker.Item
                    label={`${item.service} - Rp.${item.cost[0].value}`}
                    value={item.cost[0].value}
                  />
                );
              })}
            </Picker>
          </View>
          <View style={s.section}>
            <Text style={[sColor.regularGrayColor, font(18), s.mb]}>
              Total Amount: {propsData.cart[0].totalAmount}
            </Text>
          </View>
          {/* <View style={s.section}>
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
                <BrandImage uri={require('../../public/images/jne.png')} />
              </View>
            </View>
          </View> */}
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
            <Text>
              {'Rp.' +
                (propsData.cart[0].totalAmount + this.state.shipmentPrice)}
            </Text>
          </View>
          <Button full style={sColor.secondaryBgColor}>
            <Text>Pay Secure</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  propsProfile: state.profile.dataProfile,
  propsData: state.cart,
  propsCost: state.cost.cost[0],
});

const mapDispatchToProps = dispatch => ({
  fetchCost: (url, data) => dispatch(fetchCost(url, data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckOut);

const s = StyleSheet.create({
  paymentImg: {flex: 1, flexDirection: 'row'},
  img: {width: 60, height: 30},
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
