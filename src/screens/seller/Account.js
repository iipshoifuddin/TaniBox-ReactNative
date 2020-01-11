import React from 'react';
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
import {removeDataStorage} from '../../helpers/script';
import sGlobal from '../../public/styles';
import sColor from '../../public/styles/color';
import color from '../../config';

export default function Profile({navigation}) {
  const signOut = () => {
    removeDataStorage('token', err => {
      if (!err) {
        navigation.navigate('Auth');
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
          <H2 style={[sGlobal.textCenter, sColor.lightColor]}>Yayuk Store</H2>
          <TextMedium style={[sGlobal.textCenter, sColor.lightColor]}>
            yayuk@gmail.com
          </TextMedium>
        </View>
        <List style={s.listContainer}>
          <ListItem itemDivider style={sColor.lightBgColor}>
            <Text>Settings</Text>
          </ListItem>
          <ListArrow icon="contact">Profile</ListArrow>
          <ListArrow icon="pin">Address</ListArrow>
          <ListArrow icon="ios-call">Phone</ListArrow>
          <ListArrow icon="key">Password</ListArrow>
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
