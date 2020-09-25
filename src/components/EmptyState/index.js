import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Drawer } from 'antd';
import LoginPage from '../../containers/Login';
import {
  Container,
  ContentSection,
  ImageContainer,
  Content
} from './styles';

const EmptyState = props => {

  const content = props;

  const [showLogin, setShowLogin] = useState(false);

  const onClose = () => {
    setShowLogin(false);
  };

  const btnClick = () => {
    if(content.onClose) {
      content.onClose();
    }
    if(content.signIn) {
      setShowLogin(true);
    }
  };

  return (
    <Container>
      <ContentSection>
        <ImageContainer>
          <img src={content.image} alt={content.title} />
        </ImageContainer>
        <Content>
          <h3>{content.title}</h3>
          <p>{content.description}</p>
        </Content>
        <Button type="primary" onClick={btnClick}>
          {
            content.linkTo ?
            <NavLink to={content.linkTo}>
              {content.btnName}
            </NavLink> :
            content.btnName
          }
        </Button>
      </ContentSection>
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
    </Container>
  );
};

export default EmptyState;
