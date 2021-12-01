import { padding } from './padding';

describe('padding', () => {
  it('for a given value', () => {
    expect(padding('12px')).toEqual({
      paddingBottom: '12px',
      paddingLeft: '12px',
      paddingRight: '12px',
      paddingTop: '12px',
    });
  });
});
