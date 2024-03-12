import {Image} from 'react-native';
import Button from 'common/ui/components/Button';
import Text from 'common/ui/components/Text';
import {colors} from 'common/ui/theme/colors';
import {Container, View} from './styles';
import type {Props} from './types';

export const Welcome: Props = () => (
  <Container>
    <View>
      <Image
        source={require('../../assets/images/logoPixel.png')}
        style={{width: 176, height: 31}}
      />
      <Image
        source={require('../../assets/images/logoRM.png')}
        style={{width: 302, height: 106}}
      />
      <Text
        variant="headline3-bold"
        style={{color: colors.white, paddingTop: 30}}>
        Welcome
      </Text>
      <Text
        variant="body17"
        style={{color: colors.white, paddingTop: 5, textAlign: 'center'}}>
        In this test, we will assess your ability to build the application
        through code analysis and reproduction of the following layout.
      </Text>
      <Button
        variant="large-dark"
        title="GET THE INSTRUCTIONS"
        style={{margin: 10}}
      />
      <Button variant="large" title="START PROTOTYPE" style={{margin: 10}} />
    </View>
  </Container>
);
