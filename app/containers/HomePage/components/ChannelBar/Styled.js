import styled from 'styled-components';

export const SideBarWrapper = styled.aside`
  width: 260px;
  overflow: auto;
  min-height: 100vh;
  background: ${({ theme }) => theme.slackSecondary};
  color: ${({ theme }) => theme.white};
`;

export const ChannelInfo = styled.main`
  height: 64px;
  padding-left: 16px;
  padding-right: 15px;
  font-size: 15px;
  font-weight: 700;
  border: 1px solid ${({ theme }) => theme.lightWhite};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s;

  & div p {
    margin: 0;
    padding: 0;
  }

  &:hover {
    background: ${({ theme }) => theme.slackBg};
  }
`;

export const EditWrapper = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background: ${({ theme }) => theme.white};
`;

export const Name = styled.p`
  font-size: 15px;
  margin-left: 10px;
  margin-bottom: 0;
`;

export const ChannelNameWrapper = styled.div`
  padding: 7px 16px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.lightWhite2};
  &:hover {
    background: ${({ theme }) => theme.slackBg};
  }
`;

export const PlusWrapper = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 4px;
  &:hover {
    background: ${({ theme }) => theme.lightSlackBg};
  }
`;
