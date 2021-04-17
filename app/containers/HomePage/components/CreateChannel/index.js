import React from 'react';
import { bool, func, object } from 'prop-types';
import { X as CloseButton } from 'react-feather';

import { ModalBody, ModalFooter } from 'reactstrap';
import {
  ModalHeaderWrapper,
  CloseButtonWrapper,
  ChannelInput,
  ModalWrapper,
  Label,
  HeaderText,
  CreateButton,
} from './Styled';

export const CreateChannel = ({ isOpen, toggleModal, form, handleChange }) => (
  <ModalWrapper isOpen={isOpen} centered>
    <ModalHeaderWrapper toggle={toggleModal}>
      <div className="create-channel">Create Channel</div>
      <CloseButtonWrapper
        className="pointer"
        onClick={toggleModal}
        role="button"
      >
        <CloseButton size="22" strokeWidth="1px" />
      </CloseButtonWrapper>
    </ModalHeaderWrapper>
    <ModalBody className="pt-2 px-4">
      <HeaderText>
        Channels are where your team communicates. They’re best when organized
        around a topic — #marketing, for example.
      </HeaderText>
      <Label htmlFor="name" className="pt-2">
        Name
      </Label>
      <ChannelInput
        placeholder="#channel name"
        className="form-control"
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <Label htmlFor="desc" className="pt-4">
        Description (Optional)
      </Label>
      <ChannelInput
        id="desc"
        className="form-control"
        name="desc"
        value={form.desc}
        onChange={handleChange}
      />
      <span className="text-muted">What’s this channel about?</span>
    </ModalBody>
    <ModalFooter className="border-0">
      <CreateButton words={form.name} onClick={toggleModal}>
        Create
      </CreateButton>
    </ModalFooter>
  </ModalWrapper>
);

CreateChannel.defaultProps = {
  form: {},
};

CreateChannel.propTypes = {
  isOpen: bool,
  toggleModal: func,
  form: object,
  handleChange: func,
};
