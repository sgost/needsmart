import React, { useState } from 'react';
import { Form, Button } from "antd"
import { validateOTP } from "../../utils/services/auth";
import OtpInput from 'react-otp-input';
import  {
  ResendLink
} from './styles';

const OTPForm = props => {

  const [form] = Form.useForm();

  const[otp, setOtp] = useState('');

  const [disabled, setDisabled] = useState(true);
  const [active, setActive] = useState(false);

  const handleChange = otp => {
    if(otp.length < 6) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    setOtp(otp);
  };

  const onFinish = values => {
    setActive(true);
    var formData = {
      phone_number: props.phoneNumber,
      otp: values.otp
    };
    validateOTP(
      formData,
      success => {
        localStorage.setItem('api_token', success.data.auth_token);
        props.numOTPSuccess(success.data);
        setActive(false);
      },
      errorMessages => {
        setActive(true);
      }
    );
  };

  const resendOtp = () => {
    props.resendOtp();
  };

  return (
    <Form
      name="otp-form"
      className="numberForm"
      onFinish={onFinish}
      form={form}
    >
      <Form.Item
        name="otp"
        rules={[
          {
            required: true,
            message: 'Please enter OTP'
          }
        ]}
        className="numberInput"
      >
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={6}
          isInputNum={true}
          shouldAutoFocus={true}
          inputStyle="otpInput"
          focusStyle="otpInputFocus"
        />
      </Form.Item>
      <ResendLink>
        <span onClick={resendOtp}>Resend OTP</span>
      </ResendLink>
      <Form.Item className="submitFormItem">
        <Button type="primary" htmlType="submit" disabled={disabled || active}>
          {disabled ? 'Enter OTP' : 'Continue'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OTPForm;
