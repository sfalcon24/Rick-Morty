import 'react-native';
import renderer from 'react-test-renderer';
import {Root} from '../src/containers/Root';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  renderer.create(<Root />);
});
