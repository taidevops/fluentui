/*
 FIXME: this is a temporary workaround - moving stories from react-examples
 reenable TS and fix errors in a subsequent PR
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import * as React from 'react';

export type ColorRampItemProps = {
  /** Name of the color */
  name?: string;

  /** A CSS color value */
  value?: string | number;
};

export const ColorRampItem: React.FunctionComponent<ColorRampItemProps> = props => {
  return <div>Hi</div>;
};
