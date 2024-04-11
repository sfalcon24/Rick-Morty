import type {FC} from 'react';
import React, {useCallback, useEffect, useState} from 'react';
import {memo} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Checkbox} from '../../Checkbox';
import {
  MainContainer,
  LeftAction,
  Options,
  Separator,
  SelectorsContainer,
  Title,
  SeparatorInitial,
} from './styles';
import type {Props} from './types';

const Selector: FC<Props> = ({
  onPressLeft,
  onCheckboxChange,
  style,
  options,
  isLast,
  isChecked,
  title,
}) => {
  const [internalChecked, setInternalChecked] = useState(isChecked);

  useEffect(() => {
    setInternalChecked(isChecked);
  }, [isChecked]);

  const handleCheckboxPress = useCallback(() => {
    const newValue = !internalChecked;
    setInternalChecked(newValue);
    onCheckboxChange && onCheckboxChange(newValue); // Llamada al callback cuando cambia el estado del checkbox
    onPressLeft && onPressLeft();
  }, [internalChecked, onPressLeft, onCheckboxChange]);

  return (
    <MainContainer style={style}>
      <Title>{title}</Title>
      <SeparatorInitial />
      <SelectorsContainer>
        <LeftAction>
          <TouchableOpacity onPress={handleCheckboxPress}>
            <Checkbox isChecked={isChecked} onPress={handleCheckboxPress} />
          </TouchableOpacity>
        </LeftAction>
        <Options>{options}</Options>
      </SelectorsContainer>
      {!isLast && <Separator />}
    </MainContainer>
  );
};

export default memo(Selector);
