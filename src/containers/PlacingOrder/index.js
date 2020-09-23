import React, { Fragment, useContext } from 'react';
import { Row, Col } from 'antd';
import CheckoutAccordion from "../../containers/CheckoutAccordion";
import CartItemsList from "../../components/CartItemsList";
import { UserContext } from '../../utils/context/user';
import { CartSummaryContext } from '../../utils/context/cartSummary';
import EmptyState from "../../components/EmptyState";
import EmptyCart from "../../images/empty-cart.png";
import {
  Container,
  CartContainer,
  Title
} from './styles';

const PlacingOrder = () => {

  const { user } = useContext(UserContext);
  const { cartSummary, getDetails } = useContext(CartSummaryContext);

  return (
    <Container>
      {
        Object.keys(cartSummary).length !== 0 ?
        <Row className="rowContainer">
          <Col xs={24} sm={24} md={15} lg={16} xl={16} className="accordion">
            <CheckoutAccordion cartSummary={cartSummary} updateCart={(val) => getDetails(val)} user={user} />
          </Col>
          <Col xs={24} sm={24} md={9} lg={8} xl={8} className="orderSummary">
            <CartContainer>
              <Title>Order Summary</Title>
              <CartItemsList showCheckout={false} />
            </CartContainer>
          </Col>
        </Row> :
        <EmptyState
          image={EmptyCart}
          title="Your cart is empty"
          description="You have no items in your cart, lets buy something"
          btnName="Shop Now"
          linkTo="/items/all"
        />
      }
    </Container>
  );
};

export default PlacingOrder;
