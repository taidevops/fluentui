A library of utilities for composing Fluent UI components.

## A basic component walkthrough

Building a re-composable component requires that we create building blocks; we put them together, but we can reconfigure
and add to parts as needed.

Here's what's needed:

- **State hook** - A hook which takes in props/ref for the component and returns a mutable state object.
- **Style hook** - hooks which can mix the appropriate classnames on the mutable state.
- **Context values hook** _(optional)_ - hooks that creates values for `.Provider` components in [React Context](https://reactjs.org/docs/context.html)
- **Render function** - a function which takes in state of the component and returns JSX. (e.g. `renderButton`)

With these building blocks, you can compose or recompose the component in numerous ways.

### Simple example

A hook which can produce mutable state of the component (defining accessibility and behaviors):

```jsx
const useButton = (props, ref) => {
  const state = {
    // Default props
    role: 'button',
    // User props
    ...props,
    // Overrides
    ref,
  };

  // Apply button behaviors.
  if (state.as !== 'button' && state.as !== 'a') {
    state.tabIndex = 0;
  }

  return state;
};
```
