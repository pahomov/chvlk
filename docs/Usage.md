**Chvlk** is components library that works on top of `react` and `styled-components` libraries. So you need to install it with its peer dependencies:

```sh
npm i chvlk react react-dom styled-components -S
```

After that you can use it like React's components.
Every listed component has example (under title), how to import it from library.
For example:

```jsx
import Button from 'chvlk/Button';
```

Also every component has list of described props, and examples in sandboxes, so you can edit them and see the result.

**Important**: Every component use *theme* from `styled-components`, so first of all you must wrap your app in `ThemeProvider` like so:

```jsx
import { ThemeProvider } from 'styled-components';
import { themes } from 'chvlk';

ReactDom.render(
  <ThemeProvider theme={ themes.default }>
    <MyApp />
  </ThemeProvider>,
  domContainerNode
);
```

After that `chvlk` components will work as it should.
