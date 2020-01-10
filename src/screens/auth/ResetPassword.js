import React, {useState} from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  TextInput,
  Text as TextMedium,
} from 'react-native';
import {Container, Content, Text, H3, Button, Item, Icon} from 'native-base';
import color from '../../config';
import sColor from '../../public/styles/color';
import sGlobal from '../../public/styles';
import s from '../../public/styles/forgot-reset';
import {toastr} from '../../helpers/script';
import {API_ENDPOINT} from 'react-native-dotenv';
import axios from 'axios';

const ResetPassword = ({navigation}) => {
  const email = navigation.state.params.email;
  let [password, setPassword] = useState('');
  let [confirmPassword, setConfirmPassword] = useState('');
  let [OTP, setOTP] = useState({one: '', two: '', three: '', four: ''});
  let [config, setConfig] = useState({
    loading: false,
    error: false,
  });
  let textInput = {};
  const handlePress = () => {
    const OTPCode = Object.values(OTP).join('');
    if (config.loading) {
      return;
    } else if (!password || !confirmPassword || OTPCode.length !== 4) {
      toastr('Please fill out all of this field.', 'danger');
      return;
    } else if (password !== confirmPassword) {
      toastr("Confirm password doesn't match.", 'danger');
      return;
    }
    setConfig({loading: true, error: false});
    axios
      .patch(`${API_ENDPOINT}auth/update-password`, {
        email,
        OTP,
        password,
        password_confirmation: confirmPassword,
      })
      .then(() => {
        setConfig({loading: false, error: false});
        toastr('Password successfully changed. Login now!', 'success');
        navigation.navigate('SignIn');
      })
      .catch(() => {
        setConfig({loading: false, error: true});
        toastr('Invalid verification code.', 'danger');
      });
  };
  const onChangeCode = (target, text, callback) => {
    setOTP({...OTP, [target]: text});
    if (text.length === 1) {
      callback();
    }
  };
  return (
    <Container>
      <Content padder>
        <View style={[sGlobal.flexRowCenter, s.banner]}>
          <Image
            source={require('../../public/images/key.png')}
            style={s.img}
          />
        </View>
        <H3 style={sGlobal.textCenter}>Reset your password</H3>
        <TextMedium style={sGlobal.textCenter}>
          We have sent a verification code on your email.
        </TextMedium>
        <View style={[sGlobal.flexRowCenter, s.mb_2]}>
          <View style={[s.verifCode, sGlobal.center]}>
            <TextInput
              selectTextOnFocus
              maxLength={1}
              keyboardType="number-pad"
              style={s.inputCode}
              value={OTP.one}
              onChangeText={text =>
                onChangeCode('one', text, () => textInput.two.focus())
              }
            />
          </View>
          <View style={[s.verifCode, sGlobal.center]}>
            <TextInput
              selectTextOnFocus
              maxLength={1}
              keyboardType="number-pad"
              style={s.inputCode}
              value={OTP.two}
              ref={input => (textInput.two = input)}
              onChangeText={text =>
                onChangeCode('two', text, () => textInput.three.focus())
              }
            />
          </View>
          <View style={[s.verifCode, sGlobal.center]}>
            <TextInput
              selectTextOnFocus
              maxLength={1}
              keyboardType="number-pad"
              style={s.inputCode}
              value={OTP.three}
              ref={input => (textInput.three = input)}
              onChangeText={text =>
                onChangeCode('three', text, () => textInput.four.focus())
              }
            />
          </View>
          <View style={[s.verifCode, sGlobal.center]}>
            <TextInput
              selectTextOnFocus
              maxLength={1}
              keyboardType="number-pad"
              style={s.inputCode}
              value={OTP.four}
              ref={input => (textInput.four = input)}
              onChangeText={text =>
                onChangeCode('four', text, () => textInput.password.focus())
              }
            />
          </View>
        </View>
        <View style={s.inputContainer}>
          <Item>
            <Icon name="key" />
            <TextInput
              secureTextEntry={true}
              placeholder="New password"
              style={s.input}
              value={password}
              ref={input => (textInput.password = input)}
              onChangeText={text => setPassword(text)}
            />
          </Item>
          <Item>
            <Icon name="key" />
            <TextInput
              secureTextEntry={true}
              placeholder="Confirm password"
              style={s.input}
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
            />
          </Item>
        </View>
        <View style={s.button}>
          <Button
            disabled={config.loading ? true : false}
            style={[s.button, sColor.secondaryBgColor, sGlobal.center]}
            onPress={handlePress}>
            {config.loading ? (
              <ActivityIndicator size="large" color={color.light} />
            ) : (
              <Text>Change Password</Text>
            )}
          </Button>
        </View>
      </Content>
    </Container>
  );
};

ResetPassword.navigationOptions = {
  headerTransparent: true,
  title: null,
};

export default ResetPassword;
