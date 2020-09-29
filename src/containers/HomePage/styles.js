import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const Container = styled.div`
  padding: 38px 60px 60px;
  .subCatList {
    max-width: 930px;
    margin: 0 auto;
    justify-content: center;
    @media only screen and (min-width: 1500px) {
      max-width: 1100px;
    }
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
  @media only screen and (max-width: 769px) {
    padding: 10px 10px 80px;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  border-radius: 16px;
  max-width: 930px;
  margin: 0px auto 20px;
  .ant-carousel .slick-list .slick-slide > div > div {
    display: flex !important;
    flex-direction: row;
    justify-content: center;
    position: relative;
  }
  .slick-dots {
    bottom: 16px !important;
  }
  .ant-carousel .slick-dots li {
    width: 10px;
    height: 8px;
  }
  .ant-carousel .slick-dots li button {
    height: 8px;
    border-radius: 100%;
    width: 8px;
    opacity: 0.4;
    background: ${palette.WHITE_COLOR};
  }
  .ant-carousel .slick-dots li.slick-active button {
    background: ${palette.WHITE_COLOR};
    opacity: 1;
  }
  .leftArrow, .rightArrow {
    width: 32px;
    height: 32px;
    padding: 10px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: ${palette.PRIMARY_TXT_COLOR};
    z-index: 1;
    cursor: pointer;
    &:hover {
      background: rgba(255, 255, 255, 0.6);
      opacity: 0.6;
    }
  }
  .leftArrow {
    left: 16px;
  }
  .rightArrow {
    right: 16px;
  }
  @media (max-width: 769px) {
    margin: 12px 0px 12px;
    .leftArrow, .rightArrow {
      display: none;
    }
    .ant-carousel .slick-list .slick-slide > div > div {
      padding: 0px 6px;
    }
    .slick-dots {
      bottom: 12px !important;
    }
  }
`;
