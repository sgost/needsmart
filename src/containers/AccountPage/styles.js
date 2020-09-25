import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const AccountContainer = styled.div`
  margin: 30px 24px 64px;
`;

export const AccountDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserImage = styled.span`
  width: 89px;
  height: 89px;
  margin-bottom: 12px;
`;

export const UserName = styled.h5`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: ${palette.BLACK_COLOR};
`;

export const UserNumber = styled.span`
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 8px;
`;

export const AppDetailsList = styled.ul`
  margin: 40px 0px;
`;

export const AppListItem = styled.li`
  border-bottom: 1px solid ${palette.BORDER_COLOR};
  padding: 12px 0px;
  a {
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: ${palette.DOVE_GRAY};
    display: block;
  }
`;

export const Logout = styled.div`
  padding-top: 30px;
  .ant-btn {
    width: 100%;
  }
`;

export const SignInSection = styled.div`
  p {
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: ${palette.DOVE_GRAY};
    margin-bottom: 12px;
  }
  .ant-btn {
    width: 100%;
  }
`;
