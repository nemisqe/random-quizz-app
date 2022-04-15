import React from 'react';

import {Provider} from 'react-redux';
import {store} from '~/redux/store';
import {Main} from '~/modules/Main';
import {NavigationContainer} from '@react-navigation/native';
import {TestsList} from '~/modules/TestsList/TestsList';
import {CarouselCard} from '~/shared/components/Carousel/CarouselCard';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {Easing} from 'react-native';
import {Quiz} from '~/modules/Quiz/Quiz';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export type MainStackParamsList = {
  Main: undefined;
  Tests: undefined;
  CarouselCard: undefined;
  Quiz: undefined;
};

const Stack = createSharedElementStackNavigator<MainStackParamsList>();

const options = {
  gestureEnabled: false,
  headerBackTitleVisible: false,
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {duration: 400, easing: Easing.inOut(Easing.ease)},
    },
    close: {
      animation: 'timing',
      config: {duration: 400, easing: Easing.inOut(Easing.ease)},
    },
  },
  cardStyleInterpolator: ({current: {progress}}) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              options={() => options}
              name="Main"
              component={Main}
            />
            <Stack.Screen
              name="Tests"
              component={TestsList}
              options={() => options}
            />
            <Stack.Screen
              name="CarouselCard"
              component={CarouselCard}
              options={() => options}
            />
            <Stack.Screen
              name="Quiz"
              component={Quiz}
              options={() => options}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
