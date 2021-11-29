const toObjectMap = (...items: (string[] | Record<string, number>)[]) => {
  const result: Record<string, number> = {};

  for (const item of items) {
    const keys = Array.isArray(item) ? item : Object.keys(item);

    for (const key of keys) {
      result[key] = 1;
    }
  }

  return result;
};

/**
 * An array of events that are allowed on every html element type.
 *
 * @public
 */
export const baseElementEvents = toObjectMap(['onAuxClick']);

/**
 * An array of element attributes which are allowed on every html element type.
 *
 * @public
 */
export const baseElementProperties = toObjectMap([
  'accessKey', // global
]);

/**
 * An array of HTML element properties and events.
 *
 * @public
 */
export const htmlElementProperties = toObjectMap(baseElementProperties, baseElementEvents);

/**
 * An array of LABEL tag properties and events.
 *
 * @public
 */
export const labelProperties = toObjectMap(htmlElementProperties, [
  'form', // button, fieldset, input, label, meter, object, output, select, textarea
]);

/**
 * Gets native supported props for an html element provided the allowance set. Use one of the property
 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
 * props set. Note that all data- and aria- prefixed attributes will be allowed.
 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
 * the component after an onClick function is added, then the getNativeProps onClick will override it.
 *
 * @public
 * @param props - The unfiltered input props
 * @param allowedPropsNames - The array or record of allowed prop names.
 * @returns The filtered props
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getNativeProps<T extends Record<string, any>>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: Record<string, any>,
  allowedPropNames: string[] | Record<string, number>,
  excludedPropNames?: string[],
): T {
  // It'd be great to properly type this while allowing 'aria-` and 'data-' attributes like TypeScript does for
  // JSX attributes, but that ability is hardcoded into the TS compiler with no analog in TypeScript typings.
  // Then we'd be able to enforce props extends native props (including aria- and data- attributes), and then
  // return native props.
  // We should be able to do this once this PR is merged: https://github.com/microsoft/TypeScript/pull/26797

  const isArray = Array.isArray(allowedPropNames);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: Record<string, any> = {};
  const keys = Object.keys(props);

  for (const key of keys) {
    const isNativeProp =
      (!isArray && (allowedPropNames as Record<string, number>)[key]) ||
      (isArray && (allowedPropNames as string[]).indexOf(key) >= 0) ||
      key.indexOf('data-') === 0 ||
      key.indexOf('aria-') === 0;

    if (isNativeProp && (!excludedPropNames || excludedPropNames?.indexOf(key) === -1)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      result[key] = props![key] as any;
    }
  }

  return result as T;
}
