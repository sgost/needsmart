import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const ItemsListContainer = styled.ul`
  border-bottom: 1px solid ${palette.BORDER_COLOR};
  padding-bottom: 30px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 0px;
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

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  .itemPrice {
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: ${palette.DOVE_GRAY};
    text-align: right;
    margin-left: 15px;
  }
`;

export const ItemsAction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .remove, .add, .quantity {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: ${palette.BUTTON_SEC_COLOR};
    display: inline-block;
    width: 20px;
    text-align: center;
  }
  .remove, .add {
    border: 1px solid ${palette.BUTTON_SEC_COLOR};
    border-radius: 3px;
    cursor: pointer;
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

export const CheckoutBtn = styled.div`
  padding: 60px 30px 30px;
  .ant-btn {
    width: 100%;
  }
`;

export const CartDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  .outletName {
    font-weight: normal;
    font-size: 12px;
    line-height: 26px;
    color: ${palette.DOVE_GRAY};
    text-transform: uppercase;
  }
  .addMore {
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    color: ${palette.BUTTON_PRIMARY_COLOR};
  }
`;
