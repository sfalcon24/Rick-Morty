import {Image} from 'react-native';
import Button from 'common/ui/components/Button';
import Text from 'common/ui/components/Text';
import {colors} from 'common/ui/theme/colors';
import {ButtonContainer, Container, View} from './styles';
import type {Props} from './types';

export const Welcome: Props = () => (
  <Container>
    <View>
      <Image
        source={require('../../assets/images/logoPixel.png')}
        style={{width: 250, height: 51, resizeMode: 'contain'}}
      />
      <Image
        source={require('../../assets/images/logoRM.png')}
        style={{width: 452, height: 136, resizeMode: 'contain'}}
      />
      <Text
        variant="headline3-bold"
        style={{color: colors.white, paddingTop: 45}}>
        Welcome
      </Text>
      <Text
        variant="body17"
        style={{color: colors.white, paddingTop: 5, textAlign: 'center'}}>
        In this test, we will assess your ability to build the application
        through code analysis and reproduction of the following layout.
      </Text>
      <ButtonContainer>
        <Button
          variant="large-dark"
          title="GET THE INSTRUCTIONS"
          style={{margin: 10}}
        />
        <Button variant="large" title="START PROTOTYPE" style={{margin: 10}} />
      </ButtonContainer>
    </View>
  </Container>
);
