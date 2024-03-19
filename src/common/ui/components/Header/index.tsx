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
  titleRightButton = '',
  leftTextButton,
  leftIcon,
  titleLeftButton = '',
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
            title={titleLeftButton}
            onPress={onPressLeft}
          />
        ) : leftTextButton === 'textButton' ? (
          <TextButton
            leftIcon={leftIcon ? 'arrowLeft' : undefined}
            title={titleLeftButton}
            onPress={onPressLeft}
          />
        ) : null}
      </LeftAction>
      <Title textVariant={variant}>{title}</Title>
      <RightAction actionVariant={variant}>
        {rightTextButton && rightTextButton !== 'textButton' ? (
          <Button
            variant={rightTextButton as Variant}
            title={titleRightButton}
            onPress={onPressRight}
          />
        ) : rightTextButton === 'textButton' ? (
          <TextButton
            rightIcon={rightIcon ? 'point' : undefined}
            title={titleRightButton}
            onPress={onPressRight}
          />
        ) : null}
      </RightAction>
    </Container>
  </SafeAreaProvider>
);

export default memo(Header);
