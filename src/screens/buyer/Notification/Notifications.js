import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';
import {Container, Header, Text, Body} from 'native-base';
import CardList from './CardList';

export default class Notifications extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filter: [],
      active: '',
      loadData: false,
      isFetching: false,
    };
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

  onChangeNotification = e => {
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
        status: 'Pending',
        date: '10 August 2020',
        time: '17:00',
        type: 'Transaction',
      },
      {
        id: '2',
        status: 'Success',
        date: '08 February 2020',
        time: '15:00',
        type: 'Transaction',
      },
      {
        id: '3',
        status: 'Cancelled',
        date: '10 March 2020',
        time: '10:10',
        type: 'Transaction',
      },
      {
        id: '4',
        status: 'Delivery',
        date: '10 March 2020',
        time: '12:30',
        type: 'Order',
      },
      {
        id: '5',
        status: 'Received',
        date: '10 March 2020',
        time: '12:30',
        type: 'Order',
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
      <Container>
        <Header style={styles.header}>
          <Body>
            <Text style={styles.title}>Notification</Text>
          </Body>
        </Header>
        <View style={styles.row}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={[styles.category, active === 'All' ? styles.active : '']}
              onPress={() => {
                this.onChangeNotification('All');
              }}>
              <Text>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.category,
                active === 'Pending' ? styles.active : '',
              ]}
              onPress={() => {
                this.onChangeNotification('Pending');
              }}>
              <Text>Pending</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.category,
                active === 'Delivery' ? styles.active : '',
              ]}
              onPress={() => {
                this.onChangeNotification('Delivery');
              }}>
              <Text>Delivery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.category,
                active === 'Received' ? styles.active : '',
              ]}
              onPress={() => {
                this.onChangeNotification('Received');
              }}>
              <Text>Received</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.category,
                active === 'Success' ? styles.active : '',
              ]}
              onPress={() => {
                this.onChangeNotification('Success');
              }}>
              <Text>Success</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.category,
                active === 'Cancelled' ? styles.active : '',
              ]}
              onPress={() => {
                this.onChangeNotification('Cancelled');
              }}>
              <Text>Cancelled</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <FlatList
          data={filter}
          refreshControl={
            <RefreshControl
              onRefresh={() => this.onRefresh()}
              refreshing={this.state.isFetching}
            />
          }
          renderItem={({item}) => (
            <CardList
              date={item.date}
              status={item.status}
              time={item.time}
              key={item.id}
              type={item.type}
            />
          )}
          keyExtractor={item => item.id}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  active: {
    backgroundColor: '#858585',
  },
  title: {
    color: 'black',
    fontSize: 20,
  },
  scroll: {
    marginTop: 10,
  },
  success: {
    backgroundColor: '#0fd118',
  },
  pending: {
    backgroundColor: '#d9d92e',
  },
  cancelled: {
    backgroundColor: '#d94a2e',
  },
  sending: {
    backgroundColor: '#2ed9d0',
  },
  sent: {
    backgroundColor: '#2ed978',
  },
  category: {
    backgroundColor: '#ddd',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 10,
    marginRight: 8,
  },
  row: {flexDirection: 'row', paddingHorizontal: 5},
});
