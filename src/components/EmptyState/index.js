import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import {
  Container,
  ContentSection,
  ImageContainer,
  Content
} from './styles';

const EmptyState = props => {

  const content = props;

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
        <Button type="primary">
          <NavLink to={content.linkTo} onClick={() => content.onClose()}>
            {content.btnName}
          </NavLink>
        </Button>
      </ContentSection>
    </Container>
  );
};

export default EmptyState;
