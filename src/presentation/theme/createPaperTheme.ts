import {DefaultTheme} from 'react-native-paper';
import {ColorsSet} from './ColorsSet';

type PaperTheme = typeof DefaultTheme;

export const createPaperTheme = (colorsSet: ColorsSet) =>
  <PaperTheme>{
    ...DefaultTheme,
    colors: {
      primary: colorsSet.primary,
      accent: colorsSet.secondary,
      text: colorsSet.text,
      background: colorsSet.background,
    },
  };
