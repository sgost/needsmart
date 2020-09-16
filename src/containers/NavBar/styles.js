import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${palette.WHITE_COLOR};
  box-shadow: 0px 1px 5px rgba(76, 40, 130, 0.1);
  padding: 15px 100px;
  @media only screen and (max-width: 992px) {
    padding: 15px 25px;
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
  a {
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
    &:hover, &:focus, &:active {
      color: ${palette.PRIMARY_TXT_COLOR};
    }
  }
  .active {
    font-weight: 600;
  }
`;

export const MenuIcon = styled.span`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
