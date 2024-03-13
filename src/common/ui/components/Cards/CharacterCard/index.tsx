import type {FC} from 'react';
import React from 'react';
import {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import useIdCallback from '../../../../../../.storybook/utils/useIdCallback';
import {Container, Image, Name, Status} from './styles';
import type {Props} from './types';

const CharacterCard: FC<Props> = ({id, image, status, name, onPress}) => {
  const handleOnPress = useIdCallback(onPress, id);
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <Container>
        <Image source={image} />
        <Status>{status}</Status>
        <Name>{name}</Name>
      </Container>
    </TouchableOpacity>
  );
};
export default memo(CharacterCard);
