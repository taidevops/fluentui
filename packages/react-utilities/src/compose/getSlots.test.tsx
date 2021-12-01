import * as React from 'react';
import { getSlots } from './getSlots';
import { IntrinsicShorthandProps } from './types';

describe('getSlots', () => {
  type FooProps = { id?: string; children?: React.ReactNode };
  const Foo = (props: FooProps) => <div />;

  it('returns div for root if the as prop is not provided', () => {
    type Slots = { root: IntrinsicShorthandProps<'div'> };
    expect(
      getSlots<Slots>({ root: {} }),
    ).toEqual({
      slots: { root: 'div' },
      slotProps: { root: {} },
    });
  });

  it('returns root slot as a span with no props', () => {
    type Slots = { root: IntrinsicShorthandProps<'span'> };
    expect(
      getSlots<Slots>({ root: { as: 'span' } }),
    ).toEqual({
      slots: { root: 'span' },
      slotProps: { root: {} },
    });
  });

  it('does not omit invalid props for the rendered element', () => {
    type Slots = { root: IntrinsicShorthandProps<'button'> };
    const invalidProp = { href: 'href' } as React.ButtonHTMLAttributes<HTMLButtonElement>;
    expect(
      getSlots<Slots>({ root: { as: 'button', id: 'id', ...invalidProp } }),
    ).toEqual({
      slots: { root: 'button' },
      slotProps: { root: { id: 'id', href: 'href' } },
    });
  });
});
