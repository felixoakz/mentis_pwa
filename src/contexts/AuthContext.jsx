import { createContext, useContext, useMemo, useState, useEffect } from 'react';

import { responseErrors } from 'utils/helpers';
import { loginApi, getUserApi, logoutApi, registerApi } from 'api/auth';


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser();
  }, []);


  const getUser = async () => {
    try {
      const response = await getUserApi();
      setUser(response.data)
    } catch (e) {
      console.error('// getUser error:', {e})
    } finally {
      setLoading(false);
    }
  }


  const login = async (data) => {
    try {
      const response = await loginApi(data);
      if (response.status === 200) {
        setUser(response.data);
      }
    } catch (error) {
      await responseErrors(error);
      console.error('// login error:', {error})
    }
  };


  const registerUser = async (data) => {
    try {
      const response = await registerApi(data);
      setUser(response.data.user);
    } catch (error) {
      await responseErrors(error);
    }
  };


  const logout = async () => {
    try {
      await logoutApi();
      setUser(null);

    } catch (error) {
      console.error('// Logout error:', error);
    }
  };


  const value = useMemo(
    () => ({
      user,
      loading,
      registerUser,
      login,
      logout,
    }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
