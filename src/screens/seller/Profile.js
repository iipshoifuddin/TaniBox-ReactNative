import React from 'react';
import {
  StyleSheet,
  View,
  Text as TextMedium,
  ImageBackground,
  Image,
} from 'react-native';
import {
  Container,
  Content,
  Text,
  Input,
  Button,
  List,
  ListItem,
  Left,
  Right,
  Label,
  Item,
} from 'native-base';
import sColor from '../../public/styles/color';
import sGlobal from '../../public/styles/';
import color from '../../config';

const Profile = ({navigation}) => {
  //   console.warn(navigation.state.params);
  return (
    <Container>
      <Content>
        <ImageBackground style={[s.imgCover, sColor.primaryBgColor]}>
          <Button transparent light style={s.editCover}>
            <Text>Edit Cover</Text>
          </Button>
        </ImageBackground>
        <View style={sGlobal.center}>
          <ImageBackground
            style={[s.imgProfile, sGlobal.center, sColor.lightBgColor]}>
            <Button transparent onPress={() => alert('aw')}>
              <Image
                source={require('../../public/images/no-image2.png')}
                style={s.defaultImg}
              />
            </Button>
          </ImageBackground>
        </View>
        <View>
          <List>
            <ListInput label="Name" placeholder="Your name" />
            <ListInput label="Store Name" placeholder="e.g., Toko Segar" />
            <ListInput label="Phone" placeholder="+62" />
            <ListItem style={s._pb}>
              <Item stackedLabel style={[s.noBorderBottom, s._ml]}>
                <Text style={[s.descriptionText, sColor.regularGrayColor]}>
                  Description
                </Text>
                <Input
                  multiline={true}
                  placeholderTextColor={color.regularGray}
                  placeholder="Store description"
                  style={s._px}
                />
              </Item>
            </ListItem>
          </List>
          <View style={s.button}>
            <Button style={[sGlobal.center, sColor.secondaryBgColor]}>
              <Text>Save</Text>
            </Button>
          </View>
        </View>
      </Content>
    </Container>
  );
};

const ListInput = ({label, value, handleChange, placeholder}) => {
  return (
    <ListItem style={s.listInput}>
      <Left>
        <Text style={sColor.regularGrayColor}>{label}</Text>
      </Left>
      <Right style={{flex: 1}}>
        <Input
          placeholderTextColor={color.regularGray}
          placeholder={placeholder}
          value={value}
          onChangeText={handleChange}
        />
      </Right>
    </ListItem>
  );
};

const s = StyleSheet.create({
  imgCover: {
    height: 150,
    position: 'relative',
  },
  editCover: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  imgProfile: {
    width: 75,
    height: 75,
    marginTop: -75 / 2,
    borderRadius: 75 / 2,
    borderColor: color.secondary,
    borderWidth: 2.5,
    position: 'relative',
  },
  defaultImg: {
    width: 25,
    height: 25,
  },
  listInput: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  inputDescription: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  descriptionText: {
    alignSelf: 'flex-start',
  },
  button: {
    paddingHorizontal: 32,
    marginTop: 20,
    marginBottom: 15,
  },
  textLeft: {textAlign: 'left'},
  noBorderBottom: {borderBottomWidth: 0},
  _pb: {paddingBottom: 0},
  _py: {paddingTop: 0, paddingBottom: 0},
  _px: {paddingLeft: 0, paddingRight: 0},
  _ml: {marginLeft: 0},
});

Profile.navigationOptions = {
  title: 'Edit Profile',
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
};

export default Profile;
