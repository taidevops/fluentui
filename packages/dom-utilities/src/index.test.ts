import { elementContains } from './elementContains';

const parentDiv = document.createElement('div');
const childDiv = document.createElement('div');

parentDiv.appendChild(childDiv);

describe('elementContains', () => {
  it('can find a child', () => {
    expect(elementContains(parentDiv, childDiv)).toEqual(true);
  });

  it('can find itself', () => {
    expect(elementContains(childDiv, childDiv)).toEqual(true);
    expect(elementContains(childDiv, childDiv, false)).toEqual(true);
  });
});
