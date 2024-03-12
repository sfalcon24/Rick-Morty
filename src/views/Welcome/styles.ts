import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.black};
  flex: 1;
  align-items: center;
  padding: 20px;
`;

export const View = styled.View`
  padding-top: 66px;
  align-items: center;
`;
