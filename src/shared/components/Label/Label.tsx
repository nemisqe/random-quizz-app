import React from 'react';
import {Text, TextStyle} from 'react-native';
import {styles} from '~/shared/components/Label/Label.styles';
import {useColors} from '~/shared/hooks/useColors';

type Label = {
  children: React.ReactNode;
  style?: TextStyle;
};

const Label: React.FC<Label> = ({children, style}) => {
  const {textColor: color} = useColors();
  return <Text style={[styles.text, {color}, style]}>{children}</Text>;
};

export {Label};
