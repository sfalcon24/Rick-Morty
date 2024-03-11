import {Button, Container, TitleText1} from './styles';
import type {Props} from './types';
import useViewModel from './viewmodel';

export const OneTab: Props = () => {
  const {handleFakeLogin} = useViewModel();

  return (
    <Container>
      <TitleText1>Ta screen</TitleText1>
      <Button
        onPress={handleFakeLogin}
        testID="logout_button"
        title="Fake logout"
      />
    </Container>
  );
};
