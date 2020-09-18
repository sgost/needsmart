import React, { Fragment, useState, useContext, useEffect } from 'react';
import { Button, Drawer, message } from 'antd';
import LoginPage from '../../containers/Login';
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
  ItemsAction
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
        productItem.item = cartItemObj;
        setData(prevObj => ({...prevObj, ...productItem}));
      } else
      if(cartItemObj === undefined) {
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
                {data.item.size}{data.item.unit}
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
