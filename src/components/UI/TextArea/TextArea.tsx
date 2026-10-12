import React, { CSSProperties } from 'react';
import { Textarea as MantineTextarea, TextareaProps } from '@mantine/core';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { getTextAreaInputStyles } from './styles';

interface SharedTextAreaProps
  extends Omit<TextareaProps, 'style' | 'styles'> {
  style?: CSSProperties;
}

export const TextArea = ({ style = {}, ...props }: SharedTextAreaProps) => {
  const isDark = useIsDark();
  const inputStyle: CSSProperties = {
    ...getTextAreaInputStyles(isDark),
    ...style,
  };

  return <MantineTextarea styles={{ input: inputStyle }} {...props} />;
};
