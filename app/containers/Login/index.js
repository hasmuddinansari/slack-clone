import React from 'react';
import { auth, provider } from 'utils';
import { Button } from 'reactstrap';
import Slack from 'images/slack.svg';
import { Image } from './Styled';

export const LoginPage = () => {
  const isLoggedIn = localStorage.getItem('login') || false;

  const handleLogin = () => {
    auth.signInWithPopup(provider).then(() => {
      localStorage.setItem('login', true);
    });
  };

  return (
    !isLoggedIn && (
      <div className="flex-center min-vh-100">
        <div className="w-25 d-flex flex-column">
          <Image src={Slack} />
          <Button color="success" onClick={handleLogin}>
            Login with Google
          </Button>
        </div>
      </div>
    )
  );
};
