import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const Container = styled.div`
  height: calc(100% - 96px);
  .rowContainer {
    max-width: 1250px;
    margin: 0 auto;
    .accordion, .orderSummary {
      padding: 38px;
    }
    @media only screen and (max-width: 769px) {
      margin: 0 auto 64px;
      .accordion {
        padding: 20px 0px;
        min-width: 100%;
      }
      .orderSummary {
        padding: 20px 15px;
        min-width: 100%;
      }
    }
  }
`;

export const CartContainer = styled.div`

`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: ${palette.PRIMARY_TXT_COLOR};
  margin-bottom: 20px;
`;
