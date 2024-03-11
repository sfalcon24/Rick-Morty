import type {FC} from 'react';
import {memo} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Button from '../Button';
import StatusBar from '../StatusBar';
import {Container, Title, LeftAction, RightAction} from './styles';
import type {Props} from './types';

const Header: FC<Props> = ({
  title,
  style,
  variant = 'default',
  rightButton,
  leftButton,
  onPressLeft,
  onPressRight,
}) => (
  <SafeAreaProvider>
    <Container style={style} variantContainer={variant}>
      {<StatusBar />}
      {
        <LeftAction actionVariant={variant}>
          {leftButton && (
            <Button variant={leftButton} title="APPLY" onPress={onPressLeft} />
          )}
        </LeftAction>
      }
      <Title textVariant={variant}>{title}</Title>
      <RightAction actionVariant={variant}>
        {rightButton && (
          <Button variant={rightButton} title="Filter" onPress={onPressRight} />
        )}
      </RightAction>
    </Container>
  </SafeAreaProvider>
);

export default memo(Header);
