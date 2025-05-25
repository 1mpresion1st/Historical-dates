import styled, { css } from 'styled-components';
import React, { JSX } from 'react';

export type TextVariant =
  | 'XL'
  | 'LG'
  | 'MD'
  | 'SM'
  | 'XS';

export interface TypographyProps {
  variant?: TextVariant;
  color?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  fontWeight?: number | string;
  marginBottom?: boolean;
  noWrap?: boolean;
  component?: React.ElementType;
  children: React.ReactNode;
  underline?: boolean;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  sx?: React.CSSProperties;
  className?: string;
  lineheight?: number | string;
  ref?: React.Ref<HTMLDivElement>;
}

const variantStyles = (variant: TextVariant) => {
  const styles = {
    XL: css`
      font-size: 200px;
    `,
    LG: css`
      font-size: 56px;
    `,
    MD: css`
      font-size: 25px;
    `,
    SM: css`
      font-size: 20px;
    `,
    XS: css`
      font-size: ;
    `,
  };

  return styles[variant as TextVariant];
};

const StyledTypography = styled.div<TypographyProps>`
  ${({ variant = 'body1' }) => variantStyles(variant as TextVariant)};
  color: ${({ color }) => color || 'inherit'};
  text-align: ${({ align }) => align};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineheight }) => lineheight};
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  text-transform: ${({ textTransform }) => textTransform};
  margin-bottom: ${({ marginBottom }) => marginBottom && '0.5rem'};
  white-space: ${({ noWrap }) => noWrap && 'nowrap'};
  overflow: ${({ noWrap }) => noWrap && 'hidden'};
  text-overflow: ${({ noWrap }) => noWrap && 'ellipsis'};
  ${({ sx }) => sx && ({ ...sx })};
  font-family: "PT Sans", sans-serif;
    `;
    
    export const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  component,
  children,
  ref,
  ...props
}) => {
  const defaultComponent = variant.startsWith('h') 
    ? (variant as keyof JSX.IntrinsicElements)
    : 'div';

  return (
    <StyledTypography
      ref={ref}
      variant={variant}
      as={component || defaultComponent}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};