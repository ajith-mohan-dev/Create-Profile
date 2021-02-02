import {StyleSheet} from 'react-native';
import AppStyle from '../../config/appStyle';
import {hp, wp} from '../../config/metric';
const {color, font, fontSize} = AppStyle || {};

const style = StyleSheet.create({
  contaniner: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
  },
  uploadBox: {
    borderRadius: 5,
    backgroundColor: color.COLOR_TEXT_GREY,
    height: 120,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  txt: {
    fontSize: fontSize.REGULAR,
    fontFamily: font.REGULAR,
    color: color.COLOR_TEXT_BLACK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {marginHorizontal: 14, marginVertical: 40},
  plusIcon: {
    resizeMode: 'contain',
    width: 30,
    height: 50,
  },
  modalView: {
    position: 'absolute',
    alignItems: 'flex-end',
    zIndex: 1,
    top: -5,
    right: 0,
  },
  crossIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: color.COLOR_WHITE,
  },
  renderImg: {
    width: 120,
    height: 120,
    borderRadius: 12,
  },
});

export default style;
