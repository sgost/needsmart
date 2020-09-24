import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import {
  AccountMenu,
  MenuList,
  UserDetails,
  MenuListItem,
  Logout
} from "./styles";

const AccountDropdown = ({ user, userDetails }) => {

  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('api_token');
    history.go(0);
  };

  return (
    <AccountMenu>
      {
        user !== null &&
        <MenuList>
          <UserDetails>
            <h5>{user.name}</h5>
            <span>{user.phone_number}</span>
          </UserDetails>
          <MenuListItem>
            <a href="https://play.google.com/store/apps/details?id=com.needsmart.mobile.app" target="_blank" rel="noopener noreferrer">Rate this app</a>
          </MenuListItem>
          <Logout>
            <Button onClick={logout}>Logout</Button>
          </Logout>
        </MenuList>
      }
    </AccountMenu>
  );
};

export default AccountDropdown;
