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
    color: ${({theme}) => theme.colors.black};
  `,
  headline2: css`
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.34px;
    font-weight: 700;
    color: ${({theme}) => theme.colors.black};
  `,
  headline3: css`
    font-size: 22px;
    line-height: 28px;
    letter-spacing: 0.35px;
    font-weight: 700;
    color: ${({theme}) => theme.colors.black};
  `,
  'headline3-regular': css`
    font-size: 22px;
    line-height: 28px;
    letter-spacing: 0.35px;
    font-weight: 400;
    color: ${({theme}) => theme.colors.indigo};
  `,
  'body20-bold': css`
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.38px;
    font-weight: 700;
    color: ${({theme}) => theme.colors.black};
  `,
  'body20-regular': css`
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.38px;
    font-weight: 400;
    color: ${({theme}) => theme.colors.indigo};
  `,
  'body17-semibold': css`
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.41px;
    font-weight: 600;
    color: ${({theme}) => theme.colors.black};
  `,
  'body17-regular': css`
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.41px;
    font-weight: 400;
    text-align: right;
    color: ${({theme}) => theme.colors.black};
  `,
  'body15-semibold': css`
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.24px;
    font-weight: 600;
    color: ${({theme}) => theme.colors.black};
  `,
  'large-title': css`
    font-size: 34px;
    line-height: 41px;
    letter-spacing: 0.41px;
    font-weight: 700;
    color: ${({theme}) => theme.colors.black};
  `,
  'caption13-regular': css`
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.08px;
    font-weight: 400;
    color: ${({theme}) => theme.colors.black};
  `,
  'caption11-regular': css`
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.07px;
    font-weight: 400;
    color: ${({theme}) => theme.colors.black};
  `,
  'tagline15-tag': css`
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.24px;
    font-weight: 600;
    text-align: center;
    color: #007aff;
  `,
  'tagline13-tag': css`
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.08px;
    font-weight: 600;
    color: ${({theme}) => theme.colors.indigo};
  `,
  'tagline11-tag': css`
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.07px;
    font-weight: 600;
    color: ${({theme}) => theme.colors.indigo};
  `,
};

export const getTextStyle = (variant: Variant) => css`
  ${variantStyles[variant]};
`;

export const Text = styled(BaseText)<Props>`
  ${({variant}) => getTextStyle(variant!)};
`;
