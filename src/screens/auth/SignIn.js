import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import {Container, H1, Text, Button} from 'native-base';
import s from '../../public/styles/login-register';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {toastr} from '../../helpers/script';
import {API_ENDPOINT} from 'react-native-dotenv';
import color from '../../config';

const SignInScreen = props => {
  const {
    navigation: {navigate, push},
  } = props;
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [config, setConfig] = useState({
    loading: false,
    error: false,
  });
  const storeData = async data => {
    // eslint-disable-next-line no-shadow
    const {token, email, role} = data;
    try {
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('role', role);
    } catch (err) {
      toastr('Ops, something error');
    }
    navigate('Home');
  };
  const loginUser = () => {
    if (!email || !password) {
      toastr('Please fill out all of this field.', 'danger');
      return;
    }
    setConfig({loading: true, error: false});
    axios
      .post(`${API_ENDPOINT}auth/login`, {
        email,
        password,
      })
      .then(res => {
        setConfig({loading: false, error: false});
        storeData(res.data.data);
      })
      .catch(() => {
        setConfig({loading: false, error: true});
        toastr('Incorrect email or password.', 'danger');
      });
  };
  return (
    <Container style={s.centerRotate}>
      <ScrollView>
        <View style={s.container}>
          <View style={[s.primaryBgColor, s.banner, s.jcCenter]}>
            <Image
              source={require('../../public/images/login.png')}
              resizeMode="contain"
              style={s.img}
            />
          </View>
          <View style={[s.px4, s.jcCenter]}>
            <View>
              <H1 style={[s.textCenter, s.header, s.primaryColor]}>
                Login Here
              </H1>
              <View style={s.section}>
                <Text style={s.primaryColor}>Email</Text>
                <TextInput
                  keyboardType="email-address"
                  style={s.input}
                  placeholder="kepler"
                  value={email}
                  onChangeText={text => setEmail(text)}
                />
              </View>
              <View style={s.section}>
                <Text style={s.primaryColor}>Password</Text>
                <TextInput
                  secureTextEntry={true}
                  placeholder="***"
                  style={s.input}
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
              </View>
              <View style={[s.section, s.center]}>
                <Button style={s.buttonSignIn} onPress={loginUser}>
                  {config.loading ? (
                    <ActivityIndicator size="large" color={color.light} />
                  ) : (
                    <Text style={s.textButtonSignIn}>Sign In</Text>
                  )}
                </Button>
              </View>
              <View style={[s.section, s.register, s.flexCenter]}>
                <Text>Don't have an account? </Text>
                <TouchableHighlight onPress={() => navigate('SignUp')}>
                  <Text style={s.secondaryColor}> Sign Up</Text>
                </TouchableHighlight>
              </View>
              <Button
                info
                transparent
                style={s.center}
                onPress={() => push('ForgotPassword')}>
                <Text style={s.secondaryColor}>Forgot Password</Text>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

SignInScreen.navigationOptions = {
  headerShown: false,
};

export default SignInScreen;
