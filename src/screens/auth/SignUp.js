import React, {useState} from 'react';
import {
  View,
  TextInput,
  ActivityIndicator,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {Container, H1, Text, Button, Picker, Icon} from 'native-base';
import s from '../../public/styles/login-register';
import color from '../../config';
import sColor from '../../public/styles/color';
import {toastr} from '../../helpers/script';
import axios from 'axios';
import {API_ENDPOINT} from 'react-native-dotenv';

const SignUpScreen = props => {
  const {
    navigation: {goBack},
  } = props;
  let [role, setRole] = useState('buyer');
  let [username, setUsername] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [confirmPassword, setConfirmPassword] = useState('');
  let [config, setConfig] = useState({
    loading: false,
    error: false,
  });
  const handleSubmit = () => {
    if (!username || !email || !password || !confirmPassword) {
      toastr('Please fill out all of this field.', 'danger');
      return;
    }
    if (password !== confirmPassword) {
      toastr("Confirm password doesn't match.", 'danger');
      return;
    }
    setConfig({loading: true, error: false});
    axios
      .post(`${API_ENDPOINT}auth/register`, {
        name: username,
        email,
        password,
        role,
      })
      .then(() => {
        setConfig({loading: false, error: false});
        toastr(
          'Your account successfully registered. You can login now!',
          'success',
        );
        goBack();
      })
      .catch(() => {
        setConfig({loading: false, error: true});
        toastr('Username or email already registered', 'danger');
      });
  };
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
                  style={[s.input, s.lightBorder, sColor.lightColor]}
                  placeholderTextColor={color.lightGray}
                  placeholder="kepler"
                  value={username}
                  onChangeText={text => setUsername(text)}
                />
              </View>
              <View style={s.section}>
                <Text style={s.primaryColor}>Email</Text>
                <TextInput
                  keyboardType="email-address"
                  style={[s.input, s.lightBorder, sColor.lightColor]}
                  placeholderTextColor={color.lightGray}
                  placeholder="kepler@mail.com"
                  value={email}
                  onChangeText={text => setEmail(text)}
                />
              </View>
              <View style={s.section}>
                <Text style={s.primaryColor}>Password</Text>
                <TextInput
                  secureTextEntry={true}
                  placeholderTextColor={color.lightGray}
                  style={[s.input, s.lightBorder, sColor.lightColor]}
                  placeholder="***"
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
              </View>
              <View style={s.section}>
                <Text style={s.primaryColor}>Confirm Password</Text>
                <TextInput
                  secureTextEntry={true}
                  placeholderTextColor={color.lightGray}
                  style={[s.input, s.lightBorder, sColor.lightColor]}
                  placeholder="***"
                  value={confirmPassword}
                  onChangeText={text => setConfirmPassword(text)}
                />
              </View>
              <View style={s.section}>
                <Picker
                  mode="dropdown"
                  selectedValue={role}
                  onValueChange={value => setRole(value)}
                  iosHeader="Select your SIM"
                  style={sColor.lightColor}
                  iosIcon={<Icon name="arrow-down" color={'white'} />}>
                  <Picker.Item label="Buyer" value="buyer" />
                  <Picker.Item label="Seller" value="seller" />
                </Picker>
              </View>
              <View style={[s.section, s.center]}>
                <Button
                  bordered
                  light
                  style={s.buttonSignIn}
                  onPress={handleSubmit}>
                  {config.loading ? (
                    <ActivityIndicator size="large" color={color.light} />
                  ) : (
                    <Text style={s.textButtonSignIn}>Sign Up</Text>
                  )}
                </Button>
              </View>
              <View style={[s.section, s.register, s.flexCenter]}>
                <Text style={s.lightColor}>Already have an account? </Text>
                <TouchableHighlight onPress={() => goBack()}>
                  <Text style={s.secondaryColor}> Login</Text>
                </TouchableHighlight>
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
