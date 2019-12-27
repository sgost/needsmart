import styled from 'styled-components';
import { Button } from 'antd';
import * as palette from '../../styles/variables';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const CreateButton = styled(Button)`
  position: fixed;
  bottom: 50px;
  right: 50px;
  height: 50px;
  width: 50px;
  background-color: ${palette.APP_BRAND_COLOR};

  &:focus {
    background-color: ${palette.APP_BRAND_COLOR};
  }

  &:hover {
    background-color: ${palette.APP_BRAND_COLOR};
  }
`;