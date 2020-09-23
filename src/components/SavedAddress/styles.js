import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const AddressSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 34px;
`;

export const AddressDetails = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    color: ${palette.SECONDARY_TXT_COLOR};
    padding: 5px 0px;
  }
`;

export const EditSection = styled.div`
  margin: 15px 0px;
`;

export const EditAddress = styled.span`
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: ${palette.BUTTON_PRIMARY_COLOR};
  text-transform: uppercase;
  cursor: pointer;
`;

export const DeleteAddress = styled.span`
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: ${palette.BUTTON_PRIMARY_COLOR};
  text-transform: uppercase;
  cursor: pointer;
  margin-left: 22px;
`;

export const DeliverBtn = styled.div`
  margin-bottom: 5px 0px 28px;
  .ant-btn {
    width: 305px;
  }
`;
