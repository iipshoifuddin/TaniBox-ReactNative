import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Card, CardItem, Body, Right} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class CardWishlist extends Component {
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
            <Body>
              <Text style={styles.title}>Apel</Text>
              <Text style={styles.subTitle}>Rp. 20.000</Text>
            </Body>
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
                <TouchableOpacity>
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
  title: {fontWeight: 'bold', fontSize: 25, color: '#035943'},
  subTitle: {fontWeight: '500', fontSize: 17},
  image: {width: 60, height: 60, marginRight: 10},
});
