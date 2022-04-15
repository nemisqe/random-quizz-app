import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import * as Animatable from 'react-native-animatable';
import {ScrollView} from 'react-native-gesture-handler';
import {SPACING} from '~/shared/theme';
import {iconColors} from '~/shared/components/Carousel/data';
import {GoBack} from '~/shared/components/GoBack/GoBack';
import {Button} from '~/shared/components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {fontFamily, TOP_HEIGHT_HEIGHT} from '~/shared/layout';
import {styles} from '~/shared/components/Carousel/CarouselCard.styles';

const {height} = Dimensions.get('window');

class AntDesign extends React.Component<any, any> {
  render() {
    return (
      <Animatable.View>
        <Animatable.Image
          style={{width: 100, height: 100}}
          source={{
            uri: this.props.uri,
          }}
        />
      </Animatable.View>
    );
  }
}

const DURATION = 400;

const fadeInBottom = {
  0: {
    opacity: 0,
    translateY: 10,
  },
  1: {
    opacity: 1,
    translateY: 0,
  },
};
const CarouselCard = ({route}) => {
  const {_data} = route.params;
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingTop: Math.max(insets.top, 16)}]}>
      <StatusBar hidden />
      <GoBack style={{marginLeft: SPACING}} />
      <SharedElement
        id={`item.${_data.id}.bg`}
        style={[StyleSheet.absoluteFillObject]}>
        <View
          style={[
            StyleSheet.absoluteFillObject,
            {
              borderRadius: 0,
              backgroundColor: _data.color,
              height: TOP_HEIGHT_HEIGHT + 32,
            },
          ]}
        />
      </SharedElement>
      <View style={styles.quizInfoContainer}>
        <SharedElement
          id={`item.${_data.id}.image`}
          style={[StyleSheet.absoluteFillObject]}>
          <Image source={{uri: _data.image}} style={styles.itemImage} />
        </SharedElement>
        <SharedElement id={`item.${_data.id}.name`}>
          <Text style={styles.name}>{_data.quizName}</Text>
        </SharedElement>
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
              backgroundColor: 'white',
              transform: [{translateY: -height + TOP_HEIGHT_HEIGHT}],
              borderTopLeftRadius: 32,
              borderTopRightRadius: 32,
            },
          ]}>
          <ScrollView
            style={{flexGrow: 0, height: height - TOP_HEIGHT_HEIGHT}}
            showsVerticalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: SPACING * 4,
              }}>
              {_data.descriptionImages.map((icon, index) => {
                return (
                  <Animatable.View
                    animation="bounceIn"
                    delay={DURATION + index * 100}
                    key={icon}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 64,
                      height: 64,
                      borderRadius: 64,
                      backgroundColor: iconColors[index],
                    }}>
                    <AntDesign uri={icon} />
                  </Animatable.View>
                );
              })}
            </View>
            <View style={{marginTop: SPACING * 3, marginHorizontal: SPACING}}>
              <Animatable.View
                animation={fadeInBottom}
                delay={DURATION + 400}
                style={{marginBottom: SPACING}}>
                <Text
                  style={{
                    fontFamily: fontFamily.anekOdia,
                    fontSize: 20,
                    lineHeight: 30,
                    marginTop: SPACING,
                    marginBottom: SPACING * 2,
                  }}>
                  {_data.fullDescription}
                </Text>
                <Button
                  label="Start quiz"
                  containerStyles={{alignSelf: 'center'}}
                  onPress={() => navigation.navigate('Quiz', {_data})}
                />
              </Animatable.View>
            </View>
          </ScrollView>
        </View>
      </SharedElement>
    </View>
  );
};

CarouselCard.sharedElements = (route, otherRoute, showing) => {
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

export {CarouselCard};
