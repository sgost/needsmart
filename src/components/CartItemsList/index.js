import React, { Fragment, useContext } from 'react';
import { NavLink } from "react-router-dom";
import { Button, message } from 'antd';
import { addItems, removeItem } from "../../utils/services/cartAPI";
import { CartSummaryContext } from '../../utils/context/cartSummary';
import {
  ItemsListContainer,
  ListItem,
  ItemDetails,
  ActionContainer,
  ItemsAction,
  PriceContainer,
  ItemPrice,
  TotalPrice,
  CheckoutBtn,
  CartDetails
} from './styles';

const CartItemsList = ({ outlet, onClose, showCheckout }) => {

  const { cartSummary, getDetails } = useContext(CartSummaryContext);

  const addToCart = (item) => {
    if(item.quantity === cartSummary.outlet.max_selection_quantity_per_item) {
      message.warning('You cannot add any more quantity of this item');
    } else {
      addItems(
        item.id,
        success => {
          getDetails(success.data);
        },
        errorMessages => {}
      );
    }
  };

  const removeFromCart = (item) => {
    removeItem(
      item.id,
      success => {
        getDetails(success.data);
      },
      errorMessages => {}
    );
  };

  const closeDrawer = () => {
    if(outlet) {
      onClose();
    }
  };

  return (
    <Fragment>
      {
        outlet &&
        <CartDetails>
          <span className="outletName">{outlet.name}</span>
          <NavLink to="/items/all" className="addMore" onClick={() => onClose()}>+ Add More</NavLink>
        </CartDetails>
      }
      <ItemsListContainer>
        {
          cartSummary.cart_items && cartSummary.cart_items.map(item =>
            <ListItem key={item.id}>
              <ItemDetails>
                <h4 className="name">{item.name}</h4>
                <span className="brand">{item.brand}</span>
                <span className="quantity">{item.size} {item.unit}</span>
              </ItemDetails>
              <ActionContainer>
                <ItemsAction>
                  <span className="remove" onClick={() => removeFromCart(item)}>-</span>
                  <span className="quantity">{item.quantity}</span>
                  <span className="add" onClick={() => addToCart(item)}>+</span>
                </ItemsAction>
                <span className="itemPrice">Rs. {item.total_price}</span>
              </ActionContainer>
            </ListItem>
          )
        }
      </ItemsListContainer>
      <PriceContainer>
        <ItemPrice>
          <span>Item total</span>
          <span>Rs. {cartSummary.item_total_price}</span>
        </ItemPrice>
        <ItemPrice>
          <span>Delivery fee</span>
          <span>Rs. {cartSummary.outlet.delivery_charge}</span>
        </ItemPrice>
      </PriceContainer>
      <TotalPrice>
        <span>Total Price</span>
        <span>Rs. {cartSummary.total_price}</span>
      </TotalPrice>
      {
        showCheckout &&
        <CheckoutBtn>
          <Button type="primary">
            <NavLink to="/checkout" onClick={closeDrawer}>Checkout</NavLink>
          </Button>
        </CheckoutBtn>
      }
    </Fragment>
  );
};

export default CartItemsList;
