import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button } from "antd"
import { updateUser } from "../../utils/services/auth";
import { UserContext } from '../../utils/context/user';

const NameForm = props => {

  const history = useHistory();

  const { getDetails } = useContext(UserContext);

  const [form] = Form.useForm();

  const [disabled, setDisabled] = useState(true);

  const [active, setActive] = useState(false);

  const onFinish = values => {
    setActive(true);
    var nameObj = {
      name: values.name
    };
    updateUser(
      nameObj,
      success => {
        props.numNameSuccess();
        setActive(false);
        history.go(0);
        getDetails();
      },
      errorMessages => {
        setActive(true);
      }
    );
  };

  return (
    <Form
      name="name-form"
      className="numberForm"
      onFinish={onFinish}
      form={form}
      onFieldsChange={() =>
        setDisabled(
          form.getFieldsError().some((field) => field.errors.length > 0)
        )
      }
    >
      <label className="inputLabel">Enter your name</label>
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: "Please enter your name",
          },
        ]}
        className="numberInput"
      >
        <Input type="text" />
      </Form.Item>
      <Form.Item className="submitFormItem">
        <Button type="primary" htmlType="submit" disabled={disabled || active}>
          Continue
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NameForm;
