import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const OrderCard = styled.div`
  background: ${palette.WHITE_COLOR};
  box-shadow: 0px 0px 5px rgba(0,0,0,0.25);
  border-radius: 10px;
  padding: 25px;
  &:hover {
    box-shadow: 0 1px 2px -2px rgba(0,0,0,.16), 0 3px 6px 0 rgba(0,0,0,.12), 0 5px 12px 4px rgba(0,0,0,.09);
  }
  @media only screen and (max-width: 769px) {
    box-shadow: none;
    border-radius: unset;
    padding: 15px 0px;
  }
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OrderId = styled.h5`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: ${palette.PRIMARY_TXT_COLOR};
  span {
    color: ${palette.BUTTON_PRIMARY_COLOR};
    font-weight: 500;
  }
`;

const handleColor = status => {
  switch (status) {
    case "placed":
      return `${palette.DOVE_GRAY}`;
    case "accepted":
      return "#1976D2";
    case "ready_to_deliver":
      return "#A95FCC";
    case "delivered":
      return "#21A771";
    case "cancelled":
    case "rejected":
      return "#EA4747";
    default:
      return `${palette.DOVE_GRAY}`;
  }
};
const handleBgColor = status => {
  switch (status) {
    case "placed":
      return `${palette.LIGHT_GREY}`;
    case "accepted":
      return "#C2E1FF";
    case "ready_to_deliver":
      return "#EFDCF8";
    case "delivered":
      return "#CFFFD1";
    case "cancelled":
    case "rejected":
      return "#FFCFCF";
    default:
      return `${palette.LIGHT_GREY}`;
  }
};
export const StatusLabel = styled.span`
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: ${({ status }) => handleColor(status)};
  background: ${({ status }) => handleBgColor(status)};
  border-radius: 4px;
  padding: 2px 10px;
  text-transform: capitalize;
`;

export const OrderDetails = styled.div`
  margin-top: 6px;
  span {
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: ${palette.SILVER};
  }
`;

export const DeliveryDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  .slot {
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: ${palette.SILVER};
    max-width: 275px;
    @media only screen and (max-width: 769px) {
      max-width: 200px;
    }
  }
  .phone {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: ${palette.BUTTON_PRIMARY_COLOR};
    img {
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }
  }
`;
