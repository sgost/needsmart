import React, { Fragment, useEffect, useState } from 'react';
import { Radio, Button } from 'antd';
import AddressForm from '../../components/AddressForm';
import SavedAddress from '../../components/SavedAddress';
import { getAllAddress } from "../../utils/services/addressAPI";
import AddIcon from '../../images/add-icon.svg';
import {
  Container,
  AddButton
} from './styles';

const AddressContainer = props => {

  const[loading, setLoading] = useState(true);

  const[allAddress, setAllAddress] = useState([]);

  const[showForm, setShowForm] = useState(true);

  useEffect(() => {
    getAllAddress(res => {
      if(res.length > 0) {
        setShowForm(false);
      } else {
        setShowForm(true);
      }
      setAllAddress(res);
      setLoading(false);
    });
  }, []);

  const[value, setValue] = useState('new');

  const onChange = e => {
    if(e.target.value !== 'new') {
      setShowForm(false);
    }
    setValue(e.target.value);
  };

  const addNewAddress = () => {
    setShowForm(true);
    setValue('new');
  };

  const savedNewAddress = (data) => {
    setAllAddress([...allAddress, data]);
    setShowForm(false);
    setValue(data.id);
  };

  const updateAddress = (data) => {
    let addressArr = allAddress.map(address => {
      let addrObj = address;
      if(addrObj.id === data.id) {
        addrObj = data;
      }
      return addrObj;
    });
    setAllAddress(addressArr);
  };

  const deletedAddress = (data) => {
    let addressArr = allAddress.filter(address => {
      return address.id !== data.id;
    });
    if(addressArr.length === 0) {
      setValue('new');
    }
    setAllAddress(addressArr);
  };

  const saveDelivery = (data) => {
    let findAddrObj = allAddress.find((itmInner) => itmInner.id === value);
    if(findAddrObj) {
      props.getDeliveryAddress(findAddrObj);
    }
  };

  return (
    <Fragment>
      {
        !loading &&
        <Container>
          {
            (allAddress.length > 0 && !showForm) &&
            <AddButton>
              <Button onClick={addNewAddress}>
                <img src={AddIcon} alt="Add"/> Add a new address
              </Button>
            </AddButton>
          }
          <Radio.Group onChange={onChange} value={value}>
            {
              (allAddress.length === 0 || showForm) &&
              <Radio value="new" className="addressRadioBtn">
                Add a new address
                <AddressForm saved={savedNewAddress} />
              </Radio>
            }
            {
              allAddress.length > 0 && allAddress.map(address =>
                <Radio value={address.id} key={address.id} className="savedAddress">
                  <SavedAddress
                    data={address}
                    selectedValue={value}
                    updateHomeAddress={updateAddress}
                    deliverHere={saveDelivery}
                    deleted={deletedAddress}
                  />
                </Radio>
              )
            }
          </Radio.Group>
        </Container>
      }
    </Fragment>
  );
};

export default AddressContainer;
