import {StyleSheet} from 'react-native';

const flex = {
  flex: 1,
  justifyContent: 'center',
};

const flexRow = {
  ...flex,
  flexDirection: 'row',
};

const s = StyleSheet.create({
  flexRow,
  flexRowSpace: {
    ...flex,
    alignContent: 'space-between',
  },
  flexRowCenter: {
    ...flex,
    alignItems: 'center',
  },
  flexRowReverse: {
    ...flex,
    flexDirection: 'row-reverse',
  },
  textCenter: {textAlign: 'center'},
});

export default s;
