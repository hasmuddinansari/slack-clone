/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ChannelBar } from './components/ChannelBar';
import { ChannelProdcast } from './components/ChannelProdcast';

export const HomePage = () => (
  <Fragment>
    <Navbar />
    <div className="d-flex">
      <ChannelBar />
      <Switch>
        <Route exact path="/:channelId" component={ChannelProdcast} />
      </Switch>
    </div>
  </Fragment>
);

export default HomePage;
