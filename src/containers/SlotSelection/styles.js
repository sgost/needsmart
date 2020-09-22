import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const SlotContainer = styled.div`
  padding: 0px 48px 28px;
  .slotTabs {
    max-width: 440px;
    .ant-tabs-nav-list {
      width: 100%;
      .ant-tabs-tab {
        width: 50%;
        justify-content: center;
        font-weight: normal;
        font-size: 14px;
        line-height: 26px;
        color: ${palette.GREY};
        text-transform: capitalize;
      }
      .ant-tabs-tab-active .ant-tabs-tab-btn {
        font-weight: 500;
        color: ${palette.GRAPE};
        text-transform: capitalize;
      }
      .ant-tabs-ink-bar {
        background: ${palette.BUTTON_PRIMARY_COLOR};
      }
      .ant-tabs-tab-btn:focus, .ant-tabs-tab-remove:focus, .ant-tabs-tab-btn:active, .ant-tabs-tab-remove:active, .ant-tabs-tab-btn:hover, .ant-tabs-tab-remove:hover {
        color: ${palette.GRAPE};
      }
    }
  }

  .radioBtnGrp {
    display: grid;
    grid-template-columns: 50% 50%;
    .ant-radio-button-wrapper {
      height: 48px;
      margin: 8px 0px;
      font-weight: 500;
      font-size: 14px;
      line-height: 47px;
      color: ${palette.PRIMARY_TXT_COLOR};
      border-radius: 8px !important;
      border: 1px solid #AAAAAA;
      border-top-width: 1px;
      border-left-width: 1px;
      text-align: center;
      &:nth-child(odd) {
        margin-right: 24px;
      }
    }
    .ant-radio-button-wrapper:first-child {
      border-left: 1px solid #AAAAAA;
    }
    .ant-radio-button-wrapper:not(:first-child)::before {
      display: none;
    }
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled),
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active,
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
      color: ${palette.WHITE_COLOR};
      background: ${palette.BUTTON_PRIMARY_COLOR};
      border-color: ${palette.BUTTON_PRIMARY_COLOR};
    }
    .ant-radio-button-wrapper-disabled {
      background-color: ${palette.WHITE_COLOR};
      opacity: 0.5;
    }
  }
`;

export const ProceedBtn = styled.div`
  margin-top: 35px;
  .ant-btn {
    width: 305px;
  }
`;
