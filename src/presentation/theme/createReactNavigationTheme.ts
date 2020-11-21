import {DefaultTheme, Theme} from '@react-navigation/native';
import {ColorsSet} from './ColorsSet';

export const createReactNavigationTheme = (colorsSet: ColorsSet) =>
  <Theme>{
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colorsSet.primary,
      background: colorsSet.background,
      text: colorsSet.text,
    },
  };
