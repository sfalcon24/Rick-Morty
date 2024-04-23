import type {FC} from 'react';
import React, {useEffect, useState} from 'react';
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
  style,
  options,
  isLast,
  isChecked,
  onCheckboxChange,
}) => {
  const [checked, setChecked] = useState(isChecked);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  const handleCheckboxPress = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onCheckboxChange && onCheckboxChange(newChecked);
    onPressLeft && onPressLeft(newChecked);
  };

  return (
    <MainContainer style={style}>
      <SelectorsContainer>
        <LeftAction>
          <TouchableOpacity onPress={handleCheckboxPress}>
            <Checkbox isChecked={checked} onPress={handleCheckboxPress} />
          </TouchableOpacity>
        </LeftAction>
        <Options>{options}</Options>
      </SelectorsContainer>
      {!isLast && <Separator />}
    </MainContainer>
  );
};

export default memo(Selector);
