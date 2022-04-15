import {Dimensions, StyleSheet} from 'react-native';
import {fontFamily} from '~/shared/layout';
import {SPACING} from '~/shared/theme';

const {height} = Dimensions.get('window');

const CELL_HEIGHT = height * 0.28;

const TOP_HEIGHT_HEIGHT = height * 0.33;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    fontFamily: fontFamily.plusJakarta,
    fontSize: 22,
    width: 250,
    color: '#222',
    top: TOP_HEIGHT_HEIGHT - 150,
    left: SPACING,
  },
  itemImage: {
    width: CELL_HEIGHT * 0.65,
    height: CELL_HEIGHT * 0.65,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: SPACING * 3,
    right: SPACING,
  },
  quizInfoContainer: {height: TOP_HEIGHT_HEIGHT - 60},
});
