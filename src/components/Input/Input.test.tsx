import * as React from 'react';
import mount from '../../../utils/mount';
import Input from './';

// в первой итерации описываем эти типы
// по необходимости добавить из
// https://developer.mozilla.org/ru/docs/Web/HTML/Element/Input
const inputTypesMap = ['email', 'text'];

test('Input should have onChange prop (func)', () => {
  const mountInput = mount(
    <Input
      type="email"
      value="75278652835293864"
      onChange={jest.fn()}
      currency="€"
      label="Введите имя"
      error="текст ошибки"
      onClick={jest.fn()}
    />
  );

  const propType = typeof mountInput.props().children.props.onChange;
  expect(propType).toEqual('function');
});

test('Input type should be email or text', () => {
  const mountInput = mount(
    <Input
      type="text"
      value="75278652835293864"
      onChange={jest.fn()}
      currency="€"
      label="Введите имя"
      error="текст ошибки"
      onClick={jest.fn()}
    />
  );

  const inputType = mountInput.props().children.props.type;
  expect(inputTypesMap).toContain(inputType);
});

test('Input value is displayed correctly', () => {
  const testedString = 'privet vitek iz 2007';

  const mountInput = mount(
    <Input
      type="text"
      value={testedString}
      onChange={jest.fn()}
      currency="€"
      label="Введите имя"
      error="текст ошибки"
      onClick={jest.fn()}
    />
  );

  const testedValue = mountInput.find('input').props().value;

  expect(testedValue).toEqual(testedString);
});
