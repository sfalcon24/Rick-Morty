import type {FC} from 'react';
import React, {useState} from 'react';
import {memo} from 'react';
import {t} from 'i18next';
import {TouchableOpacity} from 'react-native-gesture-handler';
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
  onPress = () => {},
  style,
  isChecked,
}) => {
  const [value] = useState('');

  const handlePress = () => {
    onPress(value);
  };
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
            <Icon name="arrowRight" />
          </RightAction>
        </Main>
      </TouchableOpacity>
    </Container>
  );
};

export default memo(FilterSimple);
