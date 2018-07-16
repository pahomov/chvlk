import * as React from 'react';
import { mount } from '../../../utils/render';
import Button from './';

test('Button should render text inside from props', () => {
  const props = {
    text: "save",
    onClick: jest.fn(),
    type: "primary",
    isLoading: false,
  };

  const wrapper = mount(<Button {...props} />);

  expect(wrapper.find('button').text()).toEqual(props.text);
});