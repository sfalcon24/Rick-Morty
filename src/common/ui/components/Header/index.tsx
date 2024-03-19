import type {FC} from 'react';
import {memo} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Button from '../Button';
import type {Variant} from '../Button/types';
import StatusBar from '../StatusBar';
import TextButton from '../TextButton';
import {Container, Title, LeftAction, RightAction} from './styles';
import type {Props} from './types';

const Header: FC<Props> = ({
  title,
  style,
  variant = 'default',
  rightTextButton,
  rightIcon,
  leftTextButton,
  leftIcon,
  onPressLeft,
  onPressRight,
}) => (
  <SafeAreaProvider>
    <Container style={style} variantContainer={variant}>
      {<StatusBar />}
      <LeftAction actionVariant={variant}>
        {leftTextButton && leftTextButton !== 'textButton' ? (
          <Button
            variant={leftTextButton as Variant}
            title="APPLY"
            onPress={onPressLeft}
          />
        ) : leftTextButton === 'textButton' ? (
          <TextButton
            leftIcon={leftIcon ? 'arrowLeft' : undefined}
            title="Back"
            onPress={onPressLeft}
          />
        ) : null}
      </LeftAction>
      <Title textVariant={variant}>{title}</Title>
      <RightAction actionVariant={variant}>
        {rightTextButton && rightTextButton !== 'textButton' ? (
          <Button
            variant={leftTextButton as Variant}
            title="APPLY"
            onPress={onPressRight}
          />
        ) : rightTextButton === 'textButton' ? (
          <TextButton
            leftIcon={rightIcon ? 'point' : undefined}
            title="Back"
            onPress={onPressRight}
          />
        ) : null}
      </RightAction>
    </Container>
  </SafeAreaProvider>
);

export default memo(Header);
