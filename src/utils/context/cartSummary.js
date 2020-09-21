import React, { createContext, Fragment, useEffect, useState } from 'react';
import { getCartSummary } from '../services/cartAPI';

const CartSummaryContext = createContext({});

const Context = ({ children }) => {
  const [cartSummary, setCartSummary] = useState({});
  useEffect(() => {
    getCartSummary(
      res => {
        setCartSummary(res);
      }
    );
  }, []);

  const getDetails = (data) => {
    setCartSummary(data);
  };

  return (
    <Fragment>
      { cartSummary && <CartSummaryContext.Provider value={{cartSummary, getDetails}}>{children}</CartSummaryContext.Provider> }
    </Fragment>
  );
};

export { Context, CartSummaryContext };
