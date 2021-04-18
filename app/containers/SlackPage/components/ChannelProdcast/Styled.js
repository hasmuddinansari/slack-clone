import { FormGroup } from 'reactstrap';
import styled, { css } from 'styled-components';

export const ChatContainer = styled.div`
  height: 70vh;
  width: calc(100vw - 260px);
`;

export const ChannelHeader = styled.div`
  height: 64px;
  border-bottom: 1px solid ${({ theme }) => theme.gray_400};
  padding: 10px 20px;
  & h6 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 3px;
    > .star {
      margin-left: 10px;
    }
  }
  & .desc {
    font-size: 13px;
  }
`;

export const ChatInputContainer = styled.form`
  width: calc(100vw - 260px);
  position: absolute;
  background: ${({ theme }) => theme.white};
  display: flex;
  justify-content: center;
`;

export const ChatInputWrapper = styled(FormGroup)`
  height: 80px;
  border: 1px solid black;
  border-radius: 8px;
  width: 96%;
  margin-top: 2px;
  position: absolute;
`;

export const ChatInput = styled.input`
  width: 100%;
  margin-top: 2px;
  outline: 0;
  padding: 10px 15px;
  border-radius: 8px;
  height: 50%;
  border: none;
  &:active,
  &:focus,
  &:hover {
    outline: 0;
    border: none;
  }
`;

export const TextTool = styled.div`
  height: 50%;
  color: ${({ theme }) => theme.gray_400};
  position: relative;
  &::before {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    top: 0px;
    background: ${({ theme }) => theme.gray_400};
  }
`;

export const SendContainer = styled.div`
  background: ${({ theme, disabled }) =>
    disabled ? `${theme.gray_400}` : `${theme.green}`};
  height: 32px;
  width: 32px;
  border-radius: 4px;
  position: absolute;
  right: 4px;
  bottom: 4px;

  & * {
    transform: rotateZ(20deg);
  }
`;

export const ChatListContainer = styled.div`
  height: calc(100vh - 200px);
  padding: 15px 10px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: ${({ theme }) => theme.gray_400};
  }
`;

export const UserChatWrapper = styled.div`
  padding: 0px 10px;
  &:not(:nth-child(1)) {
    margin-top: 25px;
  }
`;

export const UserImage = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 4px;
  ${({ isSmall }) =>
    isSmall &&
    css`
      height: 30px;
      width: 30px;
    `}
`;

export const UserNameWrapper = styled.div`
  margin-top: -5px;
  padding-left: 8px;
`;

export const UserName = styled.div`
  font-size: 15px;
  font-weight: 800;
  color: ${({ theme }) => theme.black};
`;

export const TimeStap = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.gray_100};
  display: inline-block;
  margin-top: 2px;
  margin-left: 10px;
`;

export const UserMessage = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.black};
`;
