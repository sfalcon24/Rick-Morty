import type {FC} from 'react';
import React, {useState, useCallback, memo} from 'react';
import Separator from '../../Separators';
import Selector from '../Selector';
import {MainContainer, Title, SelectorsContainer} from './styles';
import type {Props, Selectors} from './types';

const FilterSelection: FC<Props> = ({
  style,
  title,
  selector,
  // anyCheckboxChecked,
}) => {
  const [anyCheckboxChecked, setAnyCheckboxChecked] = useState(false);

  const handleCheckboxChange = useCallback(isChecked => {
    setAnyCheckboxChecked(isChecked);
  }, []);

  return (
    <MainContainer style={style}>
      <Title>{title}</Title>
      <Separator />
      <SelectorsContainer>
        {selector?.map((item: Selectors, index: number) => (
          <Selector
            key={item.id}
            options={item.options}
            onPressLeft={() => handleCheckboxChange(true)}
            isLast={selector.length - 1 === index}
            anyCheckboxChecked={anyCheckboxChecked}
          />
        ))}
      </SelectorsContainer>
      <Separator />
    </MainContainer>
  );
};

export default memo(FilterSelection);
