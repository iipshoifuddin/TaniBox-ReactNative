import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ImageBackground, Image} from 'react-native';
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
  Item,
} from 'native-base';
import sColor from '../../public/styles/color';
import sGlobal from '../../public/styles/';
import color from '../../config';
import axios from 'axios';
import {API_ENDPOINT} from 'react-native-dotenv';
import {toastr} from '../../helpers/script';

const Profile = ({navigation}) => {
  let [data, setData] = useState(navigation.state.params);
  let [config, setConfig] = useState({error: false, loading: false});
  const handleSubmit = () => {
    setConfig({loading: true, error: false});
    axios
      .put(`${API_ENDPOINT}profile`, {...data, name_of_seller: data.name})
      .then(res => {
        console.log(res);
        setConfig({loading: false, error: false});
        toastr('Profile successfully updated.', 'success');
      })
      .catch(err => {
        console.log(`${API_ENDPOINT}profile`);
        console.log(err);
        setConfig({loading: false, error: true});
        toastr('Failed to save profile.', 'danger');
      });
  };
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
            <ListInput
              label="Name"
              placeholder="Your name"
              value={data.name}
              handleChange={text => setData({...data, name: text})}
            />
            <ListInput
              label="Store Name"
              placeholder="e.g., Toko Segar"
              value={data.name_of_store}
              handleChange={text => setData({...data, name_of_store: text})}
            />
            <ListInput
              label="Phone"
              type="phone-pad"
              placeholder="+62"
              value={data.phone}
              handleChange={text => setData({...data, phone: text})}
            />
            <ListInput label="Email">
              <View style={[s.inputHeight, s.flex]}>
                <Text ellipsizeMode="tail" numberOfLines={1} style={s.fzInput}>
                  {data.email}
                </Text>
              </View>
            </ListInput>
            <ListItem style={s._pb}>
              <Item stackedLabel style={[s.noBorderBottom, s._ml]}>
                <Text style={[s.descriptionText, sColor.regularGrayColor]}>
                  Description
                </Text>
                <Input
                  multiline={true}
                  placeholderTextColor={color.regularGray}
                  style={s._px}
                  placeholder="Store description"
                  value={data.description}
                  handleChange={text => setData({...data, description: text})}
                />
              </Item>
            </ListItem>
          </List>
          <View style={s.button}>
            <Button
              style={[sGlobal.center, sColor.secondaryBgColor]}
              onPress={handleSubmit}>
              <Text>Save</Text>
            </Button>
          </View>
        </View>
      </Content>
    </Container>
  );
};

const ListInput = ({
  label,
  value,
  handleChange,
  placeholder,
  children,
  disabled = false,
  type = 'default',
}) => {
  return (
    <ListItem style={s.listInput}>
      <Left>
        <Text style={sColor.regularGrayColor}>{label}</Text>
      </Left>
      <Right style={s.flex}>
        {children ? (
          children
        ) : (
          <Input
            placeholderTextColor={color.regularGray}
            placeholder={placeholder}
            disabled={disabled}
            keyboardType={type}
            style={s.textRight}
            value={value}
            onChangeText={handleChange}
          />
        )}
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
    flexWrap: 'wrap',
    paddingTop: 0,
    paddingBottom: 0,
  },
  inputDescription: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  inputHeight: {
    height: 50,
  },
  fzInput: {fontSize: 17},
  descriptionText: {
    alignSelf: 'flex-start',
  },
  button: {
    paddingHorizontal: 32,
    marginTop: 20,
    marginBottom: 15,
  },
  flex: {flex: 1, justifyContent: 'center'},
  textRight: {textAlign: 'right'},
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
