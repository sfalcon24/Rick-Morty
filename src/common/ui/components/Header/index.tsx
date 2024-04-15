import type {FC} from 'react';
import {memo} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Button from '../Button';
import StatusBar from '../StatusBar';
import TextButton from '../TextButton';
import {Container, Title, LeftAction, RightAction} from './styles';
import type {Props} from './types';

const Header: FC<Props> = ({
  title,
  leftIcon,
  leftTextButton,
  rightIcon,
  rightTextButton,
  rightButton,
  onPressLeft,
  onPressRight,
  variant = 'default',
  style,
}) => (
  <SafeAreaProvider>
    <Container style={style} variantContainer={variant}>
      {<StatusBar />}
      <LeftAction actionVariant={variant}>
        {leftTextButton && (
          <TextButton
            leftIcon={leftIcon ? 'arrowLeft' : undefined}
            title={leftTextButton}
            onPress={onPressLeft}
          />
        )}
      </LeftAction>
      <Title textVariant={variant}>{title}</Title>
      <RightAction actionVariant={variant}>
        {rightButton && (
          <Button variant="small" title={rightButton} onPress={onPressRight} />
        )}
        {rightTextButton && (
          <TextButton
            rightIcon={rightIcon ? 'point' : undefined}
            title={rightTextButton}
            onPress={onPressRight}
          />
        )}
      </RightAction>
    </Container>
  </SafeAreaProvider>
);

export default memo(Header);
