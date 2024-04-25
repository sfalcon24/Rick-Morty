import type {FC} from 'react';
import React from 'react';
import {memo} from 'react';
import useIdCallback from 'common/ui/utils/useIdCallback';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icons from '../../Icons';
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

const FilterSimple: FC<Props> = ({value, onPress, style, title, isChecked}) => {
  // const handleCheckboxPress = useCallback(() => {
  //   const newCheckedState = !internalChecked;
  //   setInternalChecked(newCheckedState);
  //   onCheckboxChange && onCheckboxChange(newCheckedState);
  //   onPressLeft && onPressLeft();
  // }, [internalChecked, onPressLeft, onCheckboxChange]);

  const handleCheckboxPress = useIdCallback(onPress, value);

  return (
    <MainContainer style={style}>
      <Separator />
      <TouchableOpacity onPress={handleCheckboxPress}>
        <SelectorsContainer>
          <LeftAction>
            <Icon name={isChecked ? 'radioButtonFill' : 'radioButton'} />
          </LeftAction>
          <Container>
            <Title>{title}</Title>
            <TextInput placeholder="Enter text" value={value} />
          </Container>
          <RightAction>
            <Icons name="arrowRight" />
          </RightAction>
        </SelectorsContainer>
      </TouchableOpacity>
      <Separator />
    </MainContainer>
  );
};

export default memo(FilterSimple);
