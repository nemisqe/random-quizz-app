import React, {useCallback, useState} from 'react';
import {Dimensions, FlatList, Text, View} from 'react-native';
import {styles} from '~/modules/Quiz/components/Question/Question.styles';
import RadioList from '~/shared/components/RadioList/RadioList';
import * as Animatable from 'react-native-animatable';
import {SPACING} from '~/shared/theme';
import TouchableScale from 'react-native-touchable-scale';
import {fontFamily} from '~/shared/layout';

const {width} = Dimensions.get('window');

const Question = ({func, questions}) => {
  const [display, setDisplay] = useState(1);
  const [answer, setAnswer] = useState('');
  const handleAnswerPress = useCallback((selectedAnswer: string) => {
    console.log('pressed');
    setAnswer(selectedAnswer);
  }, []);
  const RenderItem = useCallback(
    ({item}) => (
      <View style={{width}}>
        <View style={{padding: SPACING}}>
          <Animatable.Text animation="fadeIn" style={styles.question}>
            {item.question}
          </Animatable.Text>
          <Animatable.View animation="fadeIn" delay={100}>
            <RadioList
              onPress={handleAnswerPress}
              style={{marginTop: SPACING * 2}}
              items={item.answers}
            />
          </Animatable.View>
        </View>
      </View>
    ),
    [handleAnswerPress],
  );
  return (
    <Animatable.View animation="fadeInRight">
      <FlatList
        style={styles.flatlist}
        data={questions.slice(display - 1, display)}
        horizontal={true}
        snapToAlignment="center"
        bounces={false}
        scrollEnabled={false}
        renderItem={RenderItem}
      />
      <TouchableScale
        style={styles.nextButton}
        onPress={() => {
          if (display !== questions.length) {
            func(questions[display].questionImage);
            setDisplay(display + 1);
          }
        }}>
        <Text style={{fontFamily: fontFamily.plusJakarta, fontSize: 18}}>
          {display !== questions.length ? 'next' : 'finish quiz'}
        </Text>
      </TouchableScale>
    </Animatable.View>
  );
};

export {Question};
