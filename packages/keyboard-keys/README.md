# @tai-ui/keyboard-keys

Contains a set of keyboard constants for key and keyCode comparison in components. This packages contains
**named key values** from

Unicode values are not included since there are a lot of locales to consider and they provide no benefit since
unicode characters can be used directly in code.

# Usage

```ts
import { Enter } from '@tai-ui/keyboard-keys'

const onKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === Enter) {
    // ...
  }

  // Unicode characters 'a', '1', '%'...
  // should be used directly in code
  if (e.key === 'a') {
    // ...
  }
};
```

## Legacy keyCode

In order to migrate easily from `@tai-ui/keyboard-key` legacy `keyCode` support is available in this library but
is not encouraged for reuse since this property has been deprecated for a while and will be removed in future
