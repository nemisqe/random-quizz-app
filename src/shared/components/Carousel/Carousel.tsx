import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import TouchableScale from 'react-native-touchable-scale';
import {colors} from '~/shared/components/Carousel/data';
import {SPACING} from '~/shared/theme';
import {CELL_HEIGHT} from '~/shared/layout';
import {styles} from '~/shared/components/Carousel/Carousel.styles';

const {height} = Dimensions.get('window');

const Carousel = ({navigation, quizzes}) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={quizzes}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{margin: SPACING}}
        renderItem={({item: {_data}, index}) => {
          return (
            <TouchableScale
              activeScale={0.9}
              tension={20}
              friction={7}
              useNativeDriver
              onPress={() => navigation.push('CarouselCard', {_data})}
              style={{height: CELL_HEIGHT, marginBottom: SPACING}}>
              <View style={{flex: 1, padding: SPACING}}>
                <SharedElement
                  id={`item.${_data.id}.bg`}
                  style={[StyleSheet.absoluteFillObject]}>
                  <View
                    style={[
                      StyleSheet.absoluteFillObject,
                      {
                        borderRadius: 16,
                        backgroundColor: colors[index % colors.length],
                      },
                    ]}
                  />
                </SharedElement>
                <SharedElement
                  id={`item.${_data.id}.image`}
                  style={[StyleSheet.absoluteFillObject]}>
                  <Image source={{uri: _data.image}} style={styles.itemImage} />
                </SharedElement>
                <SharedElement id={`item.${_data.id}.name`}>
                  <Text style={styles.name}>{_data.quizName}</Text>
                </SharedElement>
                <Text numberOfLines={3} style={styles.description}>
                  {_data.shortDescription}
                </Text>
              </View>
            </TouchableScale>
          );
        }}
      />
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
              transform: [{translateY: 0}],
              borderTopLeftRadius: 48,
              borderTopRightRadius: 48,
            },
          ]}
        />
      </SharedElement>
    </View>
  );
};

export {Carousel};
