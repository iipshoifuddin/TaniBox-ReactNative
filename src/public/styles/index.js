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
    ...flexRow,
    alignContent: 'space-between',
  },
  flexRowAround: {
    ...flexRow,
    justifyContent: 'space-around',
  },
  flexRowCenter: {
    ...flexRow,
    alignItems: 'center',
  },
  flexRowReverse: {
    ...flex,
    flexDirection: 'row-reverse',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {textAlign: 'center'},
});

export default s;
