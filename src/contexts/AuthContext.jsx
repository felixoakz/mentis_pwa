import { createContext, useContext, useMemo, useState } from 'react';
import { loginApi, registerApi } from 'api/auth';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (data) => {
    try {
      const response = await loginApi(data);
      if (response.status === 200) {
        const { token, user } = response.data;

        localStorage.setItem('token', token);
        setUser(user);
      }
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

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      registerUser,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
