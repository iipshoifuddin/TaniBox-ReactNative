import React, {Component} from 'react';
import {View, FlatList, RefreshControl, ActivityIndicator} from 'react-native';
import CardWishlist from './CardWishlist';
import OneSignal from 'react-native-onesignal';
import {ONESIGNAL_API_KEY} from 'react-native-dotenv';
import {connect} from 'react-redux';
import {fetchWishlistAll} from '../../../public/redux/actions/Wishlist';
import AsyncStorage from '@react-native-community/async-storage';

class WishlistScreen extends Component {
  async componentDidMount() {
    let token = await AsyncStorage.getItem('token');

    const config = {
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };
    await this.props.fetch(19, config);
    await this.fetchData();
  }
  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log('Notification received: ', notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

  constructor(props) {
    super(props);
    this.state = {
      status: '',
      data: [],
      filter: [],
      active: '',
      isFetching: false,
    };
    OneSignal.setLogLevel(OneSignal.LOG_LEVEL.DEBUG, OneSignal.LOG_LEVEL.DEBUG);
    OneSignal.init(ONESIGNAL_API_KEY);
    OneSignal.setSubscription(true);
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    OneSignal.enableSound(true);
    OneSignal.inFocusDisplaying(2);
  }

  onRefresh() {
    this.setState({isFetching: true}, async () => {
      await this.fetchData();
      this.setState({isFetching: false});
    });
  }

  fetchData = e => {
    const {wishlist} = this.props;
    this.setState({
      data: wishlist.data,
    });
  };

  render() {
    const {data} = this.state;
    return (
      <>
        {this.props.isLoading && <ActivityIndicator size="large" />}
        {this.state.isFetching && <ActivityIndicator size="large" />}
        {!this.props.isLoading && !this.state.isFetching && (
          <View>
            <FlatList
              data={data}
              refreshControl={
                <RefreshControl
                  onRefresh={() => this.onRefresh()}
                  refreshing={this.state.isFetching}
                />
              }
              renderItem={({item}) => (
                <CardWishlist
                  id={item.id}
                  user_id={item.user_id}
                  product_id={item.product_id}
                  photo={item.photo}
                  price={item.price}
                  title={item.name}
                />
              )}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  wishlist: state.wishlist.data.data,
  isLoading: state.wishlist.isLoading,
  isError: state.wishlist.isError,
});

const mapDispatchToProps = dispatch => ({
  fetch: (user_id, config) => dispatch(fetchWishlistAll(user_id, config)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WishlistScreen);
