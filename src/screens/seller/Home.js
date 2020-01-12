import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {Text, Button, Icon, View} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class Home extends Component {
  render() {
    const items = [
      {id: '1', name: 'TURQUOISE', code: '#1abc9c', price: 'Rp.30.000'},
      {id: '2', name: 'EMERALD', code: '#2ecc71', price: 'Rp.30.000'},
      {id: '3', name: 'PETER RIVER', code: '#3498db', price: 'Rp.30.000'},
      {id: '4', name: 'AMETHYST', code: '#9b59b6', price: 'Rp.30.000'},
    ];

    return (
      <>
        <View style={styles.view}>
          <Button style={styles.button}>
            <Text style={styles.textButton}>
              <Icon name="add" size={90} />
              Add product
            </Text>
          </Button>
        </View>
        <FlatGrid
          itemDimension={130}
          items={items}
          style={styles.gridView}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={[styles.itemContainer, {backgroundColor: item.code}]}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCode}>{item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: wp('90%'),
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
  },
  textButton: {
    color: '#000000',
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  header: {
    backgroundColor: '#FFFFFF',
  },
});

export default Home;
