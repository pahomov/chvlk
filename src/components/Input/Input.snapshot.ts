import processSnapshots from '../../../utils/snapshots';
import Input, { IInputProps } from './Input';

const snapshots = [
  { props: {disabled: false} }
];

processSnapshots<IInputProps>(Input, snapshots);
