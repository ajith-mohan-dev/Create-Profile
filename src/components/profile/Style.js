import {StyleSheet} from 'react-native';
import AppStyle from '../../config/appStyle';
import {hp, wp} from '../../config/metric';
const {color, font, fontSize} = AppStyle || {};

const style = StyleSheet.create({
  contaniner: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: wp(100),
  },
  imgContainer: {
    paddingTop: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: wp(40),
  },
  imgView: {
    resizeMode: 'contain',
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  formContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: wp(57),
  },
  nameView: {
    borderWidth: 1,
    borderColor: color.COLOR_LIGHT_GREY,
    borderRadius: 8,
    marginTop: 10,
  },
  nameTextInput: {
    width: wp(55),
    fontFamily: font.REGULAR,
    fontSize: fontSize.REGULAR,
    paddingHorizontal: 10,
    color: color.COLOR_TEXT_BLACK,
  },
  desView: {
    borderWidth: 1,
    borderColor: color.COLOR_LIGHT_GREY,
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: color.COLOR_BRIGHT_WHITE,
  },
  desTextInput: {
    height: hp(15),
    fontSize: fontSize.REGULAR,
    fontFamily: font.REGULAR,
    color: color.COLOR_TEXT_BLACK,
  },
});

export default style;
