import {Button, Container, Text} from './styles';
import type {Props} from './types';
import useViewModel from './viewmodel';

export const ThreeTab: Props = () => {
  const {handleFakeLogin} = useViewModel();
  return (
    <Container>
      <Text>Tab screen</Text>
      <Button
        onPress={handleFakeLogin}
        testID="logout_button"
        title="Fake logout"
      />
    </Container>
  );
};
