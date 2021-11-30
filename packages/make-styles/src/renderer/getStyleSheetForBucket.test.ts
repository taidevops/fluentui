import { getStyleSheetForBucket } from './getStyleSheetForBucket';

function createFakeDocument(): Document {
  const doc = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
  doc.documentElement.appendChild(document.createElementNS('http://www.w3.org/1999/xhtml', 'head'));

  return doc;
}

describe('getStyleSheetForBucket', () => {
  it('sets "data-make-styles-bucket" attribute', () => {
    const target = createFakeDocument();

    expect(target.head.innerHTML).toMatchInlineSnapshot(`""`);
  });
});
