import type {FC} from 'react';
import React, {useState} from 'react';
import {memo} from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Separator from '../../Separator';
import {
  MainContainer,
  Container,
  LeftAction,
  RightAction,
  Title,
  SelectorsContainer,
  Icon,
} from './styles';
import type {Props} from './types';

const FilterSimple: FC<Props> = ({title, onPress, style, isChecked}) => {
  const [value, setValue] = useState('');

  const handlePress = () => {
    onPress(value);
  };

  return (
    <MainContainer style={style}>
      <Separator />
      <TouchableOpacity onPress={handlePress}>
        <SelectorsContainer>
          <LeftAction>
            <Icon name={isChecked ? 'radioButtonFill' : 'radioButton'} />
          </LeftAction>
          <Container>
            <Title>{title}</Title>
            <TextInput
              placeholder="Enter text"
              value={value}
              onChangeText={setValue}
            />
          </Container>
          <RightAction>
            <Icon name="arrowRight" />
          </RightAction>
        </SelectorsContainer>
      </TouchableOpacity>
      <Separator />
    </MainContainer>
  );
};

export default memo(FilterSimple);
