import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './Main.styles';
import {Button} from '~/shared/components/Button/Button';
import {Label} from '~/shared/components/Label/Label';
import {Container} from '~/shared/components/Container/Container';

const Main = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('Tests');
  };

  return (
    <Container style={styles.container}>
      <View style={[styles.wrapper]}>
        <Label style={styles.title}>Welcome to the Random Quizz!</Label>
        <Label>Let's choose your test</Label>
        <Button onPress={handleNavigation} label="Choose test" />
      </View>
    </Container>
  );
};

export {Main};
