import React, { useState, useRef, useEffect } from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';
import { size } from 'lodash';
import { Hash, Star, AlertCircle, UserPlus, Send } from 'react-feather';
import Loader from 'react-loader-spinner';
import { useCollection } from 'react-firebase-hooks/firestore';
import { theme } from 'context/theme';
import { db } from 'utils';
import { useFirebase } from '../../../hooks/useFirebase';
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

export const ChannelProdcast = ({ match, locationState }) => {
  const [chat, setChat] = useState('');
  const chatRef = useRef(null);
  const scrollRef = useRef(null);
  const channelID = match.params.channelId;

  const [messagesList, loadingMessages] = useCollection(
    db
      .collection('rooms')
      .doc(channelID)
      .collection('messages')
      .orderBy('timestamp', 'asc'),
  );

  const { insertMessage } = useFirebase({
    location: 'rooms',
    subLocation: 'messages',
    subLocationId: channelID,
  });

  const sizeOfMessage = size(messagesList && messagesList.docs);

  const { channelName } = locationState;
  const channelDescription = locationState.description;

  const onChatChange = () => {
    setChat(chatRef.current.value);
  };

  const onChatSubmit = event => {
    event.preventDefault();
    if (chat) {
      insertMessage({
        message: {
          message: chat,
          userImage: 'https://randomuser.me/api/portraits/men/72.jpg',
          userName: 'Ayaan Ansari',
        },
      });
    }
    scrollToDown();
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
            {channelName}
            <span className="star pointer">
              <Star size={14} strokeWidth="1px" />
            </span>
          </h6>
          <div className="desc text-muted">{channelDescription}</div>
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
          messagesList.docs.map(doc => <Message {...{ ...doc.data() }} />)
        )}
        <div ref={scrollRef} />
      </ChatListContainer>
      <ChatInputContainer onSubmit={onChatSubmit}>
        <ChatInputWrapper>
          <ChatInput
            placeholder={`Message #${channelName}`}
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
  locationState: {},
};

ChannelProdcast.propTypes = {
  locationState: object,
  match: object,
};

const mapStateToProps = state => ({
  locationState: state.router.location.state,
});

export default connect(mapStateToProps)(ChannelProdcast);
