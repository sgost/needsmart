import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${palette.WHITE_COLOR};
  box-shadow: 0px 1px 5px rgba(76, 40, 130, 0.1);
  padding: 21px 100px;
  @media only screen and (max-width: 992px) {
    padding: 21px 25px;
  }
  @media only screen and (max-width: 769px) {
    padding: 14px 16px;
    align-items: flex-start;
  }
  position: sticky;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 1000;
`;

export const LogoContainer = styled.div`
  h1 {
    margin: 0;
  }
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      width: 64px;
      height: 64px;
    }
  }
`;

export const HeaderText = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 9px;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: ${palette.PRIMARY_TXT_COLOR};
  .subHeading {
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: ${palette.PRIMARY_TXT_COLOR};
  }
  @media only screen and (max-width: 769px) {
    font-size: 20px;
    line-height: 29px;
  }
`;

export const MenuContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-flow: wrap;
  margin: 0;
`;

export const MenuItem = styled.li`
  margin: 0px 12px;
  @media only screen and (max-width: 992px) {
    margin: 0px 6px;
  }
  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: ${palette.PRIMARY_TXT_COLOR};
    padding: 14px 18px;
    text-decoration: unset;
    cursor: pointer;
    &:hover, &:focus, &:active {
      color: ${palette.PRIMARY_TXT_COLOR};
    }
    span {
      margin-left: 9px;
    }
  }
  .active {
    font-weight: 600;
    color: ${palette.BUTTON_PRIMARY_COLOR};
    svg path {
      fill: ${palette.BUTTON_PRIMARY_COLOR};
    }
    span {
      color: ${palette.BUTTON_PRIMARY_COLOR};
    }
  }
  @media only screen and (max-width: 769px) {
    margin: 0px;
    .link {
      padding: 0px;
    }
  }
`;

export const MenuIcon = styled.span`
  width: 24px;
  height: 24px;
  position: relative;
`;

export const CartNotify = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: #EE5253;
  display: inline-block;
  position: absolute;
  right: 0;
`;

export const OutletSection = styled.span`

`;

export const OutletTiming = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: ${palette.DOVE_GRAY};
  margin: 5px 0px;
  img {
    width: 20px !important;
    height: 20px !important;
    margin-right: 5px;
  }
  .payModes {
    margin-right: 5px;
    &:after {
      content:', ';
    }
    &:last-child {
      margin-right: 0px;
      &:after {
        content: '';
      }
    }
  }
`;

export const MenuListContainer = styled.ul`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background: ${palette.WHITE_COLOR};
  box-shadow: 0px -2px 5px rgba(76, 40, 130, 0.1);
  z-index: 1000;
`;

export const MobMenuList = styled.li`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: ${palette.PRIMARY_TXT_COLOR};
    padding: 11px 5px;
    text-decoration: unset;
    cursor: pointer;
    &:hover, &:focus, &:active {
      color: ${palette.PRIMARY_TXT_COLOR};
    }
  }
  .active {
    font-weight: 600;
    color: ${palette.BUTTON_PRIMARY_COLOR} !important;
    svg path {
      fill: ${palette.BUTTON_PRIMARY_COLOR};
    }
  }
`;

export const MenuListIcon = styled.span`
  width: 24px;
  height: 24px;
  position: relative;
`;
