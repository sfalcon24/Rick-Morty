import type {FC} from 'react';
import React, {Fragment} from 'react';
import {memo} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Separator from '../../Separator';
import TextDetail from '../TextDetail';
import {Container, Main, MainTitle} from './styles';
import type {Props} from './types';

const SectionDetail: FC<Props> = ({title, options, onPress}) => (
  <Container>
    <MainTitle>{title}</MainTitle>
    <Separator />
    <TouchableOpacity>
      <Main>
        {options.map((opt, index) => (
          <Fragment key={opt.title}>
            <TextDetail
              title={opt.title}
              subtitle={opt.subtitle}
              date={opt.date}
              onPress={onPress}
              isLast={index === options.length - 1}
            />
          </Fragment>
        ))}
      </Main>
    </TouchableOpacity>
    <Separator />
  </Container>
);

export default memo(SectionDetail);
