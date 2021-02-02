import {Dimensions, Platform, PixelRatio} from 'react-native';
const {width, height} = Dimensions.get('window');

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

export const wp = (percentage) => {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
};

export const hp = (percentage) => {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
};
