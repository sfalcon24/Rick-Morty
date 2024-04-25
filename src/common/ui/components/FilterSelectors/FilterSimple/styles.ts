import styled from 'styled-components/native';
import IconBase from 'common/ui/components/Icons';
import Text from 'common/ui/components/Text';

export const MainContainer = styled.View`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const SelectorsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
`;

export const Container = styled.View`
  flex: 6;
`;

export const Icon = styled(IconBase)``;

export const Title = styled(Text).attrs({
  variant: 'body17-semibold',
})``;

export const LeftAction = styled.View`
  align-items: flex-start;
  flex: 1;
  margin-left: 5px;
`;

export const RightAction = styled.View`
  align-items: flex-end;
  flex: 1;
`;
