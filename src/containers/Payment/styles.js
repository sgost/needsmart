import styled from 'styled-components';
// import * as palette from '../../styles/variables';

export const Container = styled.div`
  padding: 0px 48px 28px;
  @media only screen and (max-width: 769px) {
    padding: 0px 15px;
  }
  .paymentModes {
    .ant-radio-wrapper {
      display: flex;
      align-items: center;
      margin: 14px 0px;
    }
  }
`;

export const ModeText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: normal;
  font-size: 16px;
  line-height: 11px;
  color: #121212;
  margin-left: 15px;
`;

export const ModeIcon = styled.span`
  width: 32px;
  height: 32px;
  display: inline-block;
  margin-right: 14px;
`;

export const PlaceOrderBtn = styled.div`
  margin-top: 35px;
  .ant-btn {
    width: 305px;
  }
`;
