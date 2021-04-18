import React, { useState } from 'react';
import { Edit, ChevronDown, Plus } from 'react-feather';
import { useCollection } from 'react-firebase-hooks/firestore';
import Loader from 'react-loader-spinner';
import { db } from 'utils';
import { useFirebase } from 'hooks/useFirebase';
import { CreateChannel } from '../CreateChannel';
import Channel from './Channel';

import {
  SideBarWrapper,
  ChannelInfo,
  EditWrapper,
  Name,
  ChannelNameWrapper,
  PlusWrapper,
  ChannelsListWrapper,
} from './Styled';
import { GENERAL_CHANNELS } from './constants';

export const ChannelBar = () => {
  const { insertItem } = useFirebase({
    location: 'rooms',
  });

  const [channels, channelLoading] = useCollection(
    db.collection('rooms').orderBy('name'),
  );

  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(open => !open);

  const [form, setForm] = useState({
    name: '',
    desc: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setForm(prevStete => ({
      ...prevStete,
      [name]: value,
    }));
  };

  const resetState = () => {
    setForm({});
    toggleModal();
  };

  const handleSubmit = event => {
    event.preventDefault();
    insertItem({
      item: form,
    });
    resetState();
  };

  const handleToggleModal = () => {
    resetState();
  };

  return (
    <SideBarWrapper>
      <CreateChannel
        {...{
          isOpen,
          handleChange,
          form,
          handleSubmit,
          toggleModal: handleToggleModal,
        }}
      />
      <ChannelInfo>
        <div className="d-flex">
          <p>Global Page</p>
          <div>
            <ChevronDown size="14" strokeWidth="3px" />
          </div>
        </div>
        <EditWrapper className="flex-center">
          <Edit color="black" size="16" strokeWidth="2px" />
        </EditWrapper>
      </ChannelInfo>
      <ChannelsListWrapper>
        {GENERAL_CHANNELS.map(({ name, icon: Icon }) => (
          <ChannelNameWrapper className="pointer" key={name}>
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
        {channelLoading ? (
          <div className="w-100 flex-center">
            <Loader type="ThreeDots" color="white" height={80} width={50} />
          </div>
        ) : (
          channels &&
          channels.docs &&
          channels.docs.map(doc => <Channel {...{ doc, key: doc.id }} />)
        )}
        <div />
        {!channelLoading && (
          <ChannelNameWrapper className="pointer" onClick={toggleModal}>
            <PlusWrapper noHover className="flex-center">
              <Plus size={14} />
            </PlusWrapper>
            <Name className="bold">Add Channels</Name>
          </ChannelNameWrapper>
        )}
      </ChannelsListWrapper>
    </SideBarWrapper>
  );
};
