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
  }
  .itemsList {
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
    }
    .ant-menu-item-selected {
      background-color: ${palette.LIGHT_GREY} !important;
      a {
        color: ${palette.BUTTON_SEC_COLOR};
        font-weight: 600;
      }
    }
  }
  .ant-layout-content {
    background: ${palette.WHITE_COLOR};
  }
`;