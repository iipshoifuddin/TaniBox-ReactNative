import {StyleSheet} from 'react-native';

export const font = size => {
  const s = StyleSheet.create({fontSize: {fontSize: size}});
  return s.fontSize;
};
