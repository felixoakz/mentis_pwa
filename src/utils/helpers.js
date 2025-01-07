import { toast } from "react-toastify";

// Handles API response errors and displays toast notifications.
export const responseErrors = async (error) => {

  if (error.message === 'Network Error') {
    toast.error('No server connection.');
  }

  if (error.response) {
    const errorMsg = `${error.response.data.message}`
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
