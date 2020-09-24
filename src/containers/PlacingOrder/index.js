import React, { useState, useEffect, useContext, Fragment } from 'react';
import { Row, Col } from 'antd';
import CheckoutAccordion from "../../containers/CheckoutAccordion";
import CartItemsList from "../../components/CartItemsList";
import { UserContext } from '../../utils/context/user';
import { CartSummaryContext } from '../../utils/context/cartSummary';
import EmptyState from "../../components/EmptyState";
import EmptyCart from "../../images/empty-cart.png";
import EmptyList from '../../images/empty-list.png';
import {
  Container,
  CartContainer,
  Title
} from './styles';

const PlacingOrder = () => {

  const[loading, setLoading] = useState(true);

  const { user } = useContext(UserContext);

  const { cartSummary, getDetails } = useContext(CartSummaryContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      {
        !loading && user === null ?
        <EmptyState
          image={EmptyList}
          title="It’s empty here"
          description="Please sign in to continue shopping"
          btnName="SIGN IN"
          signIn={true}
        /> :
        !loading &&
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
      }
    </Fragment>
  );
};

export default PlacingOrder;
