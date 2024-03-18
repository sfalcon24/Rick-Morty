import type {FC} from 'react';
import {memo} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  Container,
  Title,
  // LeftAction,
  // RightAction
} from './styles';
import type {Props} from './types';
// import StatusBar from '../StatusBar';
// import Button from '../Button';

const Header: FC<Props> = ({
  title,
  style,
  variant = 'default',
  //   leftIcon,
  //   rightButton,
  //   leftButton,
  //   onPressLeft,
  //   onPressRight,
}) => (
  <SafeAreaProvider>
    <Container style={style} variantContainer={variant}>
      {/* <StatusBar /> */}
      {/* <LeftAction>
        {leftButton && (
          <Button variant={leftButton} title="APPLY" onPress={onPressLeft} />
        )}
      </LeftAction> */}
      <Title textVariant={variant}>{title}</Title>
      {/* <RightAction>
        {rightButton && (
          <Button variant={rightButton} title="APPLY" onPress={onPressRight} />
        )}
      </RightAction> */}
    </Container>
  </SafeAreaProvider>
);

export default memo(Header);
