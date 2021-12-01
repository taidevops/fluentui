import type { ComponentProps, ComponentState, IntrinsicShorthandProps } from '@tai-ui/react-utilities';

/**
 * Text slots
 */
export type TextSlots = {
  root: IntrinsicShorthandProps<'span', 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'pre'>;
};

export type TextCommons = {
  /**
   * Wraps the text content on white spaces.
   *
   * @defaultValue true
   */
  wrap: boolean;
};

/**
 * Text Props
 */
export type TextProps = ComponentProps<TextSlots> & Partial<TextCommons>;

/**
 * State used in rendering Text
 */
export type TextState = ComponentState<TextSlots> & TextCommons;
