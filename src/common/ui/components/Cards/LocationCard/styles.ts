import styled from 'styled-components/native';
import Text from 'common/ui/components/Text';
import theme from 'common/ui/theme';
import {getTextStyle} from '../../Text/styles';

export const Container = styled.View`
  width: 163px;
  height: 80px;
  border-width: 1px;
  border-color: ${theme.colors.gray5};
  border-radius: 8px;
  margin-top: 9px;
  margin-left: 9px;
`;

export const TextStatus = styled(Text)`
  margin-top: 10px;
  margin-left: 10px;
  ${getTextStyle('caption11')};
  color: ${theme.colors.gray1};
`;

export const TextName = styled(Text)`
  margin-left: 10px;
  margin-top: 3px;
  ${getTextStyle('body17-semibold')};
`;
