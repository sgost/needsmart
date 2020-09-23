import React from 'react';
import { Form, Input, Button } from 'antd';
import { saveAddress, updateAddress } from "../../utils/services/addressAPI";
import {
  Container,
  FieldItem
} from './styles';

const AddressForm = props => {

  const onFinish = (values) => {
    const data = values;
    if(props.edit) {
      updateAddress(
        props.values.id,
        data,
        success => {
          props.updated(success);
        },
        errorMessages => {
          console.log('error');
        }
      );
    } else {
      saveAddress(
        data,
        success => {
          props.saved(success);
        },
        errorMessages => {
          console.log('error');
        }
      );
    }
  };

  return (
    <Container>
      <Form
        name="address-form"
        onFinish={onFinish}
        initialValues={props.values ? props.values : {}}
        className="addressForm"
      >
        <FieldItem>
          <label>House No & Apartment Details</label>
          <Form.Item
            name="house"
            rules={[
              {
                required: true,
                message: 'Please enter House No',
              }
            ]}
          >
            <Input placeholder="Eg: 1-77, Venkateswara Nilayam" />
          </Form.Item>
        </FieldItem>
        <FieldItem>
          <label>Street Details</label>
          <Form.Item
            name="street"
            rules={[
              {
                required: true,
                message: 'Please enter Street Details',
              },
            ]}
          >
            <Input placeholder="Eg: Teachers Colony" />
          </Form.Item>
        </FieldItem>
        <FieldItem>
          <label>Landmark</label>
          <Form.Item
            name="landmark"
            rules={[
              {
                required: true,
                message: 'Please enter Landmark',
              },
            ]}
          >
            <Input placeholder="Eg: Near Bus Stand" />
          </Form.Item>
        </FieldItem>
        <FieldItem>
          <label>Area</label>
          <Form.Item
            name="area"
            rules={[
              {
                required: true,
                message: 'Please enter Area',
              },
            ]}
          >
            <Input placeholder="Eg: Navalur" />
          </Form.Item>
        </FieldItem>
        <FieldItem>
          <label>Town/City</label>
          <Form.Item
            name="town"
            rules={[
              {
                required: true,
                message: 'Please enter Town/City',
              },
            ]}
          >
            <Input placeholder="Eg: Chennai" />
          </Form.Item>
        </FieldItem>
        <div>
          <FieldItem>
            <label>State</label>
            <Form.Item
              name="state"
              rules={[
                {
                  required: true,
                  message: 'Please enter State',
                },
              ]}
            >
              <Input placeholder="Eg: Tamilnadu" />
            </Form.Item>
          </FieldItem>
          <FieldItem>
            <label>Pincode</label>
            <Form.Item
              name="pincode"
              rules={[
                {
                  required: true,
                  message: 'Please enter Pincode',
                },
              ]}
            >
              <Input placeholder="Eg: 600097" />
            </Form.Item>
          </FieldItem>
        </div>
        <Form.Item className="formSubmit">
          <Button type="primary" htmlType="submit">
            Save Details
          </Button>
          {
            props.edit && <Button className="cancelBtn" onClick={() => props.cancel()}>Cancel</Button>
          }
        </Form.Item>
      </Form>
    </Container>
  );
};

export default AddressForm;
