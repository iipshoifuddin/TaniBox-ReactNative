import React, {useEffect, useState} from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Label,
  Picker,
  Input,
} from 'native-base';
import axios from 'axios';
import {API_ENDPOINT} from 'react-native-dotenv';
import {toastr} from '../../helpers/script';
import {ButtonPrimary} from '../../components/Button';
import sGlobal from '../../public/styles/index';
import {headers} from '../../config';

const Address = ({navigation}) => {
  const [data, setData] = useState(navigation.state.params);
  const [province, setProvince] = useState({data: [], key: 0, change: false});
  const [city, setCity] = useState({data: [], key: 0});
  const [config, setConfig] = useState({error: false, loading: false});
  useEffect(() => {
    axios
      .get(`${API_ENDPOINT}shipment/province`)
      .then(_ => {
        const res = _.data.data;
        const key = res.findIndex(
          obj => obj.province_id === data.province1.toString(),
        );
        setProvince({...province, data: [...res], key});
      })
      .catch(() => {
        toastr('Network error');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const endpoint = province.key
      ? `?province_id=${province.data[province.key].province_id}`
      : '';
    axios
      .get(`${API_ENDPOINT}shipment/city${endpoint}`)
      .then(_ => {
        const res = _.data.data;
        const key = res.findIndex(obj => obj.city_id === data.city1.toString());
        setCity({...city, data: res, key});
      })
      .catch(() => {
        toastr('Network error');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [province.key]);
  const handleSubmit = () => {
    const address = city.data[city.key];
    setConfig({loading: true, error: false});
    axios
      .patch(
        `${API_ENDPOINT}profile`,
        {
          ...data,
          ...address,
          name_of_seller: data.name,
          province_name: address.province,
          province: address.province_id,
          city: address.city_id,
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
  return (
    <Container>
      <Content padder>
        <Form>
          <Item stackedLabel>
            <Label>Province</Label>
            <Picker
              note
              mode="dropdown"
              style={sGlobal.wFull}
              selectedValue={province.key}
              onValueChange={value =>
                setProvince({...province, key: value, change: true})
              }>
              {province.data.map((elm, i) => (
                <Picker.Item key={i} label={elm.province} value={i} />
              ))}
            </Picker>
          </Item>
          <Item stackedLabel>
            <Label>City</Label>
            <Picker
              note
              mode="dropdown"
              style={sGlobal.wFull}
              selectedValue={city.key}
              onValueChange={value => setCity({...city, key: value})}>
              {city.data.map((elm, i) => (
                <Picker.Item
                  key={i}
                  label={
                    elm.type === 'Kota'
                      ? `Kota ${elm.city_name}`
                      : elm.city_name
                  }
                  value={i}
                />
              ))}
            </Picker>
          </Item>
          <Item stackedLabel>
            <Label>Postal Code</Label>
            <Input
              editable={false}
              placeholder="Postal code"
              value={
                city.data[city.key]
                  ? city.data[city.key].postal_code
                  : 'Postal code'
              }
            />
          </Item>
          <Item stackedLabel>
            <Label>Sub-district</Label>
            <Input
              placeholder="Kecamatan"
              value={data.kecamatan1}
              onChangeText={text => setData({...data, kecamatan1: text})}
            />
          </Item>
          <Item stackedLabel>
            <Label>Detail Address</Label>
            <Input
              multiline={true}
              placeholder="e.g., Jalan Kehidupan No. 1"
              value={data.address1}
              onChangeText={text => setData({...data, address1: text})}
            />
          </Item>
          <ButtonPrimary text="Save" handleSubmit={handleSubmit} />
        </Form>
      </Content>
    </Container>
  );
};

export default Address;
