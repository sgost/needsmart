import React, { Fragment, useState, useContext, useRef } from 'react';
import { Button, Drawer, Carousel } from 'antd';
import LoginPage from '../../containers/Login';
import { CartSummaryContext } from '../../utils/context/cartSummary';
import LeftArrow from '../../images/left-arrow-icon.svg';
import RightArrow from '../../images/right-arrow-icon.svg';
import {
  ItemContainer,
  ItemSection,
  ItemDetails,
  ItemName,
  ItemDesc,
  ItemUnit,
  ItemPrice,
  AddItem,
  ItemsAction,
  CarouselContainer,
  CarouselImage
} from './styles';

const ViewItem = props => {

  const { cartSummary } = useContext(CartSummaryContext);

  const data = props.data;

  const [showLogin, setShowLogin] = useState(false);

  const addItem = () => {
    if(localStorage.getItem('api_token') === null) {
      setShowLogin(true);
    } else {
      props.addToCart();
    }
  };

  const onClose = () => {
    setShowLogin(false);
  };

  const slider = useRef(null);

  return (
    <Fragment>
      {
        data.item &&
        <div>
          <CarouselContainer>
            {
              data.item.images_urls.length > 1 &&
              <span className="leftArrow" onClick={() => slider.current.prev()}>
                <img src={LeftArrow} alt="prev" />
              </span>
            }
            <Carousel ref={slider}>
              {
                data.item.images_urls && data.item.images_urls.map((image, index) =>
                  <CarouselImage key={index}>
                    <img src={image} alt={data.item.name} />
                  </CarouselImage>
                )
              }
            </Carousel>
            {
              data.item.images_urls.length > 1 &&
              <span className="rightArrow" onClick={() => slider.current.next()}>
                <img src={RightArrow} alt="next" />
              </span>
            }
          </CarouselContainer>
          <ItemContainer>
            <ItemSection>
              <ItemDetails>
                <ItemName>{data.item.name}</ItemName>
                <ItemDesc>{data.item.brand}</ItemDesc>
                <ItemUnit>
                  <span>{data.item.size}{data.item.unit}</span>
                </ItemUnit>
                <ItemPrice>
                  Rs. <span className={data.sp && 'lineThrough'}>{data.mrp}</span> {data.sp && <span className="sprice">{data.sp}</span>}
                </ItemPrice>
              </ItemDetails>
            </ItemSection>
            <AddItem>
              {
                data.status === 'available' &&
                <Fragment>
                  {
                    (data.sku > 0 || (data.sku <= 0 && data.continue_shop_when_out_of_stock)) &&
                    <Fragment>
                      {
                        data.item.quantity > 0 && Object.keys(cartSummary).length !== 0 ?
                        <ItemsAction>
                          <span className="remove" onClick={() => props.removeFromCart()}>-</span>
                          <span className="quantity">{data.item.quantity}</span>
                          <span className="add" onClick={addItem}>+</span>
                        </ItemsAction>
                        : <Button className="addBtn" onClick={addItem}>Add</Button>
                      }
                    </Fragment>
                  }
                </Fragment>
              }
              {
                (data.status === 'not_available' || (data.status === 'available' && data.sku <= 0 && !data.continue_shop_when_out_of_stock)) && <span className="notAvail">Out of Stock </span>
              }
            </AddItem>
          </ItemContainer>
        </div>
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

export default ViewItem;
