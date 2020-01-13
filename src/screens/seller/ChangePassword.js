import React, {useState} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {Container, Content, Text, Form, Item, Input, Label} from 'native-base';
import {ButtonPrimary} from '../../components/Button';
import {toastr} from '../../helpers/script';
import color from '../../config';
import {API_ENDPOINT} from 'react-native-dotenv';
import axios from 'axios';

const ChangePassword = props => {
  const {email} = props.navigation.state.params;
  const [old_password, setOld_password] = useState('');
  const [new_password, setNew_password] = useState('');
  const [confirm_password, setConfirm_password] = useState('');
  const [config, setConfig] = useState({loading: false, error: false});
  const handleSubmit = () => {
    if (config.loading) {
      return;
    } else if (!old_password || !new_password || !confirm_password) {
      toastr('Please fill out all of this field.');
      return;
    } else if (new_password !== confirm_password) {
      toastr("Confirm password doesn't match.");
      return;
    }
    setConfig({loading: true, error: false});
    axios
      .patch(`${API_ENDPOINT}auth/profile-change-password`, {
        email,
        old_password,
        new_password,
      })
      .then(() => {
        setConfig({loading: false, error: false});
        toastr('Password successfully changed.', 'success');
      })
      .catch(err => {
        console.log(err);
        setConfig({loading: false, error: true});
        toastr('Invalid old password.', 'danger');
      });
  };
  return (
    <Container>
      <Content padder>
        <Form style={s.mt}>
          <Item stackedLabel>
            <Label>Old Password</Label>
            <Input
              style={s.fontSize}
              secureTextEntry
              value={old_password}
              onChangeText={text => setOld_password(text)}
            />
          </Item>
          <Item stackedLabel>
            <Label>New Password</Label>
            <Input
              style={s.fontSize}
              secureTextEntry
              value={new_password}
              onChangeText={text => setNew_password(text)}
            />
          </Item>
          <Item stackedLabel>
            <Label>Confirm New Password</Label>
            <Input
              style={s.fontSize}
              secureTextEntry
              value={confirm_password}
              onChangeText={text => setConfirm_password(text)}
            />
          </Item>
          <ButtonPrimary handleSubmit={handleSubmit}>
            {config.loading ? (
              <ActivityIndicator size="large" color={color.light} />
            ) : (
              <Text>Change Password</Text>
            )}
          </ButtonPrimary>
        </Form>
      </Content>
    </Container>
  );
};

const s = StyleSheet.create({
  mt: {marginTop: 10},
  fontSize: {fontSize: 20},
});

ChangePassword.navigationOptions = {
  title: 'Change Password',
};

export default ChangePassword;
