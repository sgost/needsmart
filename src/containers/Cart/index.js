import React, { Fragment, useContext } from 'react';
import CartItemsList from "../../components/CartItemsList";
import EmptyState from "../../components/EmptyState";
import EmptyCart from "../../images/empty-cart.png";
import EmptyList from '../../images/empty-list.png';
import { UserContext } from '../../utils/context/user';
import {

} from './styles';

const Cart = ({ outletDetails, cartSummary, onClose }) => {

  const { user } = useContext(UserContext);

  return (
    <Fragment>
      {
        user === null ?
        <EmptyState
          image={EmptyList}
          title="It’s empty here"
          description="Please sign in to continue shopping"
          btnName="SIGN IN"
          signIn={true}
        /> :
        Object.keys(cartSummary).length === 0 ?
        <EmptyState
          image={EmptyCart}
          title="Your cart is empty"
          description="You have no items in your cart, lets buy something"
          btnName="Shop Now"
          linkTo="/items/all"
          onClose={onClose}
        /> : <CartItemsList showCheckout={true} outlet={outletDetails} onClose={onClose} />
      }
    </Fragment>
  );
};

export default Cart;
