import processSnapshots from '../../../utils/snapshots';
import Input, { IInputProps } from './Input';

const snapshots = [
  {
    props: {
      currency: '$',
      error: 'Message Error',
      label: 'Input with error and label',
      onChange: jest.fn(),
      onClear: jest.fn(),
      type: 'text',
      value: 'test value',
    },
  },
];

processSnapshots<IInputProps>(Input, snapshots);
