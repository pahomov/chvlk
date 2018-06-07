import * as React from 'react';
import mount from '../../../utils/mount';
import Input from './';

test('Input value is displayed correctly', () => {
  const testedString = 'test message';

  const mountInput = mount(
    <Input
      type="text"
      value={testedString}
      onChange={jest.fn()}
      currency="€"
      label="Введите имя"
      error="error message"
      onClear={jest.fn()}
    />
  );

  const testedValue = mountInput.find('input').props().value;

  expect(testedValue).toEqual(testedString);
});
