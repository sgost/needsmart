import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const Container = styled.div`
  max-width: 650px;
  margin: 50px auto;
  @media only screen and (max-width: 769px) {
    margin: 20px auto 64px;
  }
`;

export const SearchInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .ant-input-affix-wrapper {
    height: 56px !important;
    border-radius: 8px !important;
    border: transparent !important;
    font-weight: normal !important;
    font-size: 16px !important;
    line-height: 24px !important;
    color: ${palette.INPUT_TEXT} !important;
    box-shadow: none;
    background: ${palette.WHITE_SMOKE};
    padding: 4px 20px;
  }
  .ant-input-prefix {
    color: ${palette.DARK_GRAY};
    font-size: 20px;
    margin-right: 10px;
  }
  .ant-input {
    height: auto !important;
    box-shadow: none !important;
    border: none !important;
    background: ${palette.WHITE_SMOKE};
  }
  .anticon-close {
    font-size: 20px;
    color: ${palette.MD_GREY};
    cursor: pointer;
  }
  @media only screen and (max-width: 769px) {
    margin: 0px 20px;
    .ant-input-affix-wrapper {
      height: 40px !important;
      font-size: 14px !important;
      line-height: 18px !important;
      padding: 4px 10px;
    }
    .anticon-close {
      font-size: 16px;
    }
  }
`;

export const SearchList = styled.div`
  max-width: 600px;
  margin: 25px auto;
  @media only screen and (max-width: 769px) {
    padding: 0px 15px;
  }
`;

export const SearchImage = styled.div`
  max-width: 260px;
  margin: 0 auto;
`;
