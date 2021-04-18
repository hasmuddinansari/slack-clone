import React, { useState, useRef, useEffect } from 'react';
import { object } from 'prop-types';
import { size } from 'lodash';
import { Hash, Star, AlertCircle, UserPlus, Send } from 'react-feather';
import Loader from 'react-loader-spinner';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { theme } from 'context/theme';
import { db } from 'utils';
import { useFirebase } from 'hooks/useFirebase';
import { Message } from './Message';
import {
  ChatContainer,
  ChannelHeader,
  ChatInput,
  ChatInputWrapper,
  ChatInputContainer,
  ChatListContainer,
  TextTool,
  SendContainer,
} from './Styled';

export const ChannelProdcast = ({ match, user }) => {
  const [chat, setChat] = useState('');
  const chatRef = useRef(null);
  const scrollRef = useRef(null);
  const channelID = match.params.channelId;

  const [messagesList, loadingMessages] = useCollection(
    channelID &&
      db
        .collection('rooms')
        .doc(channelID)
        .collection('messages')
        .orderBy('timestamp', 'asc'),
  );

  const [channelData] = useDocument(
    channelID && db.collection('rooms').doc(channelID),
  );

  const { insertMessage } = useFirebase({
    location: 'rooms',
    subLocation: 'messages',
    subLocationId: channelID,
  });

  const sizeOfMessage = size(messagesList && messagesList.docs);

  const onChatChange = () => {
    setChat(chatRef.current.value);
  };

  const onChatSubmit = event => {
    event.preventDefault();
    if (chat) {
      insertMessage({
        message: {
          message: chat,
          userImage: user.photoURL,
          userName: user.displayName,
        },
      });
    }
    chatRef.current.focus();
    setChat('');
  };

  const scrollToDown = () => {
    if (scrollRef.current) {
      const element = scrollRef.current;
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.focus();
    }
  }, [channelID]);

  useEffect(() => {
    if (!loadingMessages && sizeOfMessage) {
      scrollToDown();
    }
  }, [loadingMessages, sizeOfMessage]);

  return (
    <ChatContainer>
      <ChannelHeader className="d-flex justify-content-between align-items-center">
        <div>
          <h6>
            <Hash size={15} />
            {channelData && channelData.data() && channelData.data().name}
            <span className="star pointer">
              <Star size={14} strokeWidth="1px" />
            </span>
          </h6>
          <div className="desc text-muted">
            {channelData && channelData.data() && channelData.data().desc}
          </div>
        </div>
        <div className="pointer w-25 d-flex justify-content-end">
          <div className="d-flex justify-content-between  w-25">
            <UserPlus size={18} strokeWidth="2px" color={theme.gray_100} />
            <AlertCircle size={18} strokeWidth="2px" color={theme.gray_100} />
          </div>
        </div>
      </ChannelHeader>
      <ChatListContainer>
        {/* Render all chats here */}
        {loadingMessages ? (
          <div className="w-100 flex-center">
            <Loader
              type="ThreeDots"
              color={theme.lightSlackBg}
              height={80}
              width={50}
            />
          </div>
        ) : (
          Boolean(sizeOfMessage) &&
          messagesList.docs.map(doc => (
            <Message {...{ ...doc.data(), key: doc.id }} />
          ))
        )}
        <div ref={scrollRef} />
      </ChatListContainer>
      <ChatInputContainer onSubmit={onChatSubmit}>
        <ChatInputWrapper>
          <ChatInput
            placeholder={`Message #${channelData &&
              channelData.data() &&
              channelData.data().name}`}
            value={chat}
            ref={chatRef}
            onChange={onChatChange}
          />
          <TextTool type="submit" onClick={onChatSubmit}>
            <SendContainer className="flex-center" disabled={!chat}>
              <Send
                size={17}
                strokeWidth="2px"
                color={!chat ? theme.gray_100 : theme.white}
              />
            </SendContainer>
          </TextTool>
        </ChatInputWrapper>
      </ChatInputContainer>
    </ChatContainer>
  );
};

ChannelProdcast.defaultProps = {
  user: {},
};

ChannelProdcast.propTypes = {
  match: object,
  user: object,
};

export default ChannelProdcast;
