import {useColorScheme} from 'react-native';

const useColors = () => {
  const isDark = useColorScheme() === 'dark';
  const backgroundColor = isDark ? '#000' : '#fff';
  const textColor = isDark ? '#fff' : '#000';
  return {
    backgroundColor,
    textColor,
  };
};

export {useColors};
