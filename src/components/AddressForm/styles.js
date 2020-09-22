import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const Container = styled.div`
  .addressForm {
    max-width: 380px;
    margin-top: 35px;
    .formSubmit {
      padding-top: 8px;
      .ant-btn-primary {
        width: 250px;
      }
      .cancelBtn {
        width: auto;
        margin-left: 25px;
        height: 48px !important;
      }
    }
  }
`;

export const FieldItem = styled.div`
  label {
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: ${palette.DOVE_GRAY};
    display: inline-block;
    margin-bottom: 9px;
  }
  .ant-input {
    height: 40px !important;
  }
`;