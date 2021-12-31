import { css } from '@microsoft/fast-element';
import { SystemColors } from '@microsoft/fast-web-utilities';
import {
  display,
  ElementDefinitionContext,
  focusVisible,
  forcedColorsStylesheetBehavior,
  FoundationElementDefinition,
} from '@microsoft/fast-foundation';

import {
  bodyFont,
  typeRampBaseFontSize,
} from '../../design-tokens';

export const baseButtonStyles = (

) =>
  css`
    ${display('inline-flex')} :host {
      position: relative;
      box-sizing: border-box;
      font-family: ${bodyFont};
      outline: none;
      font-size: ${typeRampBaseFontSize};
      fill: currentcolor;
      cursor: pointer;
    };
  `;
