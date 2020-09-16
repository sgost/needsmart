import React, { useState } from 'react';
import { Form, Input, Button } from "antd"
import { CreateUser } from "../../utils/services/auth";

const NumberForm = props => {

  const [form] = Form.useForm();

  const [disabled, setDisabled] = useState(true);
  const [active, setActive] = useState(false);

  const onFinish = values => {
    setActive(true);
    var formObj = {
      phone_number: '+91'+values.phone_number
    };

    CreateUser(
      formObj,
      success => {
        setActive(false);
        props.numFormSuccess(formObj, success.data.auth_token);
      },
      errorMessages => {
        setActive(true);
      }
    );
  };

  return (
    <Form
      name="login-form"
      className="numberForm"
      onFinish={onFinish}
      form={form}
      onFieldsChange={() =>
        setDisabled(
          form.getFieldsError().some((field) => field.errors.length > 0)
        )
      }
    >
      <label className="inputLabel">Phone Number</label>
      <Form.Item
        name="phone_number"
        rules={[
          {
            required: true,
            message: "Please enter mobile number",
          },
          {
            pattern: "[0-9]{10}",
            message: "Please enter valid mobile number",
          },
        ]}
        className="numberInput"
      >
        <Input
          type="text"
          maxLength={10}
          addonBefore="+91"
        />
      </Form.Item>
      <Form.Item className="submitFormItem">
        <Button type="primary" htmlType="submit" disabled={disabled || active}>
          {disabled ? 'Enter Mobile Number' : 'Continue'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NumberForm;
