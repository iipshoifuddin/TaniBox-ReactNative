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

const ResetPassword = () => {
  let [password, setPassword] = useState('');
  let [confirmPassword, setConfirmPassword] = useState('');
  let [config, setConfig] = useState({
    loading: false,
    error: false,
  });
  const handlePress = () => {
    if (config.loading) {
      return;
    } else if (!password || !confirmPassword) {
      toastr('Please fill out all of this field.', 'danger');
      return;
    } else if (password !== confirmPassword) {
      toastr("Confirm password doesn't match.", 'danger');
      return;
    }
    return;
    setConfig({loading: true, error: false});
    axios
      .post(`${API_ENDPOINT}auth/forgot-password`, {password})
      .then(res => {
        console.log(res.data);
        setConfig({loading: false, error: false});
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
            source={require('../../public/images/key.png')}
            style={s.img}
          />
        </View>
        <H3 style={sGlobal.textCenter}>Reset your password</H3>
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
        <View style={sGlobal.flexRow}>
          <Button
            disabled={config.loading ? true : false}
            style={[s.button, sColor.secondaryBgColor]}
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
  title: 'Reset Password',
};

export default ResetPassword;
