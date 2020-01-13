import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {
  Header,
  Left,
  Body,
  Container,
  Content,
  Item,
  Icon,
  Input,
  Button,
  Picker,
  Form,
} from 'native-base';
import {getProducts} from '../../public/redux/actions/product';
import {Overlay} from 'react-native-elements';
import config from '../../config';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import useDebounce from '../../use-debounce';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested',
  'Failed prop type',
]);
import _ from 'lodash';

const EachProduct = ({
  getProducts,
  product: {products, search, limit, sort, sortBy, overlay},
  navigation,
}) => {
  const category_id = navigation.state.params.category_id;

  const [searchMask, setSearchMask] = useState(search);
  const [limitMask, setLimitMask] = useState(limit);
  const [sortByMask, setSortByMask] = useState(sortBy);
  const [sortMask, setSortMask] = useState(sort);

  const debouncedValue = useDebounce(searchMask, 800);

  const [overlayMask, setOverlayMask] = useState(false);

  const onSearch = value => {
    setSearchMask(value.trim());
  };

  const handleBackdropPress = e => {
    setOverlayMask(false);
  };

  const handleOpenOverlay = e => {
    setOverlayMask(true);
  };

  const handleLimit = value => {
    setLimitMask(value);
  };

  const handleSortBy = value => {
    setSortByMask(value);
  };

  const handleSort = value => {
    setSortMask(value);
  };

  const onCancel = e => {
    setOverlayMask(false);
  };

  useEffect(() => {
    const getDataProducts = async () => {
      try {
        const response = await axios.get(
          `http://34.202.135.29:4000/api/v1/products?limit=${limitMask}&sort=${sortMask}&sortBy=${sortByMask}&search=${debouncedValue}&category_id=${category_id}`,
        );
        getProducts(response);
      } catch (error) {
        console.error(error.message);
      }
    };

    getDataProducts();
  }, [
    category_id,
    debouncedValue,
    limitMask,
    sortByMask,
    sortMask,
    overlayMask,
    getProducts,
  ]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Body style={{width: '90%'}}>
          <Container style={{width: '100%'}}>
            <Content>
              <Overlay
                isVisible={overlayMask}
                height="auto"
                onBackdropPress={e => handleBackdropPress(e)}>
                <Text>Limit</Text>
                <Form>
                  <Picker
                    mode="dropdown"
                    iosHeader="Sort By"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{width: 200}}
                    onValueChange={(value, index) => handleLimit(value)}
                    selectedValue={limitMask}>
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
                    onValueChange={(value, index) => handleSortBy(value)}
                    selectedValue={sortByMask}>
                    <Picker.Item label="Name" value="name" />
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
                    onValueChange={(value, index) => handleSort(value)}
                    selectedValue={sortMask}>
                    <Picker.Item label="Latest" value="DESC" />
                    <Picker.Item label="Oldest" value="ASC" />
                  </Picker>
                </Form>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Button
                    onPress={e => onCancel(e)}
                    style={{
                      paddingHorizontal: 20,
                      marginLeft: 5,
                      borderRadius: 10,
                      backgroundColor: config.primary,
                    }}>
                    <Text style={{color: '#ffffff'}}>Cancel</Text>
                  </Button>
                </View>
              </Overlay>
              <Header searchBar rounded style={styles.header}>
                <Item>
                  <Icon name="ios-search" />
                  <Input
                    placeholder="Search"
                    onChangeText={value => onSearch(value)}
                  />
                  <Icon name="ios-funnel" onPress={e => handleOpenOverlay(e)} />
                </Item>
                <Button transparent>
                  <Text>Search</Text>
                </Button>
              </Header>
              <FlatList
                data={products}
                style={{width: '100%'}}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Detail', {
                        product_id: item.product_id,
                      })
                    }
                    style={{
                      justifyContent: 'flex-end',
                      position: 'relative',
                      borderRadius: 10,
                      margin: 5,
                      height: 150,
                    }}>
                    <Image
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: 150,
                        borderRadius: 10,
                      }}
                      source={{
                        uri: `http://34.202.135.29:4000/images/products/${
                          item.photo
                        }`,
                      }}
                    />
                    <View
                      style={{
                        width: '100%',
                        position: 'absolute',
                        height: 50,
                        borderRadius: 10,
                        padding: 10,
                        backgroundColor: 'rgba(0,0,0, 0.5)',
                      }}
                    />
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemCode}>
                      Rp.{' '}
                      {item.price
                        .toString()
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}{' '}
                    </Text>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
              />
            </Content>
          </Container>
        </Body>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    bottom: 25,
    left: 10,
    color: '#fff',
    position: 'absolute',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    bottom: 10,
    left: 12,
    fontSize: 12,
    position: 'absolute',
    color: '#fff',
  },
  header: {
    backgroundColor: '#FFFFFF',
  },
});

const mapStateToProps = state => ({
  product: state.product,
});

export default connect(
  mapStateToProps,
  {getProducts},
)(EachProduct);
