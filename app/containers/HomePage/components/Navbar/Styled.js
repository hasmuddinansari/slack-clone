import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  background: ${({ theme }) => theme.slackBg};
  height: 38px;
  width: 100%;
  color: ${({ theme }) => theme.white};
`;

export const SearchWrapper = styled.div`
  width: 80%;
  background: ${({ theme }) => theme.lightSlackBg};
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  color: ${({ theme }) => theme.white};
  font-size: 13px;
  padding: 3px 8px;
  float: left;
  border-radius: 4px;
  margin-right: 10px;
  transition: 0.2s;
  border: 1px solid rgb(104 74 104);
  &:hover,
  &:active {
    border: 1px solid ${({ theme }) => theme.white};
  }

  & input {
    height: 18px;
    width: 90%;
    outline: 0;
    font-weight: 400;
    text-overflow: ellipsis;
    opacity: 0.8;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.white};
  }
`;

export const UserProfile = styled.div`
  height: 28px;
  width: 28px;
  border: 1px solid white;
  border-radius: 4px;
`;
