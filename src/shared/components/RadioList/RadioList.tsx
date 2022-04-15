import React, {SetStateAction, useCallback, useState} from 'react';
import TouchableScale from 'react-native-touchable-scale';
import {GestureResponderEvent, Text, View, ViewStyle} from 'react-native';
import {styles} from '~/shared/components/RadioList/RadioList.styles';
import {SPACING} from '~/shared/theme';

type RadioList = {
  items: Array<any>;
  style?: ViewStyle;
  onPress: (args: any) => void;
};

const RadioList: React.FC<RadioList> = ({items, style, onPress}) => {
  const [checked, setChecked] =
    useState<SetStateAction<number | GestureResponderEvent>>(0);

  const handleItemPress = (
    item: SetStateAction<number | GestureResponderEvent>,
  ) => {
    setChecked(item);
  };
  return (
    <View style={style}>
      {items.map((item, index) => (
        <TouchableScale
          onPress={() => {
            handleItemPress(index);
            onPress(item);
          }}
          style={[
            {
              alignSelf: 'flex-start',
              flexDirection: 'row',
              marginBottom: SPACING,
            },
          ]}
          key={item}
          useNativeDriver>
          <Text
            style={[
              styles.text,
              checked === index && {
                color: 'blue',
              },
            ]}>{`${index + 1}. ${item}`}</Text>
        </TouchableScale>
      ))}
    </View>
  );
};

export default React.memo(RadioList);
