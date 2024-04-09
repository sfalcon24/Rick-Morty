import type {FC} from 'react';
import React, {useState} from 'react';
import {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import LoupeIcon from '../Icons/LoupeIcon';
import MicrophoneIcon from '../Icons/MicrophoneIcon';
import {BackgroundText, Container, LeftAction, RightAction} from './styles';
import type {Props} from './types';

const SearchBar: FC<Props> = ({}) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (text: string) => {
    setSearchText(text);
  };

  const handleSearch = () => {
    console.log('Search:', searchText);
  };

  const handleVoiceSearch = () => {
    console.log('Voice search');
  };

  return (
    <TouchableOpacity>
      <Container>
        <LeftAction>
          <TouchableOpacity>
            <LoupeIcon onPress={handleSearch} />
          </TouchableOpacity>
        </LeftAction>
        <BackgroundText
          placeholder="Search"
          value={searchText}
          onChangeText={handleInputChange}
        />
        <RightAction>
          <TouchableOpacity>
            <MicrophoneIcon onPress={handleVoiceSearch} />
          </TouchableOpacity>
        </RightAction>
      </Container>
    </TouchableOpacity>
  );
};
export default memo(SearchBar);
