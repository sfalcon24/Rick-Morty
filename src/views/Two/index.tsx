import {Button, Container, Text} from './styles';
import type {Props} from './types';
import useViewModel from './viewmodel';

export const TwoTab: Props = () => {
  const {handleFakeLogin} = useViewModel();
  return (
    <Container>
      <Text>Tab screen</Text>
      <Button onPress={handleFakeLogin} title="Fake logout" />
    </Container>
  );
};
