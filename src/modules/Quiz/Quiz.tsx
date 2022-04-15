import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import {GoBack} from '~/shared/components/GoBack/GoBack';
import {SharedElement} from 'react-navigation-shared-element';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import {styles} from '~/modules/Quiz/Quiz.styles';
import {TOP_HEIGHT_HEIGHT} from '~/shared/layout';
import {Question} from '~/modules/Quiz/components/Question/Question';
import TouchableScale from 'react-native-touchable-scale';

const {height} = Dimensions.get('window');

const fadeInBottom = {
  0: {
    opacity: 0,
    translateY: 20,
  },
  1: {
    opacity: 1,
    translateY: 0,
  },
};

const Quiz = ({route}) => {
  const {_data} = route.params;
  const insets = useSafeAreaInsets();
  const [bgImg, setBgImg] = useState(_data.questions[0].questionImage);
  const [rotateValue, setRotateValue] = useState(0);
  const imageRef = useRef<any>(null);
  const changeBg = useCallback((bgUrl: string) => {
    setBgImg(bgUrl);
  }, []);
  useEffect(() => {
    imageRef.current.startAnimation();
  }, [bgImg]);
  return (
    <View
      style={[
        styles.container,
        {height: height / 2.2},
        {paddingTop: Math.max(insets.top, 16)},
      ]}>
      <Animatable.Image
        ref={imageRef}
        animation={bgImg ? 'fadeInDown' : undefined}
        source={{uri: bgImg}}
        resizeMode="cover"
        style={[StyleSheet.absoluteFillObject, {height: height / 2.2}]}
      />
      <View style={styles.wrapper}>
        <GoBack style={styles.goBackButton} />
        <TouchableScale
          useNativeDriver
          onPress={() => setRotateValue(Math.floor(Math.random() * 360))}>
          <SharedElement id={`item.${_data.id}.image`}>
            <Image
              style={[
                styles.image,
                {transform: [{rotate: `${rotateValue}deg`}]},
              ]}
              source={{uri: _data.image}}
            />
          </SharedElement>
        </TouchableScale>
      </View>
      <SharedElement
        id="general.bg"
        style={[
          StyleSheet.absoluteFillObject,
          {transform: [{translateY: height}]},
        ]}>
        <View
          style={[
            StyleSheet.absoluteFillObject,
            {
              transform: [{translateY: -height + TOP_HEIGHT_HEIGHT}],
            },
            styles.questionContainer,
          ]}>
          <Animatable.View animation={fadeInBottom}>
            <Question questions={_data.questions} func={changeBg} />
          </Animatable.View>
        </View>
      </SharedElement>
    </View>
  );
};

Quiz.sharedElements = route => {
  const {_data} = route.params;
  return [
    {
      id: `item.${_data.id}.bg`,
    },
    {
      id: `item.${_data.id}.name`,
    },
    {
      id: `item.${_data.id}.image`,
    },
    {
      id: 'general.bg',
    },
  ];
};

export {Quiz};
