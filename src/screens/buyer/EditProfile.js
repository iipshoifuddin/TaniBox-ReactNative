import React, {Component} from 'react';
import {Button, View, StyleSheet,Image , ImageBackground, Text, ScrollView , Alert, TextInput, Picker} from 'react-native';
import { Card } from 'react-native-shadow-cards';
import { Dimensions } from 'react-native';
const win = Dimensions.get('window');
import { connect } from 'react-redux';
import { getProfile, getRegions, getCity, updateProfile } from '../../public/redux/actions/profile' 
import {toastr} from '../../helpers/script';
import DatePicker from 'react-native-datepicker';
import axios from 'axios';


class EditProfile extends Component {
  constructor(props) {
    super(props);
        this.state = {
        selected: "key2",
        counter: 0,
        storageId : '',
        cityKey : '',
        propinsiKey: [],
        propinsi: [],
        city : [],
        name : '',
        kecamatan : '',
        address : '',
        phonenumber : '',
        postalcode : ''

        

        }
         
  }
  
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  onSubmit = async () =>{
    // if (this.state.name === "" || !this.state.kecamatan === "" || this.state.address === "" 
    //     || this.state.phone === "" || this.state.postalcode === "") {
    //     toastr('Please fill out all of this field.', 'danger');
    //     return;
    // }

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMywiZW1haWwiOiJjaGVsc2VhQGdtYWlsLmNvbSJ9LCJpYXQiOjE1Nzg4MjEzNTAsImV4cCI6MTU3OTE4MTM1MH0.ZUXNOxgD953xUb6077tbjP8O4lWtDiTTuJHIzip_QHw';
    
      await this.props.fetchPost(token ,{
        user_id:'13',
        name : this.state.name,
        province : this.state.propinsiKey,
        city : this.state.cityKey,
        kecamatan:this.state.kecamatan,
        address:this.state.address,
        postal_code:this.state.postalcode,
        phone:this.state.phonenumber,
        province_name : this.state.propinsi,
        city_name: this.state.city,
    })
    .then((res)=> {
        //this.setState({isLoading:false});
        //console.warn(res.value.data.message);
        toastr('Succesfull Edit Data.', 'primary');
        //this.props.navigation.navigate(res.value.data.message);
    })

  }

  onChangeProv(id){
    this.props.fetchCity(id);
  }

  componentDidMount = () => {
      this.props.fetch(13);
      this.props.fetchregions();
  }
  

  render() {
    //this.props.fetchCity(this.state.propinsiKey);
    const { regions, city, profile } = this.props;
    // console.warn(this.props.regions);
    // console.warn(this.props.city);
    // this.state.city.s?plit("&");
    //city.split("&")
    // nameCity.split("&");
    return (
    <> 
      
        <ScrollView>
            <View style={styles.container}> 
            <Text style={styles.titleLogin}>Edit Profile</Text>
            <View style={styles.boxInput}>
                    <Text style={styles.label} >Full Name</Text>
                    <TextInput style={styles.input} 
                        onChangeText={(name) =>{this.setState({name}),
                                        this.setState({isLoading:true})}}
                        placeholder={profile.name}/>
                    <Text style={styles.label} >Propinsi</Text>
                    <View style={styles.borderpicker}>
                        <Picker
                            selectedValue={this.state.propinsi}
                            style={styles.piceker}
                            onValueChange={(value, itemIndex) =>{
                                this.onChangeProv(itemIndex+1), this.setState({propinsi: value, propinsiKey:itemIndex+1})}
                            }>
                            {regions.map(( item, key ) =>
                            {   
                                return(
                                <Picker.Item label={regions[key].province} value={regions[key].province} />)
                            })}
                        </Picker>
                    </View>
                    <Text style={styles.label} >City</Text>
                    <View style={styles.borderpicker}>
                        <Picker
                            selectedValue={this.state.city}
                            style={styles.piceker}
                            onValueChange={(value, value2, itemIndex) =>
                                this.setState({city: value, cityKey : value2})
                            }>
                            {city.map(( item, key ) =>
                            {   
                                return(
                                <Picker.Item label={`${city[key].city_name} (${city[key].type})`} 
                                value={city[key].city_name} value2={city[key].city_id} />)
                            })}
                        </Picker>
                    </View>

                    <View>

                    </View>
                    <Text style={styles.label} >Kecamatan</Text>
                    <TextInput style={styles.input} 
                        onChangeText={(kecamatan) =>{this.setState({kecamatan}),
                        this.setState({isLoading:true})}}
                        placeholder={profile.kecamatan} />

                    <Text style={styles.label} >Address</Text>
                    <TextInput style={styles.multiline} 
                        multiline
                        onChangeText={(address) =>{this.setState({address}),
                        this.setState({isLoading:true})}}
                        placeholder={profile.address}/>
                    
                    <Text style={styles.label} >Phone Number</Text>
                    <TextInput style={styles.input} 
                        onChangeText={(phonenumber) =>{this.setState({phonenumber}),
                        this.setState({isLoading:true})}}
                        placeholder={profile.phone} />

                    <Text style={styles.label} >Postal Code</Text>
                    <TextInput style={styles.input} 
                        onChangeText={(postalcode) =>{this.setState({postalcode}),
                        this.setState({isLoading:true})}}
                        placeholder={profile.postal_code}/>

                    <View style={styles.buttonLogin}>
                        <Button  color="#035943" title="Save" onPress={() => this.onSubmit()} />
                    </View>

            </View>

            </View>
        </ScrollView>

    </>  
    )
}
}
import { Form } from 'native-base';

