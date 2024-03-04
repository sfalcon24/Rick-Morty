import {Text as BaseText} from 'react-native';
import styled, {css} from 'styled-components/native';
import type {Props, Variant} from './types';

const variantStyles: Record<Variant, ReturnType<typeof css>> = {
  headline1: css`
    font-family: 'CabinetGrotesk-Medium';
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 0.41px;
    font-weight: 700;
  `,
  headline2: css`
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.34px;
    font-weight: 700;
  `,
  'headline3-bold': css`
    font-size: 22px;
    line-height: 28px;
    letter-spacing: 0.35px;
    font-weight: 700;
  `,
  headline3: css`
    font-size: 22px;
    line-height: 28px;
    letter-spacing: 0.35px;
    font-weight: 400;
  `,
  'body20-bold': css`
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.38px;
    font-weight: 700;
  `,
  body20: css`
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.38px;
    font-weight: 400;
  `,
  'body17-semibold': css`
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.41px;
    font-weight: 600;
  `,
  body17: css`
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.41px;
    font-weight: 400;
    text-align: right;
  `,
  'body15-semibold': css`
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.24px;
    font-weight: 600;
  `,
  'large-title': css`
    font-size: 34px;
    line-height: 41px;
    letter-spacing: 0.41px;
    font-weight: 700;
  `,
  caption13: css`
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.08px;
    font-weight: 400;
  `,
  caption11: css`
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.07px;
    font-weight: 400;
  `,
  'tagline15-tag': css`
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.24px;
    font-weight: 600;
    text-align: center;
  `,
  'tagline13-tag': css`
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.08px;
    font-weight: 600;
  `,
  'tagline11-tag': css`
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.07px;
    font-weight: 600;
  `,
};

export const getTextStyle = (variant: Variant) => css`
  ${variantStyles[variant]};
`;

export const Text = styled(BaseText)<Props>`
  color: ${({theme}) => theme.colors.black};
  ${({variant}) => getTextStyle(variant!)};
`;
