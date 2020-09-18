import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const Container = styled.div`
  height: calc(100% - 96px);
  .itemsListSection {
    height: 100%;
    max-width: 1100px;
    margin: 0 auto;
    @media only screen and (min-width: 1500px) {
      max-width: 1200px;
    }
    @media only screen and (max-width: 769px) {
      height: auto;
    }
  }
  .itemsList, .cartList {
    padding: 22px 10px;
  }
  .ant-layout-sider {
    background: ${palette.WHITE_COLOR};
    max-width: 200px;
    min-width: 200px;
    width: 200px;
  }
  .ant-menu {
    height: 100%;
    padding: 32px 0px;
    @media only screen and (max-width: 769px) {
      height: auto;
      padding: 0px;
      border-bottom: 1px solid ${palette.BORDER_COLOR};
      .ant-menu-item {
        margin: 0 !important;
        padding: 0px 15px !important;
        &:hover {
          color: ${palette.BUTTON_SEC_COLOR} !important;
          border-bottom: 2px solid ${palette.BUTTON_SEC_COLOR} !important;
        }
      }
      .ant-menu-item-selected {
        background: ${palette.WHITE_COLOR} !important;
        color: ${palette.BUTTON_SEC_COLOR} !important;
        border-bottom: 2px solid ${palette.BUTTON_SEC_COLOR} !important;
      }
    }
    .ant-menu-item {
      a {
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        color: ${palette.DOVE_GRAY};
        text-transform: uppercase;
        &:hover {
          color: ${palette.BUTTON_SEC_COLOR};
        }
      }
      @media only screen and (min-width: 769px) {
        &:hover {
          background-color: ${palette.LIGHT_GREY} !important;
        }
      }
    }
    .ant-menu-item-selected {
      a {
        color: ${palette.BUTTON_SEC_COLOR};
        font-weight: 600;
      }
      @media only screen and (min-width: 769px) {
        background-color: ${palette.LIGHT_GREY} !important;
      }
    }
  }
  .ant-layout-content {
    background: ${palette.WHITE_COLOR};
  }
`;