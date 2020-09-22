import React, { Fragment, useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import AddressForm from '../../components/AddressForm';
import { deleteAddress } from "../../utils/services/addressAPI";
import {
  AddressSection,
  AddressDetails,
  EditSection,
  EditAddress,
  DeleteAddress,
  DeliverBtn
} from './styles';

const SavedAddress = props => {

  const { confirm } = Modal;

  const[data, setData] = useState({});

  const[showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    if(props.selectedValue === 'new') {
      setShowEditForm(false);
    }
    if(props.selectedValue !== props.data.id) {
      setShowEditForm(false);
    }
    setData(props.data);
  }, [props]);

  const edit = () => {
    setShowEditForm(true);
  };

  const updatedAddress = (dataObj) => {
    setData(dataObj);
    setShowEditForm(false);
    props.updateHomeAddress(dataObj);
  };

  const cancelEdit = () => {
    setShowEditForm(false);
  };

  const deleteAddr = () => {
    confirm({
      title: 'Are you sure you want to delete this address?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Yes',
      cancelText: 'No',
      className: "deleteModal",
      cancelButtonProps: { style: { height: '48px' } },
      onOk() {
        deleteAddress(
          data.id,
          success => {
            props.deleted(data);
          },
          errorMessages => {
            console.log('error');
          }
        );
      },
      onCancel() {},
    });
  };

  const deliverHere = () => {
    props.deliverHere(data);
  };

  return (
    <Fragment>
      {
        (!showEditForm && Object.keys(data).length !== 0) ?
        <Fragment>
          {data.house}
          <AddressSection>
            <AddressDetails>
              <span>{data.landmark}</span>
              <span>{data.street}, {data.area}</span>
              <span>{data.town}, {data.state}, {data.pincode}</span>
            </AddressDetails>
            <EditSection>
              <EditAddress onClick={edit}>Edit</EditAddress>
              <DeleteAddress onClick={deleteAddr}>Delete</DeleteAddress>
            </EditSection>
          </AddressSection>
          {
            props.selectedValue === data.id &&
            <DeliverBtn>
              <Button type="primary" onClick={deliverHere}>Deliver Here</Button>
            </DeliverBtn>
          }
        </Fragment> :
        <Fragment>
          Edit Address
          <AddressForm values={data} edit={true} updated={updatedAddress} cancel={cancelEdit} />
        </Fragment>
      }
    </Fragment>
  );
};

export default SavedAddress;
