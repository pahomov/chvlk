## Create new component

Creating new component is very simple. You need jsut run one command in your termninal:

```sh
npm run gen -- <ComponentName>
```

And it will create boilerplate for your component consists of:

- `/src/components/<ComponentName>/` folder

- `<ComponentName>.md` - documentation with examples

- `<ComponentName>.snapshot.ts` - jest snapshots

- `<ComponentName>.test.tsx` - functional jest tests

- `<ComponentName>.tsx` - component code

- `index.ts` - index file for the folder


In details:


### `<ComponentName>.md`

Documentation file for [Styleguidist](https://react-styleguidist.js.org/). More about documenting your component you can read [here](https://react-styleguidist.js.org/docs/documenting.html#usage-examples-and-readme-files);


### `<ComponentName>.snapshot.ts`

Here you must touch only `snapshots` constant.
This is the list of objects with `props` property (in future we will pass more objects to get snapshots more rich), were you should pass `props` object for your component snapshot testing. More about *snapshots* you can learn [here](https://facebook.github.io/jest/docs/snapshot-testing.html). Also we recommend to watch [this talk](https://www.youtube.com/watch?v=HAuXJVI_bUs).


### `<ComponentName>.test.tsx`

This is the file for your functional tests of component. Here we use [jest](http://facebook.github.io/jest/docs/) as test runner and *[expect-library](http://facebook.github.io/jest/docs/en/expect.html)*.
Also we use Enzyme's [mount](http://airbnb.io/enzyme/docs/api/mount.html) to render components without browser environment.


### `<ComponentName>.tsx`

This is the main file, here you must describe your component as you usually do.


### `index.ts`

This is the file just to import your components more comfortable, like:
```jsx
import Component from 'chvlk/Component';
```
instead of
```jsx
import Component from 'chvlk/Component/Component';
```
