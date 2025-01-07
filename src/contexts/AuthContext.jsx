import { createContext, useContext, useMemo, useState } from 'react';
import { loginApi, registerApi } from 'api/auth';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (data) => {
    try {
      const response = await loginApi(data);
      setUser(response.data.user);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const registerUser = async (data) => {
    try {
      const response = await registerApi(data);
      setUser(response.data.user);
    } catch (error) {
      console.error('Register error:', error);
    }
  };

  const value = useMemo(
    () => ({
      user,
      login,
      registerUser,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
