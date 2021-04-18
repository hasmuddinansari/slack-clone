import React from 'react';
import { object } from 'prop-types';
import { Clock, HelpCircle, User } from 'react-feather';
import { UserImage } from 'containers/SlackPage/components/ChannelProdcast/Styled';
import { SearchWrapper, UserProfile, NavbarWrapper } from './Styled';

export const Navbar = ({ user }) => (
  <NavbarWrapper className="row flex-center">
    <div className="col-3 flex-end-center">
      <Clock size="20" color="white" />
    </div>
    <div className="col-7 flex-start-center">
      <SearchWrapper>
        <input placeholder="Search ..." />
      </SearchWrapper>
      <HelpCircle size="22" color="white" />
    </div>
    <div className="col-2 flex-end-center pr-1">
      {user.photoURL ? (
        <div className="h-75">
          <UserImage isSmall src={user.photoURL} />
        </div>
      ) : (
        <UserProfile className="flex-center">
          <User size="16" color="white" />
        </UserProfile>
      )}
    </div>
  </NavbarWrapper>
);

Navbar.defaultProps = {
  user: {},
};

Navbar.propTypes = {
  user: object,
};
