import React, {Component} from 'react';
import {Button, View, StyleSheet,Image, ImageBackground, Text, ScrollView} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import { Dimensions } from 'react-native';
const win = Dimensions.get('window');
import { connect } from 'react-redux';
import { getProfile } from '../public/redux/actions/profile' 

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
        this.state = {
        selected: "key2",
        counter: 0,
        data: [],
        storageId : '',
        name :'',

        }
         
  }
  
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  fetchData = () => {
        
    this.props.dispatch(getProfile())
      .then((res)=> {
            //console.warn(res);
            //this.setState({profileData : res.value.data.data.rows[0] });
        })
  }

  componentDidMount = () => {
      this.fetchData();
  }
  

  render() {
    //console.warn(this.props.buyersprofile);
    const { buyersprofile } = this.props;
    console.warn(() => buyersprofile.name );
    return (
    <> 
      
      <View style={styles.container}>
      <View style={styles.backgroundProfile} >
          
          <ImageBackground style={{width:win.width, height:200, position:"absolute"}} source={{uri : 'http://34.226.154.250/ProjectGroup/bgProfil.jpg'}}>
          </ImageBackground>    
          <View style={styles.circleOut}>
              <View style={styles.circleIn}>
                  <Image style={styles.circleImage} source={{uri : 'http://34.226.154.250/ProjectGroup/ChelseaIslan.jpg'}}></Image>
              </View>
          </View>
          
      </View>
      <View style={styles.divmainProfile}>
      
          <View>
              <View style={styles.mainProfile}>
                  <View ><Text style={styles.namePerson}>{this.state.name}</Text></View>
              </View>
              <ScrollView style={styles.scroll}>
              <View>
                  <Card style={styles.card}>
                      <Text style={styles.label}>Address  </Text>
                      <Text>Propinsi : Jakarta</Text>
                      <Text>Kota / Kabupaten : Jakarta Selatan</Text>
                      <Text>Kecamatan : Kebayoran</Text>
                      <Text>Kelurahan : Tebet</Text>
                      <Text>Alamat : Jl tebet III B </Text>
                      <Text>Kode Pos : 22343</Text>
                  </Card>
                  <Card style={styles.card}>
                      <Text style={styles.label}>Contact  </Text>
                      <Text>Email : chelsea@gmail.com</Text>
                      <Text>Phone Number : 081882119223</Text>
                  </Card>
                  <View>
                      <View>
                      </View>
                  </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex : 1, height: 50, backgroundColor: 'powderblue'}} >
                      <Button color={'#035943'} title="EDIT" 
                          onPress={() => Alert.alert('edit Button')} />
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
import { Form } from 'native-base';

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
      // profil: state.engineers.profilengineers,
      // showcase : state.showcase
      // user : state.users.userId,
      // auth: state.auth
      buyersprofile : state.profile.dataProfile
  }
}

// connect with redux,first param is map and second is component
export default connect(mapStateToProps)(ProfileScreen)
