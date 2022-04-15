import React from 'react';
import {View, ViewStyle} from 'react-native';
import {useColors} from '~/shared/hooks/useColors';
import {
  SafeAreaViewProps,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

interface Container extends SafeAreaViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const Container: React.FC<Container> = ({children, style, ...props}) => {
  const {backgroundColor} = useColors();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          backgroundColor,
          paddingTop: Math.max(insets.top, 16),
          paddingBottom: Math.max(insets.bottom, 8),
          flex: 1,
        },
        style,
      ]}
      {...props}>
      {children}
    </View>
  );
};

export {Container};
