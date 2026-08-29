import React, { CSSProperties } from 'react';
import { MantineStyleProp, Textarea as MantineTextarea, TextareaProps } from '@mantine/core';

interface SharedTextAreaProps extends Omit<TextareaProps, 'style'> {
  style?: CSSProperties;
}

export const TextArea = ({ style = {}, ...props }: SharedTextAreaProps) => {
  return <MantineTextarea style={style as MantineStyleProp} {...props} />;
};
