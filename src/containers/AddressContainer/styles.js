import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const Container = styled.div`
  .ant-radio-group {
    width: 100%;
  }
  .ant-radio-wrapper {
    width: 100%;
    padding: 24px 48px 0px;
    &:last-child {
      border-radius: 0px 0px 8px 8px;
    }
  }
  .ant-radio-wrapper-checked  {
    background: ${palette.ALICE_BLUE};
    span.ant-radio + * {
      color: ${palette.BUTTON_PRIMARY_COLOR} !important;
    }
  }
  .addressRadioBtn {
    span.ant-radio + * {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: ${palette.BUTTON_PRIMARY_COLOR};
      padding-left: 14px;
    }
  }
  .savedAddress {
    span.ant-radio + * {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      padding-left: 14px;
      color: ${palette.SECONDARY_TXT_COLOR};
    }
  }
`;

export const AddButton = styled.div`
  padding: 5px 40px 20px;
  .ant-btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${palette.WHITE_COLOR};
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25) !important;
    border-radius: 8px !important;
    height: 56px !important;
    font-weight: 500 !important;
    font-size: 16px !important;
    line-height: 19px !important;
    color: ${palette.BUTTON_PRIMARY_COLOR} !important;
    border-color: transparent !important;
    padding-right: 30%;
    &:hover, &:active, &:focus {
      border: 1px solid transparent !important;
    }
    img {
      width: 24px;
      height: 24px;
      margin-right: 12px;
    }
  }
`;
