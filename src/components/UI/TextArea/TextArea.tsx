import React, { CSSProperties } from 'react';
import { Textarea as MantineTextarea, TextareaProps } from '@mantine/core';

interface SharedTextAreaProps extends Omit<TextareaProps, 'style'> {
  style?: CSSProperties;
}

export const TextArea = ({ style = {}, ...props }: SharedTextAreaProps) => {
  return <MantineTextarea styles={{ input: style }} {...props} />;
};