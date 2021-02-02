import {StyleSheet} from 'react-native';
import AppStyle from '../../config/appStyle';
import {hp, wp} from '../../config/metric';
const {color, font, fontSize} = AppStyle || {};

const style = StyleSheet.create({
  contaniner: {
    marginHorizontal: 10,
  },
  subContainer: {
    borderWidth: 1,
    borderColor: color.COLOR_LIGHT_GREY,
    borderRadius: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    backgroundColor: color.COLOR_APPCOLOR1,
    paddingLeft: 10,
    paddingVertical: 3,
    marginLeft: 5,
  },
  itemText: {
    fontFamily: font.REGULAR,
    fontSize: fontSize.XMINI,
    alignItems: 'center',
    color: color.COLOR_BRIGHT_WHITE,
  },
  crossImg: {
    tintColor: color.COLOR_BRIGHT_WHITE,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    marginTop: 5,
  },
});

export default style;
