import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .numberForm {
    width: 100%;
    .submitFormItem {
      padding-top: 16px;
      .ant-btn {
        width: 100%;
      }
      .ant-btn-primary[disabled], .ant-btn-primary[disabled]:hover, .ant-btn-primary[disabled]:focus, .ant-btn-primary[disabled]:active {
        color: ${palette.WHITE_COLOR};
        opacity: 0.5;
      }
    }
    .numberInput .ant-input-wrapper {
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      .ant-input, .ant-input:focus {
        box-shadow: none !important;
      }
      .ant-input-group-addon {
        border-radius: 8px !important;
        background: ${palette.WHITE_COLOR} !important;
        border: none !important;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        color: rgba(38, 50, 56, 0.7);
      }
    }
  }
`;

export const ImageContainer = styled.div`
  width: 150px;
  height: 230px;
`;

export const OTPContainer = styled.div`

`;

export const TextContainer = styled.div`
  text-align: center;
  margin: 12px 0px;
  p {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${palette.DOVE_GRAY};
  }
`;

export const ResendLink = styled.div`
  padding-bottom: 10px;
  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: ${palette.BUTTON_PRIMARY_COLOR};
    display: block;
    cursor: pointer;
  }
`;

export const EditNumber = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  .number {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    display: inline-block;
    color: ${palette.INPUT_TEXT};
  }
  .edit {
    width: 18px;
    height: 18px;
    margin-left: 12px;
    cursor: pointer;
  }
`;
