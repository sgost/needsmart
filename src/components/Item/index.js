import React, { Fragment, useState } from 'react';
import { Button, Drawer } from 'antd';
import {
  ItemContainer,
  ItemSection,
  ItemImage,
  ItemDetails,
  ItemName,
  ItemDesc,
  ItemUnit,
  ItemPrice,
  AddItem
} from './styles';
import LoginPage from '../../containers/Login';

const Item = props => {

  const data = props.data;

  const [visible, setVisible] = useState(false);

  const addItem = () => {
    if(localStorage.getItem('api_token') === null) {
      setVisible(true);
    }
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Fragment>
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
        <AddItem>
          <Button className="addBtn" onClick={addItem}>Add</Button>
        </AddItem>
      </ItemContainer>
      <Drawer
        title="Log in"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
        className="customDrawer"
        destroyOnClose={true}
      >
        <LoginPage closeDrawer={onClose} />
      </Drawer>
    </Fragment>
  );
};

export default Item;
