import {StyleSheet} from 'react-native';
import {SPACING} from '~/shared/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  questionContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  image: {
    width: 70,
    height: 70,
    alignSelf: 'flex-end',
    marginRight: SPACING,
  },
  goBackButton: {marginLeft: SPACING},
});
