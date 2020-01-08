import React, {useState} from 'react';
import {View, TextInput, ActivityIndicator, ScrollView} from 'react-native';
import {Container, H1, Text, Button, Picker, Icon} from 'native-base';
import s from '../public/styles/login-register';
import color from '../config';

const SignUpScreen = props => {
  const {
    navigation: {goBack},
  } = props;
  // let [role, setRole] = useState('buyer');
  let [username, setUsername] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [config, setConfig] = useState({
    loading: false,
    error: false,
  });
  let [PickerItem, setPickerItem] = useState('');

  return (
    <Container style={[s.centerRotate]}>
      <ScrollView>
        <View style={s.container}>
          <View>
            <View style={[s.lightBgColor, s.pt4, s.pb8]}>
              <H1 style={[s.textCenter, s.primaryColor]}>Register Here</H1>
            </View>
            <View style={[s.primaryBgColor, s.p4, s.topRadius, s._mt4]}>
              <View style={s.section}>
                <Text style={s.primaryColor}>Username</Text>
                <TextInput
                  style={[s.input, s.lightBorder]}
                  placeholderTextColor={color.light}
                  placeholder="kepler"
                  value={username}
                  onChangeText={text => setUsername(text)}
                />
              </View>
              <View style={s.section}>
                <Text style={s.primaryColor}>Email</Text>
                <TextInput
                  keyboardType="email-address"
                  style={[s.input, s.lightBorder]}
                  placeholderTextColor={color.light}
                  placeholder="kepler@mail.com"
                  value={email}
                  onChangeText={text => setEmail(text)}
                />
              </View>
              <View style={s.section}>
                <Text style={s.primaryColor}>Password</Text>
                <TextInput
                  secureTextEntry={true}
                  placeholderTextColor={color.light}
                  style={[s.input, s.lightBorder]}
                  placeholder="***"
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
              </View>
              <View style={s.section}>
                <Text style={s.primaryColor}>Confirm Password</Text>
                <TextInput
                  secureTextEntry={true}
                  placeholderTextColor={color.light}
                  style={[s.input, s.lightBorder]}
                  placeholder="***"
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
              </View>
              <View style={s.section}>
                <Picker
                  mode="dropdown"
                  selectedValue={PickerItem}
                  onValueChange={value => setPickerItem(value)}
                  iosHeader="Select your SIM"
                  style={{color: '#FFFFFF'}}
                  iosIcon={<Icon name="arrow-down" color={'white'} />}>
                  <Picker.Item label="Seller" value="key1" />
                  <Picker.Item label="Buyer" value="key2" />
                </Picker>
              </View>
              <View style={[s.section, s.center]}>
                <Button
                  bordered
                  light
                  style={s.buttonSignIn}
                  onPress={() => alert('Eits, tidak bisa.')}>
                  {config.loading ? (
                    <ActivityIndicator size="small" color="#3f51b5" />
                  ) : (
                    <Text style={s.textButtonSignIn}>Sign Up</Text>
                  )}
                </Button>
              </View>
              <View style={[s.section, s.register]}>
                <Text style={s.lightColor}>Already have an account?</Text>
                <Button info transparent onPress={() => goBack()}>
                  <Text style={s.secondaryColor}>Login</Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

SignUpScreen.navigationOptions = {
  headerShown: false,
};

export default SignUpScreen;
