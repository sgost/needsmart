import React from 'react';
import NavBar from "../../containers/NavBar";
import {
  Container,
} from './styles';
import { Context as OutletContext } from '../../utils/context/outlet';

const LayoutPage = ({ history }) => {
  return (
    <OutletContext>
      <NavBar />
    </OutletContext>
  );
};

export default LayoutPage;
