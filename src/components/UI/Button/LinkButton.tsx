import React, { CSSProperties } from 'react';
import { ButtonProps, Button as MantineButton, MantineStyleProp } from '@mantine/core';
import { buttonVariants } from './styles';

export enum LinkTarget {
  Blank = '_blank',
  Self = '_self',
  Parent = '_parent',
  Top = '_top',
}

interface LinkButtonProps extends Omit<ButtonProps, 'style' | 'component' | 'onClick'> {
  style?: CSSProperties;
  variant?: keyof typeof buttonVariants;
  href: string;
  target?: LinkTarget;
  rel?: string;
}

export const LinkButton = ({
  style = {},
  variant = 'primary',
  href,
  target,
  rel,
  ...props
}: LinkButtonProps) => {
  const variantStyle = buttonVariants[variant];
  const mergedStyle: MantineStyleProp = {
    ...variantStyle,
    ...style,
  } as MantineStyleProp;

  const linkRel = target === LinkTarget.Blank ? rel || 'noopener noreferrer' : rel;

  return (
    <MantineButton
      component='a'
      style={mergedStyle}
      href={href}
      target={target}
      rel={linkRel}
      {...props}
    />
  );
};
