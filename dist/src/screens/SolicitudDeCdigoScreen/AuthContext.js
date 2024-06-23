// AuthContext.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");

  const setAuthenticatedEmail = (email) => {
    setEmail(email);
  };

  return (
    <AuthContext.Provider value={{ email, setAuthenticatedEmail }}>
      {children}
    </AuthContext.Provider>
  );
};
