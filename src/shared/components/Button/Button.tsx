import React from 'react';
import { Text, Pressable, View, ViewStyle } from "react-native";
import {styles} from './Button.styles';

type Button = {
  onPress: () => void;
  containerStyles?: ViewStyle;
  label: string;
};

const Button: React.FC<Button> = ({onPress, containerStyles, label}) => {
  return (
    <View style={[styles.container, containerStyles]}>
      <Pressable onPress={onPress}>
        <Text style={styles.label}>{label}</Text>
      </Pressable>
    </View>
  );
};

Button.defaultProps = {
  label: 'Button',
};

export {Button};
