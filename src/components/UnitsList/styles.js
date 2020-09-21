import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const AllUnitsList = styled.ul`

`;

export const AllUnitsListItem = styled.ul`
  padding: 15px 28px;
  border-top: 1px solid ${palette.BORDER_COLOR};
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  color: ${palette.SECONDARY_TXT_COLOR};
  display: flex;
  align-items: center;
  cursor: pointer;
  .sizeUnit {
    margin-right: 5px;
  }
`;

export const ItemPrice = styled.div`
  margin-left: 5px;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  color: ${palette.GREY};
  .lineThrough {
    text-decoration: line-through;
  }
  .sprice {
    color: ${palette.SECONDARY_TXT_COLOR};
  }
`;
