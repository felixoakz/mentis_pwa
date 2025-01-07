import apiClient from "./base";


export const loginApi = async (loginData) => {
  return apiClient.post('/auth/login', loginData);
};

export const registerApi = async (data) => {
  return apiClient.post('/auth/register', data);
};
