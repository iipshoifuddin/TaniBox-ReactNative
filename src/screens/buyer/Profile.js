import React, {Component} from 'react';
import {Button, View, StyleSheet,Image , 
ImageBackground, Text, ScrollView , Alert, Picker,TouchableOpacity} from 'react-native';
import { Card } from 'react-native-shadow-cards';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import { Dimensions } from 'react-native';
const win = Dimensions.get('window');
import { connect } from 'react-redux';
import { getProfile } from '../../public/redux/actions/profile' 

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
        this.state = {
        selected: "key2",
        counter: 0,
        data: [],
        storageId : '',
        

        }
         
  }
  
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  componentDidMount = () => {
      this.props.fetch(13);
      console.warn(this.props.auth);
  }
  
  _signOutAsync = async () => {
    await OneSignal.setSubscription(false);
    await AsyncStorage.removeItem('token');
    this.props.navigation.navigate('Auth');
  };


  render() {
    const { profile } = this.props;
    return (
    <> 
      
      <View style={styles.container}>
      <View style={styles.backgroundProfile} >
          <View style={{ width : win.width, alignSelf:'flex-end'}}>
              <View style={{flex: 1, flexDirection: 'row', top : -25}}>
                <View style={{width : win.width, height: 50, backgroundColor: 'powderblue',flex :6}} ></View>
                <View style={{width : win.width, height: 50, backgroundColor: 'skyblue', flex:1}} >
                    <TouchableOpacity  onPress={() => Alert.alert(
                            `Logout `,
                            'Are You Sure want to Logout ?',
                            [
                                {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                                {text: 'OK', onPress: () => this._signOutAsync()},
                            ],
                            { cancelable: false }
                            )}>
                        <Ionicons style={{alignContent:'center'}} name={'ios-log-out'} size={28} color='red' />
                    </TouchableOpacity>
                </View>
                
             </View>
             <View style={{flex: 1, flexDirection: 'row', top: 90}}>
                <View style={{width : win.width, height: 50, backgroundColor: 'powderblue',flex :6}} ></View>
                <View style={{width : win.width, height: 50, backgroundColor: 'skyblue', flex:1}} >
                    <Ionicons name={'ios-camera'} size={30} color='red' />
                </View>
                <View style={{width : win.width, height: 50, backgroundColor: 'grey', flex:2}} >
                </View>
                
             </View>
               
          </View>
          {/* <ImageBackground style={{width:win.width, height:220, position:"absolute"}} source={{uri : 'http://34.226.154.250/ProjectGroup/bgProfil.jpg'}}>
          </ImageBackground>     */}
          <View style={styles.circleOut}>
              <View style={styles.circleIn}>
                  <Image style={styles.circleImage} source={{uri : `http://34.202.135.29:4000/images/profile/${profile.photo}`}}></Image>
              </View>
          </View>
          
      </View>
      <View style={styles.divmainProfile}>
      
          <View>
              <View style={styles.mainProfile}>
                  <View ><Text style={styles.namePerson}>{profile.name}</Text></View>
                  
              </View>
              <ScrollView style={styles.scroll}>
              <View>
                  <Card style={styles.card}>
                      <Text style={styles.label}>Address  </Text>
                      <Text>Propinsi : {profile.province_name}</Text>
                      <Text>Kota / Kabupaten : {profile.city_name}</Text>
                      <Text>Kecamatan : {profile.kecamatan}</Text>
                      <Text>Alamat : {profile.address}</Text>
                      <Text>Kode Pos : {profile.postal_code}</Text>
                  </Card>
                  <Card style={styles.card}>
                      <Text style={styles.label}>Contact  </Text>
                      <Text>Email : {profile.email}</Text>
                      <Text>Phone Number : {profile.phone}</Text>
                  </Card>
                  <Card style={styles.card}>
                      <Text style={styles.label}>History  </Text>
                      <Text>Email : {profile.email}</Text>
                      <Text>Phone Number : {profile.phone}</Text>
                  </Card>
                  <View>
                      <View>
                      </View>
                  </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex : 1, height: 50, backgroundColor: 'powderblue'}} >
                      <Button color={'#035943'} title="EDIT" 
                          onPress={() => this.props.navigation.navigate('EditProfileBuyer')} />
                  </View>
                  <View style={{flex : 1, height: 50, backgroundColor: 'skyblue'}} >
                      <Button style={styles.buttonDelete} color={'#ff3838'} title="DELETE" 
                          onPress={() => Alert.alert('Simple Button pressed')} />
                  </View>
              </View>
              </View>
              </ScrollView>
              
          </View>
        
          {/* <Card style={{padding: 10, margin: 10}}>
              <Text>Open up App.js to start working on your app!
              Changes you make will automatically reload.
              Shake your phone to open the developer menu.</Text>
          </Card> */}
      </View>
    </View>

    </>  
)
}
}
import { Form, Right } from 'native-base';
import OneSignal from 'react-native-onesignal';

const styles = StyleSheet.create({
container : {
flex: 1,
flexDirection: 'column',
alignItems: 'stretch'
},
backgroundProfile :{
width : win.width, 
height: 50, 
backgroundColor: '#fff',
flex : 3,
justifyContent : "center",
alignItems: 'center'
},
divmainProfile :{
width : win.width, 
flex : 5,
marginBottom: -20,
},
mainProfile :{
// width : win.width, 
// height: null, 
// backgroundColor: '#fff',
// borderWidth : 3,
// borderColor:'#035943',
// borderRadius :15,

},
chiledmainProfile :{
width : win.width, 
height: 50, 
backgroundColor: '#fff',
borderWidth : 3,
borderColor:'#035943',
borderRadius :15,
top : 10

},
circleOut :{
width : 130,
height : 130,
backgroundColor : 'rgba(52, 52, 52, 0.1)',
borderRadius : 75,
alignContent : 'center',
borderWidth : 3,
borderColor:'#035943',
},
circleIn : {
width : 115,
height : 115,
backgroundColor : '#fff',
borderRadius : 75,
top : 9/2,
left : 9/2,
borderWidth : 1,
// flex: 1

},
circleImage : {
flex : 1,
borderRadius : 75,
// flex: 1
},
namePerson : {
fontSize : 27,
color : '#000',
fontWeight :'bold',
textAlign : 'center',
justifyContent : "center",

},
label : {
fontSize : 16,
color : '#000',
fontWeight : 'bold',
textAlign : 'left',

},
filed : {
fontSize : 20,
color : '#000',
fontWeight :'bold',
textAlign : 'center',

},
card : {
padding: 10, 
margin: 10, 
borderColor:'#035943', 
borderWidth:2
},
scroll : {
marginBottom: 50
},
buttonDelete : {
borderWidth :10,
borderColor: '#ff3838',
color : '#ff3838'
}

});

const mapStateToProps = state => {
  return {
    profile: state.profile.dataProfile,
    auth: state.auth,
  }
}

const mapDispatchToProps = dispatch => ({
  fetch: (id) =>
    dispatch(getProfile(id)),
});

// connect with redux,first param is map and second is component
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)