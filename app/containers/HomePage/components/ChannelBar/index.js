import React, { useState } from 'react';
import { Edit, ChevronDown, Plus } from 'react-feather';
import { CreateChannel } from '../CreateChannel';
import {
  SideBarWrapper,
  ChannelInfo,
  EditWrapper,
  Name,
  ChannelNameWrapper,
  PlusWrapper,
} from './Styled';
import { GENERAL_CHANNELS } from './constants';

export const ChannelBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(open => !open);

  return (
    <SideBarWrapper>
      <CreateChannel {...{ isOpen, toggleModal }} />
      <ChannelInfo>
        <div className="d-flex">
          <p>Channel name</p>
          <div>
            <ChevronDown size="14" strokeWidth="3px" />
          </div>
        </div>
        <EditWrapper className="flex-center">
          <Edit color="black" size="16" strokeWidth="2px" />
        </EditWrapper>
      </ChannelInfo>
      {GENERAL_CHANNELS.map(({ name, icon: Icon }) => (
        <ChannelNameWrapper className="pointer">
          <Icon size={18} />
          <Name>{name}</Name>
        </ChannelNameWrapper>
      ))}
      <div className="pointer p-3 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <ChevronDown size="14" strokeWidth="3px" />
          <Name>Channels</Name>
        </div>
        <PlusWrapper
          className="flex-center"
          onClick={toggleModal}
          role="button"
        >
          <Plus size={16} strokeWidth="3px" />
        </PlusWrapper>
      </div>

      {/* list of channels */}
      <div>
        <ChannelNameWrapper className="pointer pl-2">
          <ChevronDown size={18} />
          <Name>name</Name>
        </ChannelNameWrapper>{' '}
        <ChannelNameWrapper className="pointer">
          <ChevronDown size={18} />
          <Name>hello</Name>
        </ChannelNameWrapper>
      </div>
    </SideBarWrapper>
  );
};
