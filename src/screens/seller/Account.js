import React, {useState, useEffect} from 'react';
import {StyleSheet, Text as TextMedium, View, Image} from 'react-native';
import {
  Container,
  Content,
  Text,
  H2,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Icon,
} from 'native-base';
import {removeDataStorage, getDataStorage, toastr} from '../../helpers/script';
import sGlobal from '../../public/styles';
import sColor from '../../public/styles/color';
import color from '../../config';
import axios from 'axios';
import {API_ENDPOINT} from 'react-native-dotenv';

export default function Profile({navigation: {navigate}}) {
  let [data, setData] = useState({});
  useEffect(() => {
    getDataStorage('id', id => {
      axios
        .get(`${API_ENDPOINT}profile/${id}`)
        .then(res => {
          setData(res.data.data[0]);
        })
        .catch(err => {
          console.log(err);
          toastr('Ops, network error');
        });
    });
  }, []);
  const signOut = () => {
    removeDataStorage('token', err => {
      if (!err) {
        navigate('Auth');
      }
    });
  };
  return (
    <Container>
      <Content>
        <View style={[sColor.secondaryBgColor, s.banner]}>
          <View style={[sGlobal.center, s.imgContainer]}>
            <Image
              source={require('../../public/images/seller-no-photo.png')}
              style={s.img}
            />
          </View>
          <H2 style={[sGlobal.textCenter, sColor.lightColor]}>Toko Segar</H2>
          <TextMedium style={[sGlobal.textCenter, sColor.lightColor]}>
            toko@segar.com
          </TextMedium>
        </View>
        <List style={s.listContainer}>
          <ListItem itemDivider style={sColor.lightBgColor}>
            <Text>Settings</Text>
          </ListItem>
          <ListArrow
            icon="contact"
            handlePress={() => navigate('Profile', data)}>
            Profile
          </ListArrow>
          <ListArrow icon="pin">Address</ListArrow>
          <ListArrow icon="key">Password</ListArrow>
          <ListArrow
            icon="ios-close-circle"
            style={sColor.dangerColor}
            handlePress={() => alert('Eits, tidak bisa.')}>
            Delete Account
          </ListArrow>
          <ListArrow
            icon="log-out"
            last
            style={sColor.primaryColor}
            handlePress={signOut}>
            Logout
          </ListArrow>

          <ListItem itemDivider style={sColor.lightBgColor}>
            <Text>Others</Text>
          </ListItem>
          <ListArrow icon="ios-help-circle">Help</ListArrow>
          <ListArrow icon="ios-information-circle" last>
            About
          </ListArrow>
        </List>
      </Content>
    </Container>
  );
}

const s = StyleSheet.create({
  banner: {
    paddingVertical: 32,
  },
  imgContainer: {
    marginBottom: 20,
  },
  img: {
    width: 75,
    height: 75,
  },
  listContainer: {
    paddingVertical: 15,
  },
  list: {
    borderBottomWidth: 0.5,
    borderColor: color.paleGray,
  },
  py: {
    paddingVertical: 5,
  },
});

const ListArrow = ({children, icon, style, last, handlePress}) => {
  return (
    <View style={[s.py, !last && s.list]}>
      <ListItem icon noBorder onPress={handlePress}>
        <Left>
          <Icon name={icon} style={style} />
        </Left>
        <Body>
          <Text style={style}>{children}</Text>
        </Body>
        {icon !== 'log-out' && (
          <Right>
            <Icon name="ios-arrow-forward" />
          </Right>
        )}
      </ListItem>
    </View>
  );
};

Profile.navigationOptions = {
  title: 'Account',
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
};
