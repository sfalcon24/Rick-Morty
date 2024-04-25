import type {FC} from 'react';
import React from 'react';
import {memo} from 'react';
import useIdCallback from 'common/ui/utils/useIdCallback';
import {t} from 'i18next';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icons from '../../Icons';
import {
  Container,
  Main,
  LeftAction,
  Center,
  RightAction,
  Title,
  Subtitle,
  Icon,
} from './styles';
import type {Props} from './types';

const FilterSimple: FC<Props> = ({
  id,
  title,
  value,
  isChecked,
  onPress,
  style,
}) => {
  const handlePress = useIdCallback(onPress, id);

  return (
    <Container style={style}>
      <TouchableOpacity onPress={handlePress}>
        <Main>
          <LeftAction>
            <Icon name={isChecked ? 'radioButtonFill' : 'radioButton'} />
          </LeftAction>
          <Center>
            <Title>{title}</Title>
            <Subtitle>{value ?? t(`filters.${id}`)}</Subtitle>
          </Center>
          <RightAction>
            <Icons name="arrowRight" />
          </RightAction>
        </Main>
      </TouchableOpacity>
    </Container>
  );
};

export default memo(FilterSimple);
