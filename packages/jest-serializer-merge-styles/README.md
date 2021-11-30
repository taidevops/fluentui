# @fluentui/jest-serializer-merge-styles

Provides a Jest serializer for `@fluentui/merge-styles` which expands class names into css rules.

## Overview

When using Jest snapshot testing with components that use `@fluentui/merge-styles`, class names may be rendered as such in the snapshot (Note the `css-2342` generated class name):

```
<div className='ms-Foo css-2432'>
  Hello world
</div>
```
