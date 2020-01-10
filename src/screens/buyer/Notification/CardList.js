import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Card, CardItem, Body} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

export default class CardList extends Component {
  constructor() {
    super();
    this.state = {
      status: '',
    };
  }
  render() {
    return (
      <TouchableOpacity key={this.props.id} style={styles.card}>
        <Card transparent>
          <CardItem>
            {this.props.status === 'Success' && (
              <Ionicons
                style={styles.check}
                name="md-checkmark-circle-outline"
                size={35}
                color={'#0fd118'}
              />
            )}
            {this.props.status === 'Pending' && (
              <Ionicons
                style={styles.check}
                name="ios-warning"
                size={35}
                color={'#d9d92e'}
              />
            )}
            {this.props.status === 'Cancelled' && (
              <Ionicons
                style={styles.check}
                name="ios-close-circle"
                size={35}
                color={'#d94a2e'}
              />
            )}
            {this.props.status === 'Delivery' && (
              <MaterialCommunity
                style={styles.check}
                name="truck-delivery"
                size={35}
                color={'#2ed9d0'}
              />
            )}
            {this.props.status === 'Received' && (
              <Ionicons
                style={styles.check}
                name="ios-home"
                size={35}
                color={'#2ed978'}
              />
            )}
            <Body>
              <Text style={styles.title}>
                {this.props.type} {this.props.status}
              </Text>
              <Text style={styles.date}>
                {this.props.date} {this.props.time}
              </Text>
            </Body>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  check: {
    marginRight: 10,
  },
  card: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 2,
  },
  title: {fontWeight: 'bold', fontSize: 14},
  date: {color: '#6e6e6e'},
  image: {width: 50, height: 50, marginRight: 10},
});
