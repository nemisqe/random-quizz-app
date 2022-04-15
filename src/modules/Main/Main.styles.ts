import {StyleSheet} from 'react-native';
import {fontFamily} from '~/shared/layout';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '15%',
  },
  title: {
    fontFamily: fontFamily.anekOdia,
    fontSize: 22,
  },
});
