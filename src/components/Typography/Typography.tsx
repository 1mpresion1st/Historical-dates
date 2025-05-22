import styled, { css } from 'styled-components';
import React, { JSX } from 'react';

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'subtitle1'
  | 'subtitle2'
  | 'button'
  | 'caption'
  | 'overline';

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
}

const variantStyles = (variant: TextVariant) => {
  const styles = {
    h1: css`
      font-size: 2.5rem;
      line-height: 1.2;
      font-weight: 700;
      margin: 0 0 0.67em;
    `,
    h2: css`
      font-size: 2rem;
      line-height: 1.3;
      font-weight: 600;
      margin: 0 0 0.83em;
    `,
    h3: css`
      font-size: 1.75rem;
      line-height: 1.4;
      font-weight: 600;
      margin: 0 0 1em;
    `,
    h4: css`
      font-size: 1.5rem;
      line-height: 1.5;
      font-weight: 600;
      margin: 0 0 1.33em;
    `,
    h5: css`
      font-size: 1.25rem;
      line-height: 1.6;
      font-weight: 600;
      margin: 0 0 1.67em;
    `,
    h6: css`
      font-size: 1rem;
      line-height: 1.7;
      font-weight: 600;
      margin: 0 0 1.75em;
    `,
    body1: css`
      font-size: 1rem;
      line-height: 1.5;
      margin: 0 0 0.5em;
    `,
    body2: css`
      font-size: 0.875rem;
      line-height: 1.43;
      margin: 0 0 0.57em;
    `,
    subtitle1: css`
      font-size: 1rem;
      line-height: 1.75;
      font-weight: 500;
      margin: 0 0 0.5em;
    `,
    subtitle2: css`
      font-size: 0.875rem;
      line-height: 1.57;
      font-weight: 500;
      margin: 0 0 0.57em;
    `,
    button: css`
      font-size: 0.875rem;
      line-height: 1.75;
      font-weight: 500;
      text-transform: uppercase;
      margin: 0;
    `,
    caption: css`
      font-size: 0.75rem;
      line-height: 1.66;
      margin: 0;
    `,
    overline: css`
      font-size: 0.75rem;
      line-height: 2.66;
      text-transform: uppercase;
      margin: 0;
    `,
  };

  return styles[variant];
};

const StyledTypography = styled.div<TypographyProps>`
  ${({ variant = 'body1' }) => variantStyles(variant)};
  color: ${({ color }) => color || 'inherit'};
  text-align: ${({ align }) => align};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  text-transform: ${({ textTransform }) => textTransform};
  margin-bottom: ${({ marginBottom }) => marginBottom && '0.5rem'};
  white-space: ${({ noWrap }) => noWrap && 'nowrap'};
  overflow: ${({ noWrap }) => noWrap && 'hidden'};
  text-overflow: ${({ noWrap }) => noWrap && 'ellipsis'};
  ${({ sx }) => sx && ({ ...sx })};
  font-family: inherit;
    `;
    
    export const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  component,
  children,
  ...props
}) => {
  const defaultComponent = variant.startsWith('h') 
    ? (variant as keyof JSX.IntrinsicElements)
    : 'div';

  return (
    <StyledTypography
      variant={variant}
      as={component || defaultComponent}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};