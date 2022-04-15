import {StyleSheet} from 'react-native';
import {fontFamily, TITLE_FONT_SIZE} from '~/shared/layout';
import {SPACING} from '~/shared/theme';

export const styles = StyleSheet.create({
  question: {
    fontFamily: fontFamily.anekOdia,
    fontSize: TITLE_FONT_SIZE,
    textAlign: 'center',
  },
  flatlist: {width: '100%'},
  nextButton: {
    backgroundColor: '#DDA28F',
    paddingHorizontal: SPACING * 2,
    paddingVertical: SPACING / 1.5,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginLeft: SPACING,
    marginTop: SPACING,
  },
});
