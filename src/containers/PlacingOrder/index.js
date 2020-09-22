import React, { Fragment, useContext } from 'react';
import { Row, Col } from 'antd';
import CheckoutAccordion from "../../containers/CheckoutAccordion";
import CartItemsList from "../../components/CartItemsList";
import { UserContext } from '../../utils/context/user';
import { CartSummaryContext } from '../../utils/context/cartSummary';
import {
  Container,
  CartContainer,
  Title
} from './styles';

const PlacingOrder = () => {

  const { user } = useContext(UserContext);
  const { cartSummary } = useContext(CartSummaryContext);

  return (
    <Container>
      <Row className="rowContainer">
        <Col xs={24} sm={24} md={15} lg={16} xl={16} className="accordion">
          <CheckoutAccordion cartSummary={cartSummary} user={user} />
        </Col>
        <Col xs={24} sm={24} md={9} lg={8} xl={8} className="orderSummary">
          <CartContainer>
            {
              Object.keys(cartSummary).length !== 0 &&
              <Fragment>
                <Title>Order Summary</Title>
                <CartItemsList showCheckout={false} />
              </Fragment>
            }
          </CartContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default PlacingOrder;
