import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Header, Left, Body, Container, Content} from 'native-base';
import {getProducts} from '../../public/redux/actions/product';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const EachProduct = ({getProducts, product: {products}, navigation}) => {
  const category_id = navigation.state.params.category_id;

  useEffect(() => {
    const getDataProducts = async () => {
      try {
        const response = await axios.get(
          `http://34.202.135.29:4000/api/v1/products?category_id=${category_id}`,
        );
        getProducts(response);
      } catch (error) {
        console.error(error.message);
      }
    };

    getDataProducts();
  }, [category_id, getProducts]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Body style={{width: '90%'}}>
          <Container style={{width: '100%'}}>
            <Content>
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
                    <Text style={styles.itemCode}>{item.price}</Text>
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
