/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { ChannelBar } from './components/ChannelBar';

export const HomePage = () => (
  <div>
    <Navbar />
    <ChannelBar />
  </div>
);

export default HomePage;
