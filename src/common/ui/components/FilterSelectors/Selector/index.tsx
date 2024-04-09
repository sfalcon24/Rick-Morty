import type {FC} from 'react';
import React, {useCallback, useState} from 'react';
import {memo} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Checkbox} from '../../Checkbox';
import {
  MainContainer,
  LeftAction,
  Options,
  Separator,
  SelectorsContainer,
} from './styles';
import type {Props} from './types';

const Selector: FC<Props> = ({
  onPressLeft,
  onCheckboxChange,
  style,
  options,
  isLast,
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
