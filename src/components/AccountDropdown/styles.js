import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const AccountMenu = styled.div`
  background: ${palette.WHITE_COLOR};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

export const MenuList = styled.ul`

`;

export const UserDetails = styled.li`
  padding: 20px;
  border-bottom: 1px solid ${palette.BORDER_COLOR};
  text-align: center;
  h5 {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: ${palette.BLACK_COLOR};
  }
  span {
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.5);
    margin-top: 5px;
    display: inline-block;
  }
`;

export const Logout = styled.li`
  padding: 16px;
  border-top: 1px solid ${palette.BORDER_COLOR};
  text-align: center;
  .ant-btn {
    font-weight: normal !important;
    font-size: 14px !important;
    line-height: 24px !important;
    text-align: center;
    text-transform: uppercase;
    color: ${palette.DOVE_GRAY};
    border: 1px solid ${palette.BORDER_COLOR};
    border-radius: 4px !important;
    box-shadow: none !important;
    height: 36px;
    padding: 4px 60px !important;
  }
`;

export const MenuListItem = styled.li`
  a {
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: ${palette.PRIMARY_TXT_COLOR};
    display: block;
    padding: 8px 20px;
    &:hover, &:focus, &:active {
      background: #EFEDF5;
    }
  }
`;
