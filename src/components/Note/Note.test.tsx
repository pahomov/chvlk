import * as React from 'react';
import mount from '../../../utils/mount';
import Note from './';

test('Note should have at least one functional test', () => {
  mount(
    <Note showActionName={'Show help'} hideActionName="Hide help">test</Note>
  );

  expect(true).toEqual(true);
});
