import React from 'react';
import { Button } from 'antd';
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

const Item = props => {
  const data = props.data;
  return (
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
        <Button className="addBtn">Add</Button>
      </AddItem>
    </ItemContainer>
  );
};

export default Item;
