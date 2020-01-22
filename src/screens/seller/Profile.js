import React, {useState} from 'react';
import {View, ImageBackground, Image} from 'react-native';
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
import s from '../../public/styles/SellerProfile';
import color, {headers} from '../../config';
import axios from 'axios';
import FormData from 'form-data';
import {BASE_URL, API_ENDPOINT} from 'react-native-dotenv';
import {toastr, showImagePicker} from '../../helpers/script';
import {ButtonPrimary} from '../../components/Button';

const Profile = ({navigation}) => {
  let [data, setData] = useState(navigation.state.params);
  let [config, setConfig] = useState({error: false, loading: false});
  const handleSubmit = () => {
    setConfig({loading: true, error: false});
    axios
      .patch(
        `${API_ENDPOINT}profile`,
        {
          ...data,
          name_of_seller: data.name,
          province_name: data.province1_name,
          province: data.province1,
          city: data.city1,
          address: data.address1,
          kecamatan: data.kecamatan1,
        },
        headers('application/json', data.token),
      )
      .then(() => {
        setConfig({loading: false, error: false});
        toastr('Profile successfully updated.', 'success');
        navigation.navigate('Account', {update: Math.random()});
      })
      .catch(() => {
        setConfig({loading: false, error: true});
        toastr('Failed to save profile.', 'danger');
      });
  };
  const pickImage = photo => {
    showImagePicker(res => {
      const {fileName, type, uri} = res;
      const form = new FormData();
      form.append('user_id', data.user_id);
      form.append('image', {uri, type, name: fileName});
      setConfig({loading: true, error: false});
      axios
        .patch(
          `${API_ENDPOINT}profile/upload-${photo}`,
          form,
          headers('multipart/form-data', data.token),
        )
        .then(() => {
          setConfig({loading: false, error: false});
          toastr('Profile successfully updated.', 'success');
          navigation.navigate('Account', {update: Math.random()});
        })
        .catch(() => {
          setConfig({loading: false, error: true});
          toastr('Failed to save profile. Check your network.', 'danger');
        });
    });
  };
  return (
    <Container>
      <Content>
        <ImageBackground
          source={{uri: `${BASE_URL}images/store/${data.photo_store}`}}
          style={[s.imgCover, sColor.primaryBgColor]}>
          <Button
            transparent
            light
            style={s.editCover}
            onPress={() => pickImage('store')}>
            <Text>Edit Cover</Text>
          </Button>
        </ImageBackground>
        <View style={sGlobal.center}>
          <ImageBackground
            source={{uri: `${BASE_URL}images/profile/${data.photo_profile}`}}
            imageStyle={s.imgProfileStyle}
            style={[s.imgProfile, sGlobal.center, sColor.lightBgColor]}>
            <Button transparent onPress={() => pickImage('seller')}>
              <Image
                source={require('../../public/images/no-image2.png')}
                style={[s.defaultImg, data.photo_profile && s.invisible]}
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
                  onChangeText={text => setData({...data, description: text})}
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

Profile.navigationOptions = {
  title: 'Edit Profile',
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
};

// hapus cuy
export default Profile;
