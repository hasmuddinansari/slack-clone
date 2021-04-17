/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Navbar } from './components/Navbar';

export const HomePage = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default HomePage;
