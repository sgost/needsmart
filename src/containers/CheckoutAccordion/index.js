import React, { Fragment, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Collapse, message } from 'antd';
import moment from 'moment';
import AddressContainer from '../../containers/AddressContainer';
import SlotSelection from '../../containers/SlotSelection';
import PaymentContainer from '../../containers/Payment';
import { createTransaction } from "../../utils/services/transactionAPI";
import { createOrder } from "../../utils/services/ordersAPI";
import {
  AddressDetails,
  SlotDetails
} from './styles';

const CheckoutAccordion = ({ cartSummary, updateCart, user }) => {

  const history = useHistory();

  const { Panel } = Collapse;

  const[panelKey, setPanelKey] = useState('1');

  const callback = (key) => {
    setPanelKey(key);
  };

  const[address, setAddress] = useState({});

  const[slot, setSlot] = useState({});

  const[paymentOption, setPaymentOption] = useState({});

  //delivery address
  const addressHeader = (
    <Fragment>
      <div>
        1. Delivery Address
        {
          Object.keys(address).length !== 0 &&
          <AddressDetails>
            <span className="house">{address.house}</span>
            <span>{address.landmark}</span>
            <span>{address.street}, {address.area}</span>
            <span>{address.town}, {address.state}, {address.pincode}</span>
          </AddressDetails>
        }
      </div>
    </Fragment>
  );

  const changeAddress = () => {
    setAddress({});
    setSlot({});
    setPaymentOption({});
  };

  const getDeliveryAddress = (data) => {
    setAddress(data);
    setPanelKey('2');
  };

  //slot
  const slotHeader = (
    <Fragment>
      <div>
        2. Slot Selection
        {
          Object.keys(slot).length !== 0 &&
          <SlotDetails>{slot.start_time} - {slot.end_time}, {slot.slot_day}</SlotDetails>
        }
      </div>
    </Fragment>
  );

  const changeSlot = () => {
    setSlot({});
    setPaymentOption({});
  };

  const getSlotDetails = data => {
    setSlot(data);
    setPanelKey('3');
  };

  //payment options
  const getPaymentMode = data => {
    setPaymentOption(data);
    transaction(data);
  };

  const transaction = (payOption) => {

    var data = {
      payment_type: payOption.key || paymentOption.key,
      transaction_ref: moment().unix(),
      amount: cartSummary.total_price,
      status: "pending",
      from: user.name,
      to: cartSummary.outlet.name,
      outlet_id: cartSummary.outlet.id
    };

    createTransaction(
      data,
      success => {
        orderCheckout(success.data.id);
      },
      errorMessages => {
        console.log(errorMessages);
      }
    );
  };

  const orderCheckout = (id) => {
    var data = {
      address_id: address.id,
      slot_time: `${slot.start_time} - ${slot.end_time}`,
      slot_date: slot.date,
      order_transaction_id: id,
      outlet_id: cartSummary.outlet.id
    };

    createOrder(
      data,
      success => {
        message.success('Your order has been placed and items will be delivered at your door step');
        updateCart({});
        history.push("/orders");
      },
      errorMessages => {
        console.log(errorMessages);
      }
    );
  };

  return (
    <Collapse
      accordion
      defaultActiveKey={['1']}
      activeKey={panelKey}
      onChange={callback}
      className="checkoutCollapse"
    >
      <Panel
        showArrow={false}
        header={addressHeader}
        key="1"
        extra={Object.keys(address).length !== 0 && <span onClick={changeAddress}>Change</span>}
      >
        <AddressContainer getDeliveryAddress={getDeliveryAddress} />
      </Panel>
      <Panel
        showArrow={false}
        header={slotHeader}
        key="2"
        disabled={Object.keys(address).length === 0 ? true : false }
        extra={Object.keys(slot).length !== 0 && <span onClick={changeSlot}>Change</span>}
      >
        <SlotSelection slot={getSlotDetails} />
      </Panel>
      <Panel
        showArrow={false}
        header="3. Payment Options"
        key="3"
        disabled={Object.keys(slot).length === 0 ? true : false }
      >
        <PaymentContainer placeOrder={getPaymentMode} />
      </Panel>
    </Collapse>
  );
};

export default CheckoutAccordion;
