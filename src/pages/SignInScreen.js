import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  ActivityIndicator,
  Image,
} from 'react-native';
import {Container, H1, Text, Button} from 'native-base';
import color from '../config';

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
            <H1 style={[s.textCenter, s.header, s.primaryColor]}>Login Here</H1>
            <View style={s.section}>
              <Text style={s.primaryColor}>Email</Text>
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
            <View style={s.section}>
              <Button
                rounded
                style={[s.center, s.primaryBgColor]}
                disabled={config.loading}
                onPress={() => alert('Eits, tidak bisa.')}>
                {config.loading ? (
                  <ActivityIndicator size="small" color="#3f51b5" />
                ) : (
                  <Text style={s.primaryColor}>Login</Text>
                )}
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
    </Container>
  );
};

const s = StyleSheet.create({
  container: {width: '100%', justifyContent: 'space-between'},
  banner: {
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: 160,
  },
  primaryColor: {color: color.secondary},
  secondaryColor: {color: color.tertiary},
  primaryBgColor: {backgroundColor: color.primary},
  header: {marginTop: 24, marginBottom: 12},
  register: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {width: 150, height: 24},
  section: {marginVertical: 15},
  input: {
    borderColor: '#000',
    borderBottomWidth: 0.5,
    paddingVertical: 4,
    fontSize: 18,
  },
  px4: {paddingHorizontal: 36},
  textCenter: {textAlign: 'center'},
  jcCenter: {justifyContent: 'center'},
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wAuto: {width: 'auto'},
});

SignInScreen.navigationOptions = {
  header: null,
};

// this.props.navigation.navigate('App');
// this.props.navigation.navigate('SignUp');
export default SignInScreen;
