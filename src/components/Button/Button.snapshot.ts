import processSnapshots from '../../../utils/snapshots';
import Button, { IButtonProps } from './Button';

const snapshots = [{ props: { children: 'Button', onClick: jest.fn() } }];

processSnapshots<IButtonProps>(Button, snapshots);
