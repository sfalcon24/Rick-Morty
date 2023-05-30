import type {FC} from 'react';
import {Button, Container, Text} from './styles';
import useViewModel from './viewmodel';

export const BlankAuth: FC = () => {
  const {handleFakeLogin} = useViewModel();

  return (
    <Container>
      <Text>Auth screen</Text>
      <Button
        testID="login_button"
        title="Fake login"
        onPress={handleFakeLogin}
      />
    </Container>
  );
};
