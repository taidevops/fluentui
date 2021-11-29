import * as React from 'react';
import { labelProperties, htmlElementProperties, getNativeProps } from './properties';
const nativeElementMap: Record<string, Record<string, number>> = {
  label: labelProperties,
};

/**
 * Given an element tagname and user props, filters the props to only allowed props for the given
 * element type.
 * @param tagName - Tag name (e.g. "div")
 * @param props - Props object
 * @param excludedPropNames - List of props to disallow
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getNativeElementProps<TAttributes extends React.HTMLAttributes<any>>(
  tagName: string,
  props: {},
  excludedPropNames?: string[],
): TAttributes {
  const allowedPropNames = (tagName && nativeElementMap[tagName]) || htmlElementProperties;
  allowedPropNames.as = 1;

  return getNativeProps(props, allowedPropNames, excludedPropNames);
}
