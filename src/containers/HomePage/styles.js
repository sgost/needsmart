import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const Container = styled.div`
  padding: 60px;
  .subCatList {
    max-width: 930px;
    margin: 0 auto;
    justify-content: center;
  }
  .subCatItems {
    padding: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: ${palette.WHITE_COLOR};
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      padding: 18px 20px;
      height: 100%;
      width: 100%;
      font-weight: 500;
      font-size: 17px;
      line-height: 20px;
      color: ${palette.MD_GREY};
      text-align: center;
      .itemImage {
        margin-bottom: 8px;
      }
      &:hover {
        box-shadow: 0 1px 2px -2px rgba(0,0,0,.16), 0 3px 6px 0 rgba(0,0,0,.12), 0 5px 12px 4px rgba(0,0,0,.09);
      }
    }
  }
  @media only screen and (max-width: 569px) {
    padding: 30px 10px;
    .subCatItems {
      padding: 6px;
      a {
        padding: 12px 10px;
        font-size: 14px;
        line-height: 16px;
        border-radius: 8px;
      }
    }
  }
`;