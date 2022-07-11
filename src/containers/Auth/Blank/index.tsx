import type {FC} from 'react';
import useConnect from './connect';
import {Button, Container, Text} from './styles';
import type {Props} from './types';

export const BlankAuth: FC<Props> = () => {
  const {handleFakeLogin} = useConnect();
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
