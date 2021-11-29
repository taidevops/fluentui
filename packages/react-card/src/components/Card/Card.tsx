import * as React from 'react';
import { useCard } from './useCard';
import { renderCard } from './renderCard';
import type { CardProps } from './Card.types';
import type { ForwardRefComponent } from '@tai-ui/react-utilities';

export const Card: ForwardRefComponent<CardProps> = React.forwardRef((props, ref) => {
  const state = useCard(props, ref);

  return renderCard(state);
});

Card.displayName = 'Card';
