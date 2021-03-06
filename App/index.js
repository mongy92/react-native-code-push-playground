import React from 'react';
import QuizIndex from './screens/QuizIndex';
import Quiz from './screens/Quiz';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Updating from './screens/Updating';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={QuizIndex}
          name={'QuizIndex'}
          options={{title: 'Quizzes'}}
        />
        <Stack.Screen
          component={Quiz}
          name={'Quiz'}
          options={({route}) => {
            const {params} = route;
            return {
              title: params?.title,
              headerStyle: {
                backgroundColor: params?.color,
                borderBottomColor: params?.color,
              },
            };
          }}
        />
        <Stack.Screen
          component={Updating}
          name={'Updating'}
          options={{headerShown: false, ...TransitionPresets.ModalTransition}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
