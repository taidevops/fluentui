import * as React from 'react';
import { teamsLightTheme } from '../index';
import { FontFamilyTokens, FontSizeTokens } from '../index';

export default {
  title: 'Theme',
};

const theme = teamsLightTheme;

export const FontFamily = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px', alignItems: 'center' }}>
    {(Object.keys(theme).filter(tokenName => tokenName.startsWith('fontFamily')) as (keyof FontFamilyTokens)[]).map(
      fontFamily => [
        <div key={fontFamily}>{fontFamily}</div>,
        <div key={`${fontFamily}-value`} style={{ fontFamily: `${theme[fontFamily]}` }}>
          {theme[fontFamily]}Font family {fontFamily}
        </div>,
      ],
    )}
  </div>
);

export const FontSize = () => (
  <div style={{ fontFamily: theme.fontFamilyBase }}>
    <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '10px', alignItems: 'center' }}>
      {(Object.keys(theme).filter(tokenName => tokenName.startsWith('fontSize')) as (keyof FontSizeTokens)[]).map(
        fontSize => [
          <div key={fontSize}>{fontSize}</div>,
          <div key={`${fontSize}-value`} style={{ fontSize: theme[fontSize] }}>
            {fontSize}
          </div>,
        ],
      )}
    </div>
  </div>
);
