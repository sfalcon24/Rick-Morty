import type {FC} from 'react';
import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import useIdCallback from '../../../utils/useIdCallback';
import {Container, Icon, Text} from './styles';
import type {Props} from './types';

const Selector: FC<Props> = ({name, value, isSelected, onPress, style}) => {
  const handleOnPress = useIdCallback(onPress, value);

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <Container style={style}>
        <Icon name={isSelected ? 'radioButtonFill' : 'radioButton'} />
        <Text>{name}</Text>
      </Container>
    </TouchableOpacity>
  );
};

export default memo(Selector);
