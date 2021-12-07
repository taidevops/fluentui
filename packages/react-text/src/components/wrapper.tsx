import * as React from 'react';
import type { TextProps } from '../Text';

export type TextWrapperProps = Omit<TextProps, 'font' | 'size'>;
