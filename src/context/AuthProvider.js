import React, { createContext, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  return (
    <AuthContext.Provider>
      { children }
    </AuthContext.Provider>
  );
}
