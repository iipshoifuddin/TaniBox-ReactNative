import {StyleSheet} from 'react-native';
import color from '../../config';
//Set flex 1, jc: 'around' or 'space-between' for perfect margin or centering to container
const s = StyleSheet.create({
  container: {width: '100%'},
  banner: {
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topRadius: {
    borderTopLeftRadius: 42,
    borderTopRightRadius: 42,
  },
  img: {
    width: '100%',
    height: 160,
  },
  primaryColor: {color: color.secondary},
  secondaryColor: {color: color.tertiary},
  lightColor: {color: color.light},
  primaryBgColor: {backgroundColor: color.primary},
  lightBgColor: {backgroundColor: color.light},
  header: {marginTop: 24, marginBottom: 12},
  register: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {width: 150, height: 24},
  section: {marginVertical: 15},
  input: {
    borderColor: '#000',
    borderBottomWidth: 0.5,
    paddingVertical: 4,
    fontSize: 18,
  },
  lightBorder: {borderColor: color.light},
  p4: {padding: 36},
  pt4: {paddingTop: 36},
  pb8: {paddingBottom: 36 * 2},
  px4: {paddingHorizontal: 36},
  py4: {paddingVertical: 36},
  my4: {marginVertical: 36},
  _mt4: {marginTop: -36},
  textCenter: {textAlign: 'center'},
  jcCenter: {justifyContent: 'center'},
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wAuto: {width: 'auto'},
});

export default s;
