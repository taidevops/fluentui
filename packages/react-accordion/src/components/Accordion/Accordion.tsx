import * as React from 'react';
import type { AccordionProps } from './Accordion.types';
import type { ForwardRefComponent } from '@tai-ui/react-utilities';

export const Accordion: ForwardRefComponent<AccordionProps> = React.forwardRef<HTMLDivElement, AccordionProps>(
  (props, ref) => {},
);

Accordion.displayName = 'Accordion';
