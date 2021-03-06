import normalizeFontSize from './fontSize';

const AppStyles = {
  color: {
    COLOR_WHITE: '#FFFFFF',
    COLOR_LOADER: 'rgba(110,110,110,0.5)',
    COLOR_TRANSP: 'transparent',
    COLOR_BLACK: '#000000',
    COLOR_GREEN: '#35A535',
    COLOR_LIGHT_BLACK: '#303030',
    COLOR_TEXT_BLACK: '#010101',
    COLOR_LIGHT_GREY: '#989BA5',
    COLOR_LINE: '#E8E8E8',
    COLOR_TEXT_GREY: '#BEBEBE',
    COLOR_TEXTINPUT: '#FBF8F8',
    COLOR_APPCOLOR1: '#805DF9',
    COLOR_APPCOLOR2: '#664AC6',
    COLOR_DARKGREY: '#484848',
    COLOR_LIGHTWHITE: '#fafafa',
    COLOR_LIGHT_WHITE: '#f2f2f2',
    COLOR_DARK_GREEN: '#258A58',
    COLOR_PISTA: '#d1f5d0',
    COLOR_GREY: '#656363',
    COLOR_WHITE_LIGHT: '#F3F3F3',
    COLOR_DESC: '#3B566E',
    COLOR_GREY_WHITE: '#F2F5F8',
    COLOR_TEXT_INPUT: '#9DA0A9',
    COLOR_LIGHT_GREEN: '#c9ffc9',
    COLOR_GREY_FILTER: '#F8F8F8',
    COLOR_GREY_ROUND: '#BDBDBD',
    COLOR_ORANGE: '#EB8624',
    COLOR_BRIGHT_WHITE: '#FFFFFF',
  },

  font: {
    REGULAR: 'Poppins-Regular',
    MEDIUM: 'Poppins-Medium',
    BOLD: 'Poppins-Bold',
    ITALIC: 'Poppins-Italic',
  },
  fontSize: {
    MINI: normalizeFontSize(11),
    XMINI: normalizeFontSize(13),
    XXMINI: normalizeFontSize(15),
    REGULAR: normalizeFontSize(16),
    XREGULAR: normalizeFontSize(18),
    XXREGULAR: normalizeFontSize(20),
    LARGE: normalizeFontSize(22),
    XLARGE: normalizeFontSize(24),
    XXLARGE: normalizeFontSize(26),
    XXXLARGE: normalizeFontSize(30),
  },
};
export default AppStyles;
