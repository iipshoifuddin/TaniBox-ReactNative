import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'native-base';
import sColor from '../public/styles/color';
import sGlobal from '../public/styles/';

export const ButtonPrimary = ({text, children, handleSubmit}) => {
  return (
    <View style={s.button}>
      <Button
        style={[sGlobal.center, sColor.secondaryBgColor]}
        onPress={handleSubmit}>
        {children ? children : <Text>{text}</Text>}
      </Button>
    </View>
  );
};

const s = StyleSheet.create({
  button: {
    paddingHorizontal: 32,
    marginTop: 45,
    marginBottom: 15,
  },
});
