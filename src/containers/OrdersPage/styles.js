import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100% - 84px);
  .ordersRow {
    max-width: 1050px;
    margin: 65px auto 30px;
    .ordersListCol, .ordersDetailsCol {
      padding: 0px 20px;
    }
  }
  .ordersListItem {
    margin-bottom: 22px;
    cursor: pointer;
  }
`;
