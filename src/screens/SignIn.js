import React, {useState} from 'react';
import {View, TextInput, Image, ScrollView} from 'react-native';
import {Container, H1, Text, Button} from 'native-base';
import s from '../public/styles/login-register';

const SignInScreen = props => {
  const {
    navigation: {navigate},
  } = props;
  let [user, setUser] = useState('');
  let [password, setPassword] = useState('');
  let [config, setConfig] = useState({
    loading: false,
    error: false,
  });
  return (
    <Container>
      <ScrollView>
        <View style={s.container}>
          <View style={[s.primaryBgColor, s.banner, s.jcCenter]}>
            <Image
              source={require('../public/images/login.png')}
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
                <Text style={s.primaryColor}>Username or email</Text>
                <TextInput
                  style={s.input}
                  placeholder="kepler"
                  value={user}
                  onChangeText={text => setUser(text)}
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
                <Button style={s.buttonSignIn} onPress={() => navigate('Home')}>
                  <Text style={s.textButtonSignIn}>Sign In</Text>
                </Button>
              </View>
              <View style={[s.section, s.register]}>
                <Text>Don't have an account?</Text>
                <Button info transparent onPress={() => navigate('SignUp')}>
                  <Text style={s.secondaryColor}> Sign Up</Text>
                </Button>
              </View>
              <Button
                info
                transparent
                style={s.center}
                onPress={() => alert('Eits, tidak bisa')}>
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

// this.props.navigation.navigate('App');
export default SignInScreen;
