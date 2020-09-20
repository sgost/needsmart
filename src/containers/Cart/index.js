import React, { Fragment } from 'react';
import CartItemsList from "../../components/CartItemsList";
import EmptyState from "../../components/EmptyState";
import EmptyCart from "../../images/empty-cart.png";
import {

} from './styles';

const Cart = ({ outletDetails, cartSummary, onClose }) => {
  return (
    <Fragment>
      {
        Object.keys(cartSummary).length === 0 ?
        <EmptyState
          image={EmptyCart}
          title="Your cart is empty"
          description="You have no items in your cart, lets buy something"
          btnName="Shop Now"
          linkTo="/items/all"
          onClose={onClose}
        /> : <CartItemsList outlet={outletDetails} onClose={onClose} />
      }
    </Fragment>
  );
};

export default Cart;
