import processSnapshots from '../../../utils/snapshots';
import Button, { IButtonProps } from './Button';

const snapshots = [
  {
    props: {
      fullWidth: false,
      isLoading: false,
      onClick: jest.fn(),
      text: 'save',
    },
  },
];

processSnapshots<IButtonProps>(Button, snapshots);
