import {StyleSheet} from 'react-native';
import color from '../../config';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
//Set flex 1, jc: 'around' or 'space-between' for perfect margin or centering to container
const s = StyleSheet.create({
  flexCenter: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  container: {
    width: wp('100%'),
    flex: 1,
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderColor: 'white',
    marginBottom: 10,
  },
  icon: {
    position: 'absolute',
    top: 35,
    right: 110,
  },
  centerRotate: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: wp('80%'),
    height: hp('36%'),
  },
  primaryColor: {
    color: color.secondary,
  },
  secondaryColor: {
    color: color.tertiary,
  },
  primaryBgColor: {
    backgroundColor: color.primary,
  },
  header: {
    marginTop: 24,
    marginBottom: 12,
  },
  register: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    width: 150,
    height: 24,
  },
  section: {
    marginVertical: 15,
  },
  input: {
    borderColor: '#000',
    borderBottomWidth: 0.5,
    paddingVertical: 4,
    fontSize: 18,
  },
  px4: {
    paddingHorizontal: 36,
  },
  textCenter: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  jcCenter: {
    justifyContent: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wAuto: {
    width: 'auto',
  },
  buttonUpload: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.primary,
    marginBottom: 20,
    width: 176,
    height: 43,
    borderRadius: 50,
  },
  textButtonUpload: {
    color: color.secondary,
    fontSize: 15,
  },
  topRadius: {
    borderTopLeftRadius: 42,
    borderTopRightRadius: 42,
  },
  lightColor: {
    color: color.light,
  },
  lightBgColor: {
    backgroundColor: color.light,
  },
  lightBorder: {
    borderColor: color.light,
  },
  p4: {
    padding: 36,
  },
  pt4: {
    paddingTop: 36,
  },
  pb8: {
    paddingBottom: 55,
  },
  py4: {
    paddingVertical: 36,
  },
  my4: {
    marginVertical: 36,
  },
  _mt4: {
    marginTop: -36,
  },
});

export default s;
