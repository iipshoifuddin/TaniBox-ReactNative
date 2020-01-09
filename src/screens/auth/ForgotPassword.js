import React, {useState} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
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

const ForgotPassword = props => {
  const {navigation} = props;
  let [email, setEmail] = useState('');
  let [config, setConfig] = useState({
    loading: false,
    error: false,
  });
  const handlePress = () => {
    if (config.loading) {
      return;
    } else if (!email) {
      return toastr('Please input your email.', 'danger');
    }
    setConfig({loading: true, error: false});
    axios
      .post(`${API_ENDPOINT}auth/forgot-password`, {email})
      .then(res => {
        console.log(res.data);
        setConfig({loading: false, error: false});
        navigation.navigate('ResetPassword');
      })
      .catch(err => {
        console.log(err);
        setConfig({loading: false, error: true});
        toastr('Network error.');
      });
  };
  return (
    <Container>
      <Content padder>
        <View style={[sGlobal.flexRowCenter, s.banner]}>
          <Image
            source={require('../../public/images/question.jpg')}
            style={s.img}
          />
        </View>
        <H3 style={sGlobal.textCenter}>Enter your email to reset password</H3>
        <Item style={s.inputContainer}>
          <Icon name="mail" />
          <Input
            keyboardType="email-address"
            placeholder="example@mail.com"
            style={s.input}
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </Item>
        <View style={sGlobal.flexRow}>
          <Button
            disabled={config.loading ? true : false}
            style={[s.button, sColor.secondaryBgColor]}
            onPress={() => navigation.navigate('ResetPassword')}>
            {config.loading ? (
              <ActivityIndicator size="large" color={color.light} />
            ) : (
              <Text>Reset Password</Text>
            )}
          </Button>
        </View>
      </Content>
    </Container>
  );
};

ForgotPassword.navigationOptions = {
  headerTransparent: true,
  title: 'Forgot Password',
};

export default ForgotPassword;
