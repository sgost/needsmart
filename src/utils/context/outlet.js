import React, { createContext, useEffect, useState } from 'react';
import { getSingleOutlet } from '../services/outletsAPI';

const OutletContext = createContext({});

const Context = ({ children }) => {
  const [outlet, setOutlet] = useState(null);
  
  useEffect(() => {
    getSingleOutlet(res => {
      setOutlet(res.data);
    });
  }, []);

  return <OutletContext.Provider value={outlet}>{children}</OutletContext.Provider>;
};

export { Context, OutletContext };
