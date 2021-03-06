import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px;
  @media only screen and (max-width: 769px) {
    padding: 25px 5px;
  }
`;

export const ItemSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 20px;
  flex: 2;
  cursor: pointer;
`;

export const ItemImage = styled.div`
  width: 80px;
  height: 80px;
`;

export const ItemDetails = styled.div`
  margin-left: 16px;
`;

export const ItemName = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: ${palette.SECONDARY_TXT_COLOR};
`;

export const ItemDesc = styled.span`
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: ${palette.DOVE_GRAY};
`;

export const ItemUnit = styled.div`
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: ${palette.SECONDARY_TXT_COLOR};
`;

export const ItemPrice = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  color: ${palette.GREY};
  .lineThrough {
    text-decoration: line-through;
  }
  .sprice {
    color: ${palette.SECONDARY_TXT_COLOR};
  }
`;

export const AddItem = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  .notAvail {
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    color: ${palette.ORANGE};
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

export const AllUnits = styled.div`
  cursor: pointer;
  .anticon {
    font-size: 12px;
    color: ${palette.BUTTON_SEC_COLOR};
    margin-left: 5px;
  }
`;
