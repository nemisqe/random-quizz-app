import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export const CELL_HEIGHT = height * 0.2;

export const TOP_HEIGHT_HEIGHT = height * 0.33;

export const TITLE_FONT_SIZE = height / 36;

export const fontFamily = {
  anekOdia: 'AnekOdia-Regular',
  plusJakarta: 'PlusJakartaSans-Regular',
};
