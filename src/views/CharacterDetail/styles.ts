import {FlatList} from 'react-native';
import {Image as ImageBase} from 'react-native';
import styled from 'styled-components/native';
import Text from 'common/ui/components/Text';
import type {ListType} from './types';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  height: auto;
`;

export const PerfilContainer = styled.View`
  background-color: ${({theme}) => theme.colors.gray6};
`;

export const ImagesProfile = styled.View`
  flex-direction: row;
`;

export const BackgroundImage = styled(ImageBase)`
  width: 100%;
  height: 88px;
`;

export const Image = styled(ImageBase)`
  position: absolute;
  justify-content: center;
  top: 15px;
  left: 33%;
  width: 130px;
  height: 130px;
  border-radius: 5px;
`;

export const TextProfile = styled.View`
  padding-top: 60px;
  padding-bottom: 25px;
  align-items: center;
  z-index: -1;
  background-color: ${({theme}) => theme.colors.gray6};
`;

export const Status = styled(Text).attrs({
  variant: 'caption11',
})`
  margin-top: 10px;
  color: ${({theme}) => theme.colors.gray1};
`;

export const Name = styled(Text).attrs({
  variant: 'headline2',
})`
  margin-top: 5px;
`;

export const Species = styled(Text).attrs({
  variant: 'tagline15-tag',
})`
  margin-top: 5px;
  color: ${({theme}) => theme.colors.gray1};
`;

export const List = styled(FlatList).attrs({
  contentContainerStyle: {
    alignItems: 'flex-start',
    paddingBottom: 130,
  },
})`
  height: 100%;
  margin-top: 150px;
` as unknown as ListType;
