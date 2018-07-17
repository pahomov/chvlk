import * as React from 'react';
import { mount } from '../../../utils/render';
import Button from './';

test('Button should render text inside from props', () => {
  const props = {
    fullWidth: false,
    isLoading: false,
    onClick: jest.fn(),
    text: 'save',
  };

  const wrapper = mount(<Button {...props} />);

  expect(wrapper.find('button').text()).toEqual(props.text);
});
