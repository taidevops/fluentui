import * as React from 'react';
import { getNativeElementProps } from '@tai-ui/react-utilities';
import type { TextProps, TextState } from './Text.types';

export const useText = (props: TextProps, ref: React.Ref<HTMLElement>): TextState => {
  const { wrap } = props;
  const as = props.as ?? 'span';

  const state: TextState = {
    wrap: wrap ?? true,

    components: { root: 'span' },

    root: getNativeElementProps(as, {
      ref,
      ...props,
      as,
    }),
  };

  return state;
};