const styles = StyleSheet.create({
    container: {

        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        
    },
    titleLogin : {
        fontSize : 25,
        color : '#035943',
        fontWeight: 'bold',
        marginTop : 20,
        alignItems : 'center',
        textAlign : 'center',
    },
    boxInput : {
        marginTop: 20,
        marginBottom: 20

    },
    input : {
        marginTop: 10,
        backgroundColor:'white',
        width : 250,
        borderRadius : 7,
        borderColor : '#035943',
        borderWidth:1,
        fontSize : 18,
    },
    multiline : {
        marginTop: 10,
        backgroundColor:'white',
        width : 250,
        borderRadius : 15,
        borderColor : '#035943',
        borderWidth:1,
        fontSize : 18,
        height : 100
    },
    label : {
        fontSize : 16,
        color : 'grey',
        marginTop :10,
        
    },
    buttonLogin : {
        marginTop: 20,
        backgroundColor : "#FED330"
    },
    registerLabel : {
        marginTop: 20,
        backgroundColor : "#FED330",
        top : 20,
        alignItems : 'center',
        textAlign : 'center',
        fontSize : 16,
        fontWeight: 'bold',
        color : 'grey',
    },
    registerButton : {
        marginTop: 5,
        top : 20,
        alignItems : 'center',
        textAlign : 'center',
        
        
    },
    registerButtonText : {

        fontSize : 16,
        fontWeight: 'bold',
        color : 'orange',
    },
    errorvalidate : {
        fontSize : 12,
        color : 'red',
        marginTop :5,
        marginBottom: 0,
    },
    piceker : {
        height: 50, 
        width: 250,
        borderColor : '#035943',
        // borderWidth : 10,
        //backgroundColor :'red'
        
    },
    borderpicker : {
        borderColor :'#035943',
        borderWidth : 1,
        borderRadius : 7
    }
})


const mapStateToProps = state => {
  return {
    profile: state.profile.dataProfile,
    auth: state.auth,
    regions : state.profile.regions,
    city : state.profile.city,
  }
}

const mapDispatchToProps = dispatch => ({
  fetch: (id) =>
    dispatch(getProfile(id)),
  fetchregions: () =>
    dispatch(getRegions()),
  fetchCity: (prov_id) =>
    dispatch(getCity(prov_id)),
  fetchPost : (token, data) =>
    dispatch(updateProfile(token, data)), 
});

// connect with redux,first param is map and second is component
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)


