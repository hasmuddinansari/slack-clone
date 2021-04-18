/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LoginPage } from 'containers/Login';
import { auth } from 'utils';
import { Navbar } from '../Navbar';
import { ChannelBar } from './components/ChannelBar';
import { ChannelProdcast } from './components/ChannelProdcast';

export const SlackPage = () => {
  const [user, isLoading] = useAuthState(auth);

  return (
    <Fragment>
      {!user ? (
        <LoginPage {...{ isLoading, user }} />
      ) : (
        <Fragment>
          <Navbar {...{ user }} />
          <div className="d-flex ">
            <ChannelBar />
            <Switch>
              <Route
                exact
                path="/:channelId"
                render={props => <ChannelProdcast {...{ ...props, user }} />}
              />
            </Switch>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default SlackPage;
