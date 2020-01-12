import React, {Component} from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import CardWishlist from './CardWishlist';
import OneSignal from 'react-native-onesignal';
import {ONESIGNAL_API_KEY} from 'react-native-dotenv';

export default class WishlistScreen extends Component {
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
      loadData: false,
      isFetching: false,
    };
    // OneSignal.setLogLevel(OneSignal.LOG_LEVEL.DEBUG, OneSignal.LOG_LEVEL.DEBUG);
    // OneSignal.init(ONESIGNAL_API_KEY);

    // OneSignal.setSubscription(true);
    // OneSignal.addEventListener('received', this.onReceived);
    // OneSignal.addEventListener('opened', this.onOpened);
    // OneSignal.addEventListener('ids', this.onIds);
    // OneSignal.enableSound(true);
    // OneSignal.inFocusDisplaying(2);
  }

  onRefresh() {
    const {data} = this.state;
    this.setState({isFetching: true}, async () => {
      await this.setState({
        active: 'All',
        filter: data,
      });
      this.setState({isFetching: false});
    });
  }

  onChangeWishlist = e => {
    const {data} = this.state;
    let filerData = data.filter(d => {
      return d.status === e;
    });
    if (e === 'All') {
      return this.setState({
        filter: data,
        active: e,
      });
    }
    this.setState({
      filter: filerData,
      active: e,
    });
  };

  fetchData = e => {
    const data = [
      {
        id: '1',
        photo: 'Pending',
        price: '2000',
        title: 'Apel',
      },
      {
        id: '2',
        photo: 'Pending',
        price: '2000',
        title: 'Cabe',
      },
      {
        id: '3',
        photo: 'Pending',
        price: '2000',
        title: 'Apel',
      },
    ];
    this.setState({
      data,
      filter: data,
      active: 'All',
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const {filter, active} = this.state;
    return (
      <>
        <View>
          <FlatList
            data={filter}
            refreshControl={
              <RefreshControl
                onRefresh={() => this.onRefresh()}
                refreshing={this.state.isFetching}
              />
            }
            renderItem={({item}) => (
              <CardWishlist
                photo={item.photo}
                price={item.price}
                title={item.title}
                key={item.id}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </>
    );
  }
}
