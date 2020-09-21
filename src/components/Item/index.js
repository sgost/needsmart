import React, { Fragment, useState, useContext, useEffect } from 'react';
import { Button, Drawer, message, Modal } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import LoginPage from '../../containers/Login';
import UnitsList from '../../components/UnitsList';
import { addItems, removeItem } from "../../utils/services/cartAPI";
import { CartSummaryContext } from '../../utils/context/cartSummary';
import {
  ItemContainer,
  ItemSection,
  ItemImage,
  ItemDetails,
  ItemName,
  ItemDesc,
  ItemUnit,
  ItemPrice,
  AddItem,
  ItemsAction,
  AllUnits
} from './styles';

const Item = props => {

  const { cartSummary, getDetails } = useContext(CartSummaryContext);

  const[data, setData] = useState({});

  useEffect(() => {
    let productItem = props.data;
    if(Object.keys(cartSummary).length === 0) {
      setData(productItem);
    } else {
      let cartItemObj = cartSummary.cart_items.find((itmInner) => itmInner.id === productItem.item.id);
      if(cartItemObj) {
        if(productItem.all_units && productItem.all_units.length > 0) {
          let cartItemUnit = productItem.all_units.find((itmInner) => itmInner.item.id === cartItemObj.id);
          if(cartItemUnit) {
            cartItemUnit.item = cartItemObj;
          }
        }
        productItem.item = cartItemObj;
        setData(prevObj => ({...prevObj, ...productItem}));
      } else if(cartItemObj === undefined) {
        productItem = props.data;
        productItem.item.quantity = 0;
        setData(prevObj => ({...prevObj, ...productItem}));
      }
    }
  }, [cartSummary, props.data]);

  const [showLogin, setShowLogin] = useState(false);

  const addItem = () => {
    if(localStorage.getItem('api_token') === null) {
      setShowLogin(true);
    } else {
      addToCart();
    }
  };

  const addToCart = () => {
    if(data.item.quantity === (Object.keys(cartSummary).length !== 0 && cartSummary.outlet.max_selection_quantity_per_item)) {
      message.warning('You cannot add any more quantity of this item');
    } else {
      addItems(
        data.item.id,
        success => {
          getDetails(success.data);
        },
        errorMessages => {
          console.log('error');
        }
      );
    }
  };

  const removeFromCart = () => {
    removeItem(
      data.item.id,
      success => {
        data.item.quantity = 0;
        getDetails(success.data);
      },
      errorMessages => {
        console.log('error');
      }
    );
  };

  const onClose = () => {
    setShowLogin(false);
  };

  //all units modal

  const mainItem = props.data;

  const[modalVisible, setModalVisible] = useState(false);

  const allUnits = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const changeUnit = unit => {
    setModalVisible(false);
    setData(prevObj => ({...prevObj, ...unit}));
  };

  return (
    <Fragment>
      {
        data.item &&
        <ItemContainer>
          <ItemSection>
            <ItemImage>
              <img src={data.item.image_url} alt={data.item.name} />
            </ItemImage>
            <ItemDetails>
              <ItemName>{data.item.name}</ItemName>
              <ItemDesc>{data.item.brand}</ItemDesc>
              <ItemUnit>
                {
                  data.all_units ?
                  <AllUnits onClick={allUnits}>
                    <span>{data.item.size}{data.item.unit}</span><DownOutlined />
                  </AllUnits>
                  :<span>{data.item.size}{data.item.unit}</span>
                }
              </ItemUnit>
              <ItemPrice>
                Rs. <span className={data.sp && 'lineThrough'}>{data.mrp}</span> {data.sp && <span className="sprice">{data.sp}</span>}
              </ItemPrice>
            </ItemDetails>
          </ItemSection>
          <AddItem status={data.status}>
            {
              (data.status === 'available' || (data.sku === 0 && data.continue_shop_when_out_of_stock)) &&
              <Fragment>
                {
                  data.item.quantity > 0 && Object.keys(cartSummary).length !== 0 ?
                  <ItemsAction>
                    <span className="remove" onClick={removeFromCart}>-</span>
                    <span className="quantity">{data.item.quantity}</span>
                    <span className="add" onClick={addItem}>+</span>
                  </ItemsAction>
                  : <Button className="addBtn" onClick={addItem}>Add</Button>
                }
              </Fragment>
            }
            {
              (data.status === 'not_available' || (data.sku === 0 && !data.continue_shop_when_out_of_stock)) && <span className="notAvail">Out of Stock </span>
            }
          </AddItem>
          <Modal
            title={<Fragment><span>Available Quantities for</span>{mainItem.item.name}</Fragment>}
            visible={modalVisible}
            onCancel={handleCancel}
            footer={null}
            closable={false}
            className="unitModal"
          >
            <UnitsList mainItem={mainItem} changeUnit={changeUnit} />
          </Modal>
        </ItemContainer>
      }
      <Drawer
        title="Log in"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={showLogin}
        className="customDrawer"
        destroyOnClose={true}
      >
        <LoginPage closeDrawer={onClose} />
      </Drawer>
    </Fragment>
  );
};

export default Item;
