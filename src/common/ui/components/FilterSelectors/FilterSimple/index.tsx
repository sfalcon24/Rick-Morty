import type {FC} from 'react';
import React, {useState, useCallback} from 'react';
import {memo} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Checkbox} from '../../Checkbox';
import Icons from '../../Icons';
import Separator from '../../Separators';
import {
  MainContainer,
  Container,
  LeftAction,
  RightAction,
  Title,
  Subtitle,
  SelectorsContainer,
} from './styles';
import type {Props} from './types';

const FilterSimple: FC<Props> = ({
  onPressLeft,
  onPressRight,
  style,
  title,
  subtitle,
  onCheckboxChange,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  // const [showClearButton, setShowClearButton] = useState(false);

  const handleCheckboxPress = useCallback(() => {
    setIsChecked(!isChecked);
    onPressLeft && onPressLeft();
    onCheckboxChange && onCheckboxChange(!isChecked);
  }, [isChecked, onPressLeft, onCheckboxChange]);

  return (
    <MainContainer style={style}>
      <Separator />
      <SelectorsContainer>
        <LeftAction>
          <TouchableOpacity onPress={handleCheckboxPress}>
            <Checkbox isChecked={isChecked} onPress={handleCheckboxPress} />
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
      <Separator />
    </MainContainer>
  );
};

export default memo(FilterSimple);
