import processSnapshots from '../../../utils/snapshots';
import Button, { IButtonProps } from './Button';

const snapshots = [
  {
    props: {
      text: 'save',
      onClick: jest.fn(),
      type: 'primary',
      isLoading: false,
    },
  },
];

processSnapshots<IButtonProps>(Button, snapshots);
