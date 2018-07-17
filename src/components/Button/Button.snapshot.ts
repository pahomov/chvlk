import processSnapshots from '../../../utils/snapshots';
import Button, { IButtonProps } from './Button';

const snapshots = [
  {
    props: {
      fullWidth: false,
      isLoading: false,
      onClick: jest.fn(),
      text: 'save',
      type: 'primary',
    },
  },
];

processSnapshots<IButtonProps>(Button, snapshots);
