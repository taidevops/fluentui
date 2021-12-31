import type { ComponentProps, IntrinsicShorthandProps } from '@tai-ui/react-utilities';

export type AccordionCommons = {
  /**
   * Indicates if keyboard navigation is available
   */
  navigable: boolean;
  /**
   * Indicates if Accordion support multiple Panels opened at the same time
   */
  multiple: boolean;
  /**
   * Indicates if Accordion support multiple Panels closed at the same time
   */
  collapsible: boolean;
};

export type AccordionSlots = {
  root: IntrinsicShorthandProps<'div'>;
};

export type AccordionProps = ComponentProps<AccordionSlots>;
