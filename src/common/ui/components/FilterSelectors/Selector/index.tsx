import type {FC} from 'react';
import React, {useState} from 'react';
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

const Selector: FC<Props> = ({onPressLeft, style, options, isLast}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxPress = () => {
    setIsChecked(!isChecked);
    onPressLeft && onPressLeft();
  };

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
