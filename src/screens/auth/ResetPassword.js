import React, {useState} from 'react';
import {View, Image, ActivityIndicator, Text as TextMedium} from 'react-native';
import {
  Container,
  Content,
  Text,
  H3,
  Input,
  Button,
  Item,
  Icon,
} from 'native-base';
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
    console.log({
      email,
      OTP: OTPCode,
      password,
      password_confirmation: confirmPassword,
    });
    setConfig({loading: true, error: false});
    axios
      .patch(`${API_ENDPOINT}auth/update-password`, {
        email,
        OTP,
        password,
        password_confirmation: confirmPassword,
      })
      .then(res => {
        console.log(res.data);
        setConfig({loading: false, error: false});
        toastr('Password successfully changed. Login now!', 'success');
        navigation.navigate('SignUp');
      })
      .catch(err => {
        console.log(err);
        setConfig({loading: false, error: true});
        toastr('Invalid verification code.', 'danger');
      });
  };
  const InputCode = ({code, handleChange}) => (
    <View style={[s.verifCode, sGlobal.center]}>
      <Input
        selectTextOnFocus
        maxLength={1}
        keyboardType="number-pad"
        style={s.inputCode}
        value={code}
        onChangeText={handleChange}
      />
    </View>
  );
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
          <InputCode
            code={OTP.one}
            handleChange={text => setOTP({...OTP, one: text})}
          />
          <InputCode
            code={OTP.two}
            handleChange={text => setOTP({...OTP, two: text})}
          />
          <InputCode
            code={OTP.three}
            handleChange={text => setOTP({...OTP, three: text})}
          />
          <InputCode
            code={OTP.four}
            handleChange={text => setOTP({...OTP, four: text})}
          />
        </View>
        <View style={s.inputContainer}>
          <Item>
            <Icon name="key" />
            <Input
              secureTextEntry={true}
              placeholder="New password"
              style={s.input}
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </Item>
          <Item>
            <Icon name="key" />
            <Input
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
