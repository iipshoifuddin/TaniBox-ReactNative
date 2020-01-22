import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import {Card, CardItem, Right} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {deleteWishlist} from '../../../public/redux/actions/Wishlist';
import AsyncStorage from '@react-native-community/async-storage';

class CardWishlist extends Component {
  render() {
    return (
      <View>
        <Card transparent>
          <CardItem>
            <Image
              source={{
                uri:
                  'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2019/03/09/2750049933.jpg',
              }}
              style={styles.image}
            />
            <View>
              <Text style={styles.title}>
                {this.props.title.length > 12
                  ? `${this.props.title.substring(0, 12)}...`
                  : this.props.title}
              </Text>
              <Text style={styles.subTitle}>
                Rp.{' '}
                {this.props.price
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}{' '}
                / KG
              </Text>
            </View>
            <Right>
              <View style={styles.row}>
                <TouchableOpacity>
                  <Ionicons
                    style={styles.icon}
                    name="ios-cart"
                    size={35}
                    color={'#68CAA2'}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    // console.warn(token);
                    Alert.alert(
                      'Delete Wishlist',
                      'Are You Sure?',
                      [
                        {
                          text: 'No',
                          style: 'cancel',
                        },
                        {
                          text: 'Yes',
                          onPress: async () => {
                            let token = await AsyncStorage.getItem('token');
                            let user_id = await AsyncStorage.getItem('id');
                            const config = {
                              headers: {
                                'content-type': 'application/json',
                                Authorization: 'Bearer ' + token,
                              },
                            };
                            // console.warn(user_id, this.props.id);
                            await this.props.delete(
                              this.props.id,
                              user_id,
                              config,
                            );
                          },
                          // this.props.delete(this.props.id, user_id, config),
                        },
                      ],
                      {cancelable: false},
                    );
                  }}>
                  <Ionicons
                    style={styles.icon}
                    name="ios-trash"
                    size={35}
                    color={'#d94a2e'}
                  />
                </TouchableOpacity>
              </View>
            </Right>
          </CardItem>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    marginLeft: 20,
  },
  row: {
    flexDirection: 'row',
  },
  card: {
    borderBottomColor: '#ddd',
    // borderBottomWidth: 2,
  },
  title: {fontWeight: 'bold', fontSize: 23, color: '#035943'},
  subTitle: {fontWeight: '500', fontSize: 17},
  image: {width: 60, height: 60, marginRight: 10},
});

const mapStateToProps = state => ({
  isLoading: state.wishlist.isLoading,
  isError: state.wishlist.isError,
});

const mapDispatchToProps = dispatch => ({
  delete: (product_id, user_id, config) =>
    dispatch(deleteWishlist(product_id, user_id, config)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardWishlist);
