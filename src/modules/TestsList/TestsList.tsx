import React, {useEffect} from 'react';
import {createStructuredSelector} from 'reselect';
import {getQuizzesList} from '~/redux/actions/quizzes';
import {connect} from 'react-redux';
import {getQuizzes} from '~/redux/sagas/quizzes';
import {Container} from '~/shared/components/Container/Container';
import {styles} from '~/modules/TestsList/TestsList.styles';
import {Carousel} from '~/shared/components/Carousel/Carousel';

const TestsListScreen = ({quizzes, navigation}) => {
  useEffect(() => {
    getQuizzes();
  }, []);

  return (
    <Container style={styles.container}>
      <Carousel quizzes={quizzes.quizzes} navigation={navigation} />
    </Container>
  );
};

const structuredSelector = createStructuredSelector({
  quizzes: state => state.quizzes,
});

const mapDispatchToProps = {getQuizzesList};

export const TestsList = connect(
  structuredSelector,
  mapDispatchToProps,
)(TestsListScreen);
