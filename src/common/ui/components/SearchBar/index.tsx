import type {FC} from 'react';
import React from 'react';
import {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import LoupeIcon from '../Icons/LoupeIcon';
import MicrophoneIcon from '../Icons/MicrophoneIcon';
import {BackgroundText, Container, LeftAction, RightAction} from './styles';
import type {Props} from './types';

const SearchBar: FC<Props> = ({}) => (
  <TouchableOpacity>
    <Container>
      <LeftAction>
        <LoupeIcon />
      </LeftAction>
      <BackgroundText>Search</BackgroundText>
      <RightAction>
        <MicrophoneIcon />
      </RightAction>
    </Container>
  </TouchableOpacity>
);
export default memo(SearchBar);
