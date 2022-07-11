import {Alert} from 'react-native';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
};

const showAlert = () => {
  Alert.alert('Button pressed');
};

export const Primary = () => (
  <Button variant="primary" title="Primary" onPress={showAlert} />
);

export const PrimaryLoading = () => (
  <Button
    variant="primary"
    title="Primary loading"
    onPress={showAlert}
    loading
  />
);

export const Secondary = () => (
  <Button variant="secondary" title="Secondary" onPress={showAlert} />
);

export const SecondaryLoading = () => (
  <Button
    variant="secondary"
    title="Secondary loading"
    onPress={showAlert}
    loading
  />
);
