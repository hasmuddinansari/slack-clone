import React from 'react';
import { node } from 'prop-types';
import { ThemeProvider as TP } from 'styled-components';

const theme = {
  slackBg: '#350d36',
  white: '#fff',
  black: '#000',
  lightSlackBg: 'rgb(67, 30, 68)',
  slackSecondary: 'rgb(82,38,83)',
  lightWhite: 'rgba(255, 255, 255, 0.2)',
  lightWhite2: '#bcabbc',
  gray_100: '#616061',
  gray_200: '#1d1c1d',
  gray_300: '#c8c8c887',
  green: '#007a5a',
};

export const ThemeProvider = ({ children }) => (
  <TP theme={theme}>{children}</TP>
);

ThemeProvider.propTypes = {
  children: node,
};
