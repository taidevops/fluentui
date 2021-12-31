import * as React from 'react';
import { getSlots } from '@tai-ui/react-utilities';
import type { AccordionState, AccordionSlots } from './Accordion.types';

export const renderAccordion = (state: AccordionState) => {
  const { slots, slotProps } = getSlots<AccordionSlots>(state);

  return <slots.root {...slotProps.root}></slots.root>;
};
