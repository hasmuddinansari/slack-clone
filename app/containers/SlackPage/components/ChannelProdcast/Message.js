import React from 'react';
import { string, any } from 'prop-types';

import {
  UserChatWrapper,
  UserImage,
  UserName,
  UserNameWrapper,
  TimeStap,
  UserMessage,
} from './Styled';

export const Message = ({ timestamp, userName, userImage, message }) => (
  <UserChatWrapper className="d-flex">
    <UserImage src={userImage} />
    <UserNameWrapper className="d-flex flex-column">
      <div className="w-100 d-flex align-items-center">
        <UserName>{userName}</UserName>
        <TimeStap>
          {timestamp && new Date(timestamp.toDate()).toUTCString()}
        </TimeStap>
      </div>
      <UserMessage>{message}</UserMessage>
    </UserNameWrapper>
  </UserChatWrapper>
);

Message.propTypes = {
  timestamp: any,
  userName: string,
  userImage: string,
  message: string,
};
