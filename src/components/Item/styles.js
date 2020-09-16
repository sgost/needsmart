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

`;
