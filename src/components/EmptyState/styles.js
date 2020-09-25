import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  @media only screen and (max-width: 769px) {
    height: calc(100% - 176px);
    margin: 0px 20px;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .ant-btn-primary {
    padding: 10px 40px !important;
  }
`;

export const ImageContainer = styled.div`
  width: 256px;
  height: 200px;
`;

export const Content = styled.div`
  margin-bottom: 40px;
  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: ${palette.MD_GREY};
    text-align: center;
  }
  p {
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: ${palette.GREY};
  }
`;
