import React from 'react';
import { ThemeProvider as TP } from 'styled-components';

const theme = {
  slackBg: '#350d36',
  white: '#fff',
  black: '#000',
  lightSlackBg: 'rgb(67, 30, 68)',
};

export const ThemeProvider = ({ children }) => {
  return <TP theme={theme}>{children}</TP>;
};
