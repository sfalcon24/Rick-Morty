import 'react-native';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {configure} from 'enzyme';
import renderer from 'react-test-renderer';
import wrapWithTheme from 'theme/wrapWithTheme';
import Button from '../';

configure({adapter: new Adapter()});

describe('Button', () => {
  it('Primary button renders', () => {
    const component = wrapWithTheme(<Button title="Test" variant="primary" />);

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Secondary button renders', () => {
    const component = wrapWithTheme(
      <Button title="Test" variant="secondary" />,
    );

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
