import * as React from 'react';
import mount from '../../../utils/mount';
import Button from './Button';

test('Button should call onClick once', () => {
  const onClick = jest.fn();

  mount(<Button onClick={onClick}>Button</Button>)
    .find('button')
    .simulate('click');

  expect(onClick).toHaveBeenCalledTimes(1);
});
