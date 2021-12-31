import { fontSizes, fontFamilies } from '../global/index';
import type { Theme } from '../types';

export const createLightTheme: () => Theme = () => {
  return {
    ...fontSizes,
    ...fontFamilies,
  };
};
