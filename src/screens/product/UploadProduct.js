import React, {Component} from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Text, Button, Icon, Right} from 'native-base';
import s from '../../public/styles/upload-product';

class UploadProduct extends Component {
  render() {
    return (
      <>
        <ScrollView>
          <View style={[s.px4, s.jcCenter]}>
            <TouchableOpacity>
              <View style={s.headerContent}>
                <Image
                  style={s.avatar}
                  source={require('../../public/images/blank-img.jpg')}
                />
                <View style={s.icon}>
                  <Icon name="create" />
                </View>
              </View>
            </TouchableOpacity>
            <View>
              <View style={s.section}>
                <Text style={s.primaryColor}>Name Product</Text>
                <TextInput style={s.input} placeholder="apel" />
              </View>
              <View style={s.section}>
                <Text style={s.primaryColor}>Price</Text>
                <TextInput style={s.input} placeholder="Rp. 10.000" />
              </View>
              <View style={s.section}>
                <Text style={s.primaryColor}>Description</Text>
                <TextInput style={s.input} placeholder="apel kuy" />
              </View>
              <View style={s.section}>
                <Text style={s.primaryColor}>Stock</Text>
                <TextInput style={s.input} placeholder="25" />
              </View>
              <View style={[s.section, s.center]}>
                <Button style={s.buttonUpload}>
                  <Text style={s.textButtonUpload}>Upload Product</Text>
                </Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

export default UploadProduct;
