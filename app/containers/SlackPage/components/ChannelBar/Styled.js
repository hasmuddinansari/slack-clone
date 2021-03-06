import styled, { css } from 'styled-components';

export const SideBarWrapper = styled.aside`
  width: 260px;
  height: calc(100vh - 38px);
  background: ${({ theme }) => theme.slackSecondary};
  color: ${({ theme }) => theme.white};
`;

export const ChannelInfo = styled.main`
  overflow: hidden;
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
  padding-left: ${({ hasSpace }) => hasSpace && '20px'};
  color: ${({ theme, isActive }) =>
    isActive ? `${theme.white}` : `${theme.lightWhite2}`};
  background: ${({ theme, isActive }) =>
    isActive && `${theme.activeChannelBg}`};
  &:hover {
    background: ${({ theme, isActive }) => !isActive && `${theme.slackBg}`};
  }
`;

const defaultPlusWrapperSize = css`
  height: 30px;
  width: 30px;
`;

const hasNoHoverSize = css`
  height: 20px;
  width: 20px;
`;

export const PlusWrapper = styled.div`
  border-radius: 4px;
  background: ${({ theme, noHover }) => noHover && `${theme.lightSlackBg}`};
  ${({ noHover }) => (noHover ? hasNoHoverSize : defaultPlusWrapperSize)};
  &:hover {
    background: ${({ theme }) => theme.lightSlackBg};
  }
`;

export const ChannelsListWrapper = styled.div`
  height: 82vh;
  overflow: auto;
  padding-bottom: 40px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px transparent;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: ${({ theme }) => theme.gray_300};
  }
`;
