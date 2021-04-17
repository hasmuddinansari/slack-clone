import { Modal, ModalHeader, Button } from 'reactstrap';
import styled, { css } from 'styled-components';

export const ModalHeaderWrapper = styled(ModalHeader)`
  border: none;

  & .create-channel {
    padding-left: 5px;
    font-size: 28px;
    font-weight: 800;
    color: ${({ theme }) => theme.black};
  }

  & button {
    display: none;
  }
`;

export const CloseButtonWrapper = styled.div`
  position: absolute;
  right: 4%;
  top: 5%;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  transition: 0.2s;
  &:hover {
    background: ${({ theme }) => theme.gray_300};
  }
`;

export const ChannelInput = styled.input`
  height: 42px;
  padding: 6x 10px;
`;

export const ModalWrapper = styled(Modal)`
  color: ${({ theme }) => theme.gray_100} !important;
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 2px;
  color: ${({ theme }) => theme.black};
`;

export const HeaderText = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
`;

export const disabledButton = css`
  background: ${({ theme }) => theme.gray_300};
  color: ${({ theme }) => theme.black};
`;

export const activeButton = css`
  background: ${({ theme }) => theme.green};
  color: ${({ theme }) => theme.white};
`;

export const CreateButton = styled(Button)`
  font-weight: 800;
  font-size: 15px;
  border: none;
  margin-right: 10px;
  padding: 10px 20px;
  ${({ words }) => (words ? activeButton : disabledButton)}
`;
