import type {FC} from 'react';
import React from 'react';
import {memo} from 'react';
import useIdCallback from 'common/ui/utils/useIdCallback';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icons from '../../Icons';
import Separator from '../../Separator';
import {
  MainContainer,
  Container,
  LeftAction,
  RightAction,
  Title,
  Subtitle,
  SelectorsContainer,
  Icon,
} from './styles';
import type {Props} from './types';

const FilterSimple: FC<Props> = ({
  value,
  onPress,
  onPressRight,
  style,
  title,
  subtitle,
  isChecked,
}) => {
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
            <TouchableOpacity onPress={handleCheckboxPress}>
              <Icon name={isChecked ? 'radioButtonFill' : 'radioButton'} />
            </TouchableOpacity>
          </LeftAction>
          <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </Container>
          <RightAction>
            <TouchableOpacity onPress={onPressRight}>
              <Icons name="arrowRight" />
            </TouchableOpacity>
          </RightAction>
        </SelectorsContainer>
      </TouchableOpacity>
      <Separator />
    </MainContainer>
  );
};

export default memo(FilterSimple);
