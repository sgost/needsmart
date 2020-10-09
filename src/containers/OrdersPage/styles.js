import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const Container = styled.div`
  height: calc(100% - 96px);
  .ordersRow {
    max-width: 1050px;
    margin: 65px auto 30px;
    @media only screen and (min-width: 1500px) {
      max-width: 1250px;
    }
    .ordersListCol, .ordersDetailsCol {
      padding: 0px 20px;
    }
    @media only screen and (max-width: 769px) {
      margin: 24px 0px 84px;
      .ordersDetailsCol {
        display: none;
      }
      .ordersListCol {
        min-width: 100%;
      }
    }
  }
  .ordersListItem {
    margin-bottom: 30px;
    cursor: pointer;
    @media only screen and (max-width: 769px) {
      margin-bottom: 0px;
      border-bottom: 1px solid ${palette.BORDER_COLOR};
      &:last-child {
        border-bottom: none;
      }
    }
  }
`;
