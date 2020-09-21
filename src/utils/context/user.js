import React, { createContext, useEffect, useState } from 'react';
import { getUserDetails } from '../services/auth';

const UserContext = createContext({});

const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUserDetails(res => {
      setUser(res);
    });
  }, []);

  const getDetails = (data) => {
    setUser(data);
  };

  return <UserContext.Provider value={{user, getDetails}}>{children}</UserContext.Provider>;
};

export { Context, UserContext };
