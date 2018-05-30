import processSnapshots from '../../../utils/snapshots';
import Note, { INoteProps } from './Note';

const snapshots = [
  {
    props: {
      children: 'test',
      hideActionName: 'Hide help',
      showActionName: 'Show help',
    },
  },
];

processSnapshots<INoteProps>(Note, snapshots);
