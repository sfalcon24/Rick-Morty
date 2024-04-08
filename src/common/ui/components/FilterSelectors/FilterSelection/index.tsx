import type {FC} from 'react';
import React from 'react';
import {memo} from 'react';
import Separator from '../../Separators';
import Selector from '../Selector';
import {MainContainer, Title, SelectorsContainer} from './styles';
import type {Props, Selectors} from './types';

const FilterSelection: FC<Props> = ({style, title, selector}) => (
  <MainContainer style={style}>
    <Title>{title}</Title>
    <Separator />
    <SelectorsContainer>
      {selector?.map((item: Selectors, index: number) => (
        <Selector
          key={item.id}
          options={item.options}
          onPressLeft={item.onPressLeft}
          isLast={selector.length - 1 === index}
        />
      ))}
    </SelectorsContainer>
    <Separator />
  </MainContainer>
);

export default memo(FilterSelection);
