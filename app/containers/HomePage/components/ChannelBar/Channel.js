import React from 'react';
import { connect } from 'react-redux';
import { object, string } from 'prop-types';
import { Hash } from 'react-feather';
import history from 'utils/history';
import { ChannelNameWrapper, Name } from './Styled';

export const Channel = ({ doc, channelID }) => {
  const onClickChannel = () => {
    history.push({
      pathname: `/${doc.id}`,
      state: {
        channelName: doc.data().name,
        description: doc.data().desc,
      },
    });
  };
  return (
    <ChannelNameWrapper
      onClick={onClickChannel}
      className="pointer"
      id={doc.id}
      hasSpace
      isActive={channelID === `/${doc.id}`}
    >
      <Hash size={16} />
      <Name>{doc.data().name}</Name>
    </ChannelNameWrapper>
  );
};

Channel.propTypes = {
  doc: object,
  channelID: string,
};

const mapStateToProps = state => ({
  channelID: state.router.location.pathname,
});

export default connect(mapStateToProps)(Channel);
