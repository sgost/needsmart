import React, { Fragment, useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";
import { getOrder } from "../../utils/services/ordersAPI";
import {
  OrderDetailsContainer,
  DeliveryAddress,
  AddressDetails,
  OrderStatus,
  OrderStatusItem,
  ListHeader,
  ItemsListContainer,
  ListItem,
  ItemQuantity,
  ItemTotalPrice,
  ItemDetails,
  PriceContainer,
  ItemPrice,
  TotalPrice
} from './styles';

const OrderDetails = ({ match }) => {

  const[orderItem, setOrderItem] = useState({});

  useEffect(() => {
    if(match.params.id) {
      getOrderDetails(match.params.id);
    }
  }, [match]);

  const getOrderDetails = id => {
    getOrder(
      id,
      res => {
        setOrderItem(res.data);
      },
      err => {
        console.log(err);
      }
    );
  };

  return (
    <Fragment>
      {
        Object.keys(orderItem).length !== 0 &&
        <OrderDetailsContainer>
          <DeliveryAddress>
            <h3>Delivery Address</h3>
            <AddressDetails>
              <span>{orderItem.address.house}</span>
              <span>{orderItem.address.landmark}</span>
              <span>{orderItem.address.street}, {orderItem.address.area}</span>
              <span>{orderItem.address.town}, {orderItem.address.state}, {orderItem.address.pincode}</span>
            </AddressDetails>
          </DeliveryAddress>
          <OrderStatus>
            <OrderStatusItem>
              <span>Delivery Slot: </span> {orderItem.slot_date}, {orderItem.slot_time}
            </OrderStatusItem>
            <OrderStatusItem>
              <span>Order Status: </span> {orderItem.status}
            </OrderStatusItem>
            <OrderStatusItem>
              <span>Payment Status: </span> {orderItem.payment_status} | {orderItem.payment_type}
            </OrderStatusItem>
          </OrderStatus>
          <div>
            <ListHeader>
              <h3>Item Name</h3>
              <h3 className="itemQuantity">Qty</h3>
              <h3 className="itemPrice">Price</h3>
            </ListHeader>
            <ItemsListContainer>
              {
                orderItem.selected_items && orderItem.selected_items.map(item =>
                  <ListItem key={item.id}>
                    <ItemDetails>
                      <h4 className="name">{item.name}</h4>
                      <span className="brand">{item.brand}</span>
                      <span className="quantity">{item.size} {item.unit}</span>
                    </ItemDetails>
                    <ItemQuantity>
                      {item.quantity}
                    </ItemQuantity>
                    <ItemTotalPrice>
                      Rs. {item.total_price}
                    </ItemTotalPrice>
                  </ListItem>
                )
              }
            </ItemsListContainer>
            <PriceContainer>
              <ItemPrice>
                <span className="title">Item total</span>
                <span>Rs. {orderItem.item_total_price}</span>
              </ItemPrice>
              <ItemPrice>
                <span className="title">Delivery fee</span>
                <span>Rs. {orderItem.delivery_charge}</span>
              </ItemPrice>
            </PriceContainer>
            <TotalPrice>
              <span>Total Price</span>
              <span>Rs. {orderItem.total_price}</span>
            </TotalPrice>
          </div>
        </OrderDetailsContainer>
      }
    </Fragment>
  );
};

export default withRouter(OrderDetails);
