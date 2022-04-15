import {StyleSheet} from 'react-native';
import {CELL_HEIGHT, fontFamily} from '~/shared/layout';
import {SPACING, width} from '~/shared/theme';

export const styles = StyleSheet.create({
  name: {
    fontFamily: fontFamily.plusJakarta,
    fontSize: 22,
    width: 250,
    color: '#222',
    position: 'absolute',
  },
  description: {
    fontSize: 12,
    color: '#222',
    width: width * 0.6,
    textTransform: 'uppercase',
    marginTop: CELL_HEIGHT / 1.8,
  },
  itemImage: {
    width: CELL_HEIGHT * 0.65,
    height: CELL_HEIGHT * 0.65,
    position: 'absolute',
    bottom: 10,
    right: SPACING / 2,
  },
});
