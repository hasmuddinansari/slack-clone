import React from 'react';
import { object } from 'prop-types';
import { Hash } from 'react-feather';
import history from 'utils/history';
import { ChannelNameWrapper, Name } from './Styled';

export const Channel = ({ doc }) => {
  const onClickChannel = () => {
    history.push(`/${doc.id}`);
  };
  return (
    <ChannelNameWrapper
      onClick={onClickChannel}
      className="pointer"
      id={doc.id}
      hasSpace
    >
      <Hash size={16} />
      <Name>{doc.data().name}</Name>
    </ChannelNameWrapper>
  );
};

Channel.propTypes = {
  doc: object,
};
