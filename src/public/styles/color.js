import {StyleSheet} from 'react-native';
import color from '../../config';

const s = StyleSheet.create({
  darkestColor: {color: color.primary},
  primaryColor: {color: color.secondary},
  secondaryColor: {color: color.tertiary},
  grayColor: {color: color.gray},
  regularGrayColor: {color: color.regularGray},
  lightColor: {color: color.light},
  lightGrayColor: {color: color.lightGray},
  paleGrayColor: {color: color.paleGray},
  primaryBgColor: {backgroundColor: color.primary},
  secondaryBgColor: {backgroundColor: color.secondary},
  grayBgColor: {backgroundColor: color.gray},
  lightBgColor: {backgroundColor: color.light},
});

export default s;
