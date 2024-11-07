import { toast } from "react-toastify";

// Handles API response errors and displays toast notifications.
export const responseErrors = async (error) => {

  if (error.message === 'Network Error') {
    toast.error('Sem conexão com servidor, tente novamente.');
    toast.info('Caso persista entre em contato com o suporte.');
  }

  if (error.response) {
    const errorMsg = `${error.response.data.message} (${error.response.status})`
    toast.warn(errorMsg)
  }
};

// Displays form validation errors as toast notifications.
export const displayValidationErrors = (errors) => {
  Object.values(errors).forEach(error => {
    toast.error(error.message);
  });
};

// Removes special characters from a string, normalizing it.
export const removeSpecialCharacters = (str) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
