import type {FC} from 'react';
import React from 'react';
import {memo} from 'react';
import {Container, Title, Selector, Separator} from './styles';
import type {Props} from './types';

const FilterSelection: FC<Props> = ({title, options, onPress, style}) => (
  <Container style={style}>
    <Title>{title}</Title>
    <Separator />
    {options?.map((opt, index) => (
      <>
        <Selector
          key={opt.value}
          name={opt.name}
          value={opt.value}
          isSelected={opt.isSelected}
          onPress={onPress}
        />
        {index !== options.length - 1 && <Separator isItem />}
      </>
    ))}
    <Separator />
  </Container>
);

export default memo(FilterSelection);
