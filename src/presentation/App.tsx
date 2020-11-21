import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Screens from './screens';
import {RootStackParamList} from './RootStackParamList';
import {Routes} from './Routes';

const Stack = createStackNavigator<RootStackParamList>();

export const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={Routes.Blog} component={Screens.Blog} />
    </Stack.Navigator>
  </NavigationContainer>
);
