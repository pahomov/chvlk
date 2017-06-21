import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

export type IGetTarget = (
  tree: ShallowWrapper<any, any>
) => jest.Matchers<void>;

const defaultGetTarget: IGetTarget = (tree: ShallowWrapper<any, any>): any =>
  tree;

export default function<P>(
  Component: React.ComponentClass<P>,
  snapshots: Array<{
    props: P;
    getTarget?: IGetTarget;
  }>
): void {
  test(`${Component.displayName} snapshots`, () => {
    snapshots.forEach((snapshot: { props: P; getTarget: IGetTarget }): void => {
      expect(
        (snapshot.getTarget || defaultGetTarget)(
          shallow(<Component {...snapshot.props} />)
        )
      ).toMatchSnapshot();
    });
  });
}
