import { BASE_URL, BASE_USER } from '../helper';
import Interceptor from './interceptor';
import logger from '../logger';

const request = new Interceptor();

export const getUserDetails = async success => {
  try {
    const response = await request.get(`${BASE_URL}users/profile`);
    success(response.data.data);
  } catch (err) {
    logger(err);
  }
};

export const signUpUser = async (user, existingErrorMessages, success, error) => {
    try {
      const response = await request.post(`${BASE_URL}${BASE_USER}/sign_up`, { user });
      return success(response);
    } catch (err) {
      if (err && err.response && err.response.data && err.response.data.errors) {
        const errorMessages = formatErrors(err.response.data.errors);
        return error(errorMessages, existingErrorMessages);
      }
      return error();
    }
  };
  
  export const signInUser = async (user, existingErrorMessages, success, error) => {
    try {
      const response = await request.post(`${BASE_URL}${BASE_USER}/sign_in`, { user });
      return success(response);
    } catch (err) {
      if (err && err.response && err.response.data && err.response.data.errors) {
        const errorMessages = formatErrors(err.response.data.errors, existingErrorMessages);
        return error(errorMessages);
      }
      return error();
    }
  };
  
  const formatErrors = (errors, existingErrorMessages) => {
    let errorData = errors;
    let errorMessages = { ...existingErrorMessages };
    Object.keys(errorData).forEach(key => {
      errorMessages[key] = errorData[key];
    });
    return errorMessages;
  };
  