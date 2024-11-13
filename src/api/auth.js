import apiClient from "./base";


export const loginApi = async (loginData) => {
  await apiClient.get('/sanctum/csrf-cookie');
  return apiClient.post('/login', {
    email: loginData.email,
    password: loginData.password,
    spa: true,
  });
};

export const getUserApi = async () => {
  return apiClient.get('/api/user');
}

export const registerApi = async (data) => {
  return apiClient.post('/register', {
    name: data.name,
    email: data.email,
    password: data.password,
    password_confirmation: data.password_confirmation,
  });
};

export const logoutApi = async () => {
  return apiClient.post('/logout');
};
