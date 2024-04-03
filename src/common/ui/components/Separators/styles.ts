import styled from 'styled-components/native';
import type {Props} from './types';

export const Container = styled.View<Props>`
  height: 1px;
  background-color: ${({theme}) => theme.colors.indigo};
`;

export const SelectorsContainer = styled.View<Props>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;

export const DetailContainer = styled.View<Props>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
