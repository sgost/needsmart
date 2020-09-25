import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const Container = styled.div`
  height: calc(100% - 96px);
  .ordersRow {
    max-width: 1050px;
    margin: 65px auto 30px;
    .ordersListCol, .ordersDetailsCol {
      padding: 0px 20px;
    }
    @media only screen and (max-width: 769px) {
      margin: 24px 0px 84px;
      .ordersDetailsCol {
        display: none;
      }
    }
  }
  .ordersListItem {
    margin-bottom: 22px;
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
