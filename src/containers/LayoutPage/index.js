import React from 'react';
import NavBar from "../../containers/NavBar";
import { Context as OutletContext } from '../../utils/context/outlet';
import { Context as UserContext } from '../../utils/context/user';

const LayoutPage = ({ history }) => {
  return (
    <OutletContext>
      <UserContext>
        <NavBar />
      </UserContext>
    </OutletContext>
  );
};

export default LayoutPage;
