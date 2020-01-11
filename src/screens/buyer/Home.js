import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {
  Header,
  Container,
  Item,
  Input,
  Icon,
  Button,
  View,
  Form,
  Picker,
} from 'native-base';
import {Overlay, Text} from 'react-native-elements';
import config from '../../config';

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      showSearch: false,
      sortBy: 'name',
      orderBy: 'ASC',
      search: '',
      limit: 5,
      active: false,
      overlay: false,
    };
  }

  handleFilter = _ => {
    this.fetchEngineers(
      this.state.search,
      this.state.sortBy,
      this.state.orderBy,
      this.state.limit,
    );
    this.setState({overlay: false});
  };
  render() {
    const items = [
      {id: '1', name: 'TURQUOISE', code: '#1abc9c', price: 'Rp.30.000'},
      {id: '2', name: 'EMERALD', code: '#2ecc71', price: 'Rp.30.000'},
      {id: '3', name: 'PETER RIVER', code: '#3498db', price: 'Rp.30.000'},
      {id: '4', name: 'AMETHYST', code: '#9b59b6', price: 'Rp.30.000'},
      {id: '5', name: 'WET ASPHALT', code: '#34495e', price: 'Rp.30.000'},
      {id: '6', name: 'GREEN SEA', code: '#16a085', price: 'Rp.30.000'},
      {id: '7', name: 'NEPHRITIS', code: '#27ae60', price: 'Rp.30.000'},
      {id: '8', name: 'BELIZE HOLE', code: '#2980b9', price: 'Rp.30.000'},
      {id: '9', name: 'WISTERIA', code: '#8e44ad', price: 'Rp.30.000'},
      {id: '10', name: 'MIDNIGHT BLUE', code: '#2c3e50', price: 'Rp.30.000'},
      {id: '11', name: 'SUN FLOWER', code: '#f1c40f', price: 'Rp.30.000'},
      {id: '12', name: 'CARROT', code: '#e67e22', price: 'Rp.30.000'},
      {id: '13', name: 'ALIZARIN', code: '#e74c3c', price: 'Rp.30.000'},
      {id: '14', name: 'CLOUDS', code: '#ecf0f1', price: 'Rp.30.000'},
      {id: '15', name: 'CONCRETE', code: '#95a5a6', price: 'Rp.30.000'},
      {id: '16', name: 'ORANGE', code: '#f39c12', price: 'Rp.30.000'},
      {id: '17', name: 'PUMPKIN', code: '#d35400', price: 'Rp.30.000'},
      {id: '18', name: 'POMEGRANATE', code: '#c0392b', price: 'Rp.30.000'},
      {id: '19', name: 'SILVER', code: '#bdc3c7', price: 'Rp.30.000'},
      {id: '20', name: 'ASBESTOS', code: '#7f8c8d', price: 'Rp.30.000'},
    ];

    return (
      <>
        <Overlay
          isVisible={this.state.overlay}
          height="auto"
          onBackdropPress={() => this.setState({overlay: false})}>
          <>
            <Text>Limit</Text>
            <Form>
              <Picker
                mode="dropdown"
                iosHeader="Sort By"
                iosIcon={<Icon name="arrow-down" />}
                style={{width: 200}}
                selectedValue={this.state.limit}>
                <Picker.Item label="5" value="5" />
                <Picker.Item label="10" value="10" />
                <Picker.Item label="15" value="15" />
              </Picker>
            </Form>
            <Text>Sort By :</Text>
            <Form>
              <Picker
                mode="dropdown"
                iosHeader="Sort By"
                iosIcon={<Icon name="arrow-down" />}
                style={{width: 200}}
                selectedValue={this.state.sortBy}>
                <Picker.Item label="Name" value="name" />
                <Picker.Item label="Skill" value="skill" />
                <Picker.Item label="Date Updated" value="date_updated" />
              </Picker>
            </Form>
            <Text>Order By :</Text>
            <Form>
              <Picker
                mode="dropdown"
                iosHeader="Order By"
                iosIcon={<Icon name="arrow-down" />}
                style={{width: 200}}
                selectedValue={this.state.orderBy}>
                <Picker.Item label="Latest" value="Latest" />
                <Picker.Item label="Oldest" value="oldest" />
              </Picker>
            </Form>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Button
                onPress={this.handleFilter}
                style={{
                  paddingHorizontal: 50,
                  marginRight: 5,
                  borderRadius: 10,
                  backgroundColor: config.secondary,
                }}>
                <Text>Apply</Text>
              </Button>
              <Button
                onPress={() => this.setState({overlay: false})}
                style={{
                  paddingHorizontal: 20,
                  marginLeft: 5,
                  borderRadius: 10,
                  backgroundColor: config.primary,
                }}>
                <Text style={{color: '#ffffff'}}>Cancel</Text>
              </Button>
            </View>
          </>
        </Overlay>
        <Header searchBar rounded style={styles.header}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon
              name="ios-funnel"
              onPress={() => this.setState({overlay: true})}
            />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Container>
          <FlatGrid
            itemDimension={130}
            items={items}
            style={styles.gridView}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Detail')}
                style={[styles.itemContainer, {backgroundColor: item.code}]}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCode}>{item.price}</Text>
              </TouchableOpacity>
            )}
          />
        </Container>
      </>
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
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

export default HomeScreen;
