import {StyleSheet} from 'react-native';
import color from '../../config';

const s = StyleSheet.create({
  imgCover: {
    height: 150,
    position: 'relative',
  },
  editCover: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  imgProfileStyle: {borderRadius: 75 / 2},
  imgProfile: {
    width: 75,
    height: 75,
    marginTop: -75 / 2,
    borderRadius: 75 / 2,
    borderColor: color.secondary,
    borderWidth: 2.5,
  },
  defaultImg: {
    width: 25,
    height: 25,
  },
  listInput: {
    flexWrap: 'wrap',
    paddingTop: 0,
    paddingBottom: 0,
  },
  inputDescription: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  inputHeight: {
    height: 50,
  },
  fzInput: {fontSize: 17},
  descriptionText: {
    alignSelf: 'flex-start',
  },
  invisible: {opacity: 0},
  flex: {flex: 1, justifyContent: 'center'},
  textRight: {textAlign: 'right'},
  textLeft: {textAlign: 'left'},
  noBorderBottom: {borderBottomWidth: 0},
  _pb: {paddingBottom: 0},
  _py: {paddingTop: 0, paddingBottom: 0},
  _px: {paddingLeft: 0, paddingRight: 0},
  _ml: {marginLeft: 0},
});

export default s;
