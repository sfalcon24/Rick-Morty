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
  style,
  variant = 'default',
  rightButton,
  leftButton,
  leftIcon,
  onPressLeft,
  onPressRight,
}) => (
  <SafeAreaProvider>
    <Container style={style} variantContainer={variant}>
      {<StatusBar />}
      <LeftAction actionVariant={variant}>
        {leftButton && leftButton !== 'textButton' ? (
          <Button variant={leftButton} title="APPLY" onPress={onPressLeft} />
        ) : (
          leftButton === 'textButton' && (
            <TextButton
              leftIcon={leftIcon}
              title="Back"
              onPress={onPressLeft}
            />
          )
        )}
      </LeftAction>
      <Title textVariant={variant}>{title}</Title>
      <RightAction actionVariant={variant}>
        {rightButton && rightButton !== 'textButton' ? (
          <Button variant={rightButton} title="Filter" onPress={onPressRight} />
        ) : (
          rightButton === 'textButton' && (
            <TextButton title="Filter" onPress={onPressRight} />
          )
        )}
      </RightAction>
    </Container>
  </SafeAreaProvider>
);

export default memo(Header);
