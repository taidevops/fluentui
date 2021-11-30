import { MakeStylesRenderer, StyleBucketName } from '../types';

/**
 * Ordered style buckets using their short pseudo name.
 *
 * @private
 */
export const styleBucketOrdering: StyleBucketName[] = [
  // catch-all
  'd',
  // link
  'l',
  // visited
  'v',
  // focus-within
  'w',
  // focus
  'f',
  // focus-visible
  'i',
  // hover
  'h',
  // active
  'a',
  // keyframes
  'k',
  // at-rules
  't',
];

export function getStyleSheetForBucket(
  bucketName: StyleBucketName,
  target: Document,
  renderer: MakeStylesRenderer,
): CSSStyleSheet {
  return renderer.styleElements[bucketName]!.sheet as CSSStyleSheet;
}
