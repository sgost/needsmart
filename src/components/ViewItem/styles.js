import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px;
  @media only screen and (max-width: 769px) {
    padding: 5px 5px 25px;
  }
`;

export const ItemSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 20px;
  flex: 2;
  cursor: pointer;
`;

export const ItemDetails = styled.div`
  margin-left: 16px;
`;

export const ItemName = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: ${palette.SECONDARY_TXT_COLOR};
`;

export const ItemDesc = styled.span`
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: ${palette.DOVE_GRAY};
`;

export const ItemUnit = styled.div`
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: ${palette.SECONDARY_TXT_COLOR};
`;

export const ItemPrice = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  color: ${palette.GREY};
  .lineThrough {
    text-decoration: line-through;
  }
  .sprice {
    color: ${palette.SECONDARY_TXT_COLOR};
  }
`;

export const AddItem = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  .notAvail {
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    color: ${palette.ORANGE};
  }
`;

export const ItemsAction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .remove, .add, .quantity {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: ${palette.BUTTON_SEC_COLOR};
    display: inline-block;
    width: 20px;
    text-align: center;
  }
  .remove, .add {
    border: 1px solid ${palette.BUTTON_SEC_COLOR};
    border-radius: 3px;
    cursor: pointer;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  border-radius: 16px;
  max-width: 930px;
  margin: 0 auto;
  padding: 24px 24px 0px;
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
    border: 1px solid ${palette.DOVE_GRAY};
  }
  .ant-carousel .slick-dots li.slick-active button {
    background: ${palette.DOVE_GRAY};
    opacity: 1;
  }
  .leftArrow, .rightArrow {
    width: 32px;
    height: 32px;
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
  }
  .leftArrow {
    left: 24px;
  }
  .rightArrow {
    right: 24px;
  }
  @media (max-width: 769px) {
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

export const CarouselImage = styled.div`
  overflow: hidden;
  max-width: 320px;
  margin: 0 auto;
  @media (max-width: 769px) {
    img {
      width: auto;
    }
  }
`;
