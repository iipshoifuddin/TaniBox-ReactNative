
import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image, StyleSheet, SafeAreaView, SectionList } from 'react-native'
import { connect } from 'react-redux'
import { getProductsVegetable, getProductsFruit } from '../../public/redux/actions/product'
import { FlatGrid } from 'react-native-super-grid'
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested',
])
import axios from 'axios'

import { Header, Left, Body, Container, Content } from 'native-base'

const HomeScreen = ({ getProductsVegetable, getProductsFruit, product: { productsFruit, productsVegetable }, navigation }) => {

    useEffect(() => {

        const getFruit = async () => {
            try {
                const response = await axios.get('http://34.202.135.29:4000/api/v1/products?limit=4&category_id=2')
                getProductsFruit(response)
            } catch(error) {
                console.error(error)
            }
        }

        const getVegetable = async () => {
            try {
                const response = await axios.get('http://34.202.135.29:4000/api/v1/products?limit=4&category_id=1')
                getProductsVegetable(response)
            } catch(error) {
                console.error(error)
            }
        }

        getFruit()
        getVegetable()

    },[])

    return (
        <>
            <Header style={styles.header}>
                <Left />
                <Body>
                    <Text>Product List</Text>
                </Body>
            </Header>
                <Container>
                    <Content>
                        <View style={{
                            padding: 10,
                            width: '100%',
                            backgroundColor: 'rgb(145,238,154)',
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                            flexWrap: 'wrap'
                        }}>
                            <View>
                                <Text style={{
                                    fontWeight: 'bold'
                                }}>Fresh Fruit's</Text>
                            </View>
                            <View>
                                <Text style={{
                                    fontWeight: 'bold'
                                }} onPress={() => navigation.navigate('EachProduct',{
                                    category_id: 2
                                })}>View More </Text>
                            </View>
                        </View>


                      <FlatGrid
                        itemDimension={130}
                        items={productsFruit}
                        renderItem={({item, index}) => (
                          <TouchableOpacity
                            onPress={() => navigation.navigate('DetailProduct')}
                            style={{
                                justifyContent: 'flex-end',
                                position: 'relative',
                                borderRadius: 10,
                                margin: 5,
                                padding: 10,
                                height: 150
                            }}>
                            <Image style={{ position: 'absolute', width: '100%', height: 150, borderRadius: 10 }} source={{ uri: `http://34.202.135.29:4000/images/products/${item.photo}` }} />
                                <View style={{
                                    width: '100%',
                                    position: 'absolute',
                                    height: 50,
                                    borderRadius: 10,
                                    padding: 10,
                                    backgroundColor: 'rgba(0,0,0, 0.5)' }}>
                                </View>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemCode}>{item.price}</Text>
                          </TouchableOpacity>
                        )}
                      />

                      <View style={{
                          padding: 10,
                          width: '100%',
                          backgroundColor: 'rgb(145,238,154)',
                          display: 'flex',
                          justifyContent: 'space-around',
                          flexDirection: 'row',
                          flexWrap: 'wrap'
                        }}>
                        <View>
                            <Text style={{
                                fontWeight: 'bold'
                            }}>Fresh Vegetable's</Text>
                        </View>
                        <View>
                            <Text style={{
                                fontWeight: 'bold'
                            }} onPress={() => navigation.navigate('EachProduct', {
                                category_id: 1
                            })}>View More </Text>
                        </View>
                      </View>

                      <FlatGrid
                        itemDimension={130}
                        items={productsVegetable}
                        renderItem={({item, index}) => (
                          <TouchableOpacity
                            onPress={() => navigation.navigate('DetailProduct')}
                            style={{
                                justifyContent: 'flex-end',
                                position: 'relative',
                                borderRadius: 10,
                                margin: 5,
                                padding: 10,
                                height: 150
                            }}>
                            <Image style={{ position: 'absolute', width: '100%', height: 150, borderRadius: 10 }} source={{ uri: `http://34.202.135.29:4000/images/products/${item.photo}` }} />
                                <View style={{
                                    width: '100%',
                                    position: 'absolute',
                                    height: 50,
                                    borderRadius: 10,
                                    padding: 10,
                                    backgroundColor: 'rgba(0,0,0, 0.5)' }}>
                                </View>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemCode}>{item.price}</Text>
                          </TouchableOpacity>
                        )}
                      />
                </Content>
            </Container>
        </>
    )


}



const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'green',
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    position: 'absolute',
    bottom: 30,
    left: 15,
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    position: 'absolute',
    bottom: 10,
    left: 15,
    color: '#fff',
  },
  header: {
    backgroundColor: '#FFFFFF',
  },
})

const mapStateToProps = state => ({
    product: state.product
})

export default connect(
    mapStateToProps,
    { getProductsVegetable, getProductsFruit }
)(HomeScreen)
