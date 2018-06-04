import processSnapshots from '../../../utils/snapshots';
import Input, { IInputProps } from './Input';

const snapshots = [
  {
    props: {
      currency: '$',
      error: 'текст ошибки',
      label: 'Инпут в дефолтном состоянии с валютой и кнопкой очистить',
      onChange: jest.fn(),
      onClick: jest.fn(),
      type: 'text',
      value: 'sdfsdfsdf',
    },
  },
];

processSnapshots<IInputProps>(Input, snapshots);
