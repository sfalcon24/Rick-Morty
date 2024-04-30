import type {FC} from 'react';
import React from 'react';
import {memo} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icons from '../../Icons';
import {Main, Title, Subtitle, Date, TextContainer, Separator} from './styles';
import type {Props} from './types';

const TextDetail: FC<Props> = ({title, subtitle, date, isLast}) => (
  <TouchableOpacity>
    <Main>
      <TextContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        {date && <Date>{date}</Date>}
      </TextContainer>
      <Icons name="arrowRight" />
    </Main>
    {!isLast && <Separator isItem />}
  </TouchableOpacity>
);
export default memo(TextDetail);
