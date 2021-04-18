/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Fragment } from 'react';

import HomePage from 'containers/HomePage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <Fragment>
      <HomePage />
      <GlobalStyle />
    </Fragment>
  );
}
