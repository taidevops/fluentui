import * as React from 'react';
import { render } from '@testing-library/react';
import { applyTriggerPropsToChildren } from './applyTriggerPropsToChildren';

describe('applyTriggerPropsToChildren', () => {
  const dataTestId = 'dataTestId';
  const child: React.ReactElement = <div data-testid={dataTestId}>This is a valid React element</div>;
  const triggerProps = { id: 'testId', className: 'testClassName', 'data-testattr': 'testAttr' };

  it('returns the child with the props applied if a React element is sent as the child', () => {
    const result = applyTriggerPropsToChildren(child, triggerProps);
    const div = render(result as React.ReactElement).getByTestId(dataTestId);

    expect(div.tagName).toBe('DIV');
    expect(div.id).toBe(triggerProps.id);
    expect(div.className).toBe(triggerProps.className);
    expect(div.getAttribute('data-testattr')).toBe(triggerProps['data-testattr']);
  });
});
