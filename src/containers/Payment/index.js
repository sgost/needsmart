import React, { useEffect, useState } from 'react';
import { Radio, Button } from 'antd';
import { getPaymentModes } from "../../utils/services/paymentModesAPI";
import CashOnDeliveryIcon from "../../images/cashon-delivery.svg";
import GooglePayIcon from "../../images/google-pay.svg";
import {
  Container,
  ModeText,
  ModeIcon,
  PlaceOrderBtn
} from './styles';

const PaymentContainer = props => {

  const[modes, setModes] = useState([]);

  useEffect(() => {
    getPaymentModes(
      success => {
        setModes(success.data);
      }
    );
  }, []);

  const[value, setValue] = useState('');

  const modeChange = e => {
    setValue(e.target.value);
  };

  const placeOrder = () => {
    let modeObj = modes.find((mode) => mode.id === value);
    if(modeObj) {
      props.placeOrder(modeObj);
    }
  };

  return (
    <Container>
      <Radio.Group name="payment-modes" value={value} className="paymentModes" onChange={modeChange}>
        {
          modes && modes.map(mode =>
            <Radio value={mode.id} key={mode.id}>
              <ModeText>
                <ModeIcon>
                  { mode.key === 'GooglePay' && <img src={GooglePayIcon} alt={mode.key}/> }
                  { mode.key === 'Cash on Delivery' && <img src={CashOnDeliveryIcon} alt={mode.key}/> }
                </ModeIcon>
                {mode.key}
              </ModeText>
            </Radio>
          )
        }
      </Radio.Group>
      {
        value &&
        <PlaceOrderBtn>
          <Button type="primary" onClick={placeOrder}>Place Order</Button>
        </PlaceOrderBtn>
      }
    </Container>
  );
};

export default PaymentContainer;
