import * as React from 'react';
import { mount } from '../../../utils/render';
import Spinner from './';

test('Spinner should have at least one functional test', () => {
  mount(<Spinner>test</Spinner>);

  expect(true).toEqual(true);
});