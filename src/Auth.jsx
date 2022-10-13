import { createContext, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const ProvideAuth = ({ children }) => {
  return (
    <AuthContext.Provider value={{}}>
      { children }
    </AuthContext.Provider>
  );
};