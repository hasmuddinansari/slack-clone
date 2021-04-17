/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import { ChannelProdcast } from 'containers/HomePage/components/ChannelProdcast';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <HomePage />
      <Switch>
        <Route exact path="/:channelId" component={ChannelProdcast} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
