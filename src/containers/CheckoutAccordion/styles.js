import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const AddressDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 18px 0px 0px 18px;
  span {
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    color: ${palette.SECONDARY_TXT_COLOR};
    padding: 5px 0px;
  }
  .house {
    font-weight: 500;
    font-size: 16px;
  }
`;

export const SlotDetails = styled.span`
  display: block;
  margin: 18px 0px 0px 18px;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  color: ${palette.SECONDARY_TXT_COLOR};
  text-transform: capitalize;
`;
