import React from 'react';
import moment from 'moment';
import Phone from '../../images/phone.svg';
import {
  OrderCard,
  CardTitle,
  OrderId,
  StatusLabel,
  OrderDetails,
  DeliveryDetails
} from './styles';

const Order = props => {

  const order = props.data;

  return (
    <OrderCard style={{boxShadow: props.currentId === order.id && '0px 0px 5px #3C6BC7', border: props.currentId === order.id && 'none'}}>
      <CardTitle>
        <OrderId>Order ID: <span>{order.order_id}</span></OrderId>
        <StatusLabel status={order.status}>
          {
            order.status === 'ready_to_deliver' ? 'Out for Delivery' : order.status
          }
        </StatusLabel>
      </CardTitle>
      <OrderDetails>
        <span>Rs. {order.total_price} ({order.total_quantity} items) | {moment(order.created_at).format('DD-MMM-YY')}</span>
      </OrderDetails>
      <DeliveryDetails>
        <span className="slot">Delivery: {order.slot_date} {order.slot_time}</span>
        <a href={'tel:' + order.partner_phone_number} className="phone">
          <img src={Phone} alt="phone number" />
          Call Shop
        </a>
      </DeliveryDetails>
    </OrderCard>
  );
};

export default Order;
