import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';
import * as Screens from './screens';
import {
  createPaperTheme,
  createReactNavigationTheme,
  DefaultLightThemeColors,
} from './theme';
import {RootStackParamList} from './RootStackParamList';
import {Routes} from './Routes';

const Stack = createStackNavigator<RootStackParamList>();

export const App = () => {
  const colorsSet = DefaultLightThemeColors;
  return (
    <PaperProvider theme={createPaperTheme(colorsSet)}>
      <NavigationContainer theme={createReactNavigationTheme(colorsSet)}>
        <Stack.Navigator>
          <Stack.Screen name={Routes.Blog} component={Screens.Blog} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
