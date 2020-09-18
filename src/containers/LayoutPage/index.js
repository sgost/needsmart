import React from 'react';
import NavBar from "../../containers/NavBar";
import { Context as OutletContext } from '../../utils/context/outlet';
import { Context as UserContext } from '../../utils/context/user';
import { Context as CartSummaryContext } from '../../utils/context/cartSummary';

const LayoutPage = ({ history }) => {
  return (
    <OutletContext>
      <UserContext>
        <CartSummaryContext>
          <NavBar />
        </CartSummaryContext>
      </UserContext>
    </OutletContext>
  );
};

export default LayoutPage;
