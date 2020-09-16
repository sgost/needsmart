import React, { createContext, useEffect, useState } from 'react';
import { getUserDetails } from '../services/auth';

const UserContext = createContext({});

const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    getUserDetails(res => {
      setUser(res);
    });
  };

  return <UserContext.Provider value={{user, getDetails}}>{children}</UserContext.Provider>;
};

export { Context, UserContext };
