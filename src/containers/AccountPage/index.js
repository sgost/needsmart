import React, { Fragment, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Drawer } from 'antd';
import LoginPage from '../../containers/Login';
import { UserContext } from '../../utils/context/user';
import UserImg from '../../images/account-user.svg';
import {
  AccountContainer,
  AccountDetails,
  UserImage,
  UserName,
  UserNumber,
  AppDetailsList,
  AppListItem,
  Logout,
  SignInSection
} from './styles';

const AccountPage = () => {

  const { user } = useContext(UserContext);

  const history = useHistory();

  const [showLogin, setShowLogin] = useState(false);

  const signin = () => {
    setShowLogin(true);
  };

  const onClose = () => {
    setShowLogin(false);
  };

  const logout = () => {
    localStorage.removeItem('api_token');
    history.go(0);
  };

  return (
    <Fragment>
      <AccountContainer>
        {
          user !== null ?
          <AccountDetails>
            <UserImage>
              <img src={UserImg} alt={user.name} />
            </UserImage>
            <UserName>{user.name}</UserName>
            <UserNumber>{user.phone_number}</UserNumber>
          </AccountDetails> :
          <SignInSection>
            <p>Sign in or Sign up to manage your account</p>
            <Button type="primary" onClick={signin}>Continue</Button>
          </SignInSection>
        }
        <AppDetailsList>
          <AppListItem>
            <a href="https://play.google.com/store/apps/details?id=com.needsmart.mobile.app" target="_blank" rel="noopener noreferrer">Rate this app</a>
          </AppListItem>
        </AppDetailsList>
        {
            user !== null &&
            <Logout>
              <Button type="primary" onClick={logout}>Logout</Button>
            </Logout>
        }
      </AccountContainer>
      <Drawer
        title="Log in"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={showLogin}
        className="customDrawer"
        destroyOnClose={true}
      >
        <LoginPage closeDrawer={onClose} />
      </Drawer>
    </Fragment>
  );
};

export default AccountPage;
