import 'react-native';
import renderer from 'react-test-renderer';
import Button from '../';

describe('Button', () => {
  it('Primary button renders', () => {
    const tree = renderer
      .create(<Button title="Test" variant="primary" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Secondary button renders', () => {
    const tree = renderer
      .create(<Button title="Test" variant="secondary" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
