import {StyleSheet} from 'react-native';
import color from '../../config';

const s = StyleSheet.create({
  verifCode: {
    marginHorizontal: 10,
    marginTop: 5,
  },
  input: {
    fontSize: 18,
  },
  inputCode: {
    width: 32,
    borderColor: color.primary,
    borderBottomWidth: 0.7,
    textAlign: 'center',
    paddingHorizontal: 5,
    fontSize: 24,
  },
  img: {width: 125, height: 125},
  inputContainer: {
    marginTop: 5,
    marginBottom: 42,
  },
  banner: {
    marginTop: 50,
    paddingBottom: 28,
  },
  button: {paddingHorizontal: 42, paddingVertical: 5},
  mb_2: {marginBottom: 10},
});

export default s;
