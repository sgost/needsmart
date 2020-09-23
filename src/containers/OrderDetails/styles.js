import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const OrderDetailsContainer = styled.div`
  max-width: 365px;
  margin: 0 auto;
`;

export const DeliveryAddress = styled.div`
  h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: ${palette.SECONDARY_TXT_COLOR};
  }
`;

export const AddressDetails = styled.div`
  display: flex;
  flex-direction: column;
  span {
    padding: 3px 0px;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: ${palette.GREY};
  }
`;

export const OrderStatus = styled.ul`
  margin: 18px 0px;
`;

export const OrderStatusItem = styled.li`
  font-weight: normal;
  font-size: 15px;
  line-height: 26px;
  color: ${palette.SECONDARY_TXT_COLOR};
  padding: 2px 0px;
  text-transform: capitalize;
  span {
    color: ${palette.GREY};
  }
`;

export const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 55% 22% 23%;
  border-bottom: 0.5px solid ${palette.BORDER_COLOR};
  padding: 5px 0px;
  h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: ${palette.SECONDARY_TXT_COLOR};
    text-transform: uppercase;
  }
  .itemQuantity {
    text-align: center;
  }
  .itemPrice {
    text-align: right;
  }
`;

export const ItemsListContainer = styled.ul`
  border-bottom: 1px solid ${palette.BORDER_COLOR};
  padding: 12px 0px 30px;
`;

export const ListItem = styled.li`
  display: grid;
  grid-template-columns: 55% 22% 23%;
  padding: 8px 0px;
`;

export const ItemQuantity = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 26px;
  text-align: center;
  color: ${palette.GRAPE};
`;

export const ItemTotalPrice = styled.div`
  color: ${palette.DOVE_GRAY};
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-align: right;
`;

export const ItemDetails = styled.div`
  .name {
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
  .brand, .quantity {
    font-weight: normal;
    font-size: 12px;
    line-height: 24px;
    color: rgba(72, 70, 74, 0.7);
    display: block;
  }
  .quantity {
    line-height: 18px;
  }
`;

export const PriceContainer = styled.div`
  border-bottom: 1px solid ${palette.BORDER_COLOR};
  padding: 15px 0px;
`;

export const ItemPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: ${palette.DOVE_GRAY};
  }
  .title {
    color: ${palette.GREY};
  }
`;

export const TotalPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0px;
  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: ${palette.SECONDARY_TXT_COLOR};
  }
`;
