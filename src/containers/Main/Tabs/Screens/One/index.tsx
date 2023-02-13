import useConnect from './connect';
import {Button, Container, Text} from './styles';
import type {Props} from './types';

export const OneTab: Props = () => {
  const {handleFakeLogin} = useConnect();
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
