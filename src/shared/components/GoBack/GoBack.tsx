import * as React from 'react';
import {useNavigation} from '@react-navigation/core';
import { Image, TouchableOpacity, ViewStyle } from "react-native";

type GoBack = {
  style?: ViewStyle;
};

const GoBack: React.FC<GoBack> = ({style}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: 'rgba(255,255,255,0.8)',
          borderRadius: 100,
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'flex-start',
          padding: 8,
          zIndex: 2,
        },
        style,
      ]}
      onPress={() => {
        // animation(0).start()
        navigation.goBack();
      }}>
      <Image
        source={{uri: 'https://img.icons8.com/stickers/344/double-left.png'}}
        style={{width: 22, height: 22}}
      />
    </TouchableOpacity>
  );
};

export {GoBack};
