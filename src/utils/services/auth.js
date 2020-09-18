import { BASE_URL, BASE_USER } from '../helper';
import Interceptor from './interceptor';
import logger from '../logger';

const request = new Interceptor();

export const CreateUser = async (data, success, error) => {
  try {
    const response = await request.post(`${BASE_URL}/${BASE_USER}`, data);
    success(response);
  } catch (err) {
    error(err);
    logger(err);
  }
};

export const newOTP = async (token, success) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  try {
    const response = await request.get(`${BASE_URL}/${BASE_USER}/new_otp`, config);
    success(response.data);
  } catch (err) {
    logger(err);
  }
};

export const validateOTP = async (data, success, error) => {
  try {
    const response = await request.post(`${BASE_URL}/${BASE_USER}/valid_otp`, data);
    success(response);
  } catch (err) {
    error(err);
    logger(err);
  }
};

export const updateUser = async (data, success, error) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('api_token')}` }
  };
  try {
    const response = await request.put(`${BASE_URL}/${BASE_USER}/update_user_details`, data, config);
    success(response.data);
  } catch (err) {
    error(err);
    logger(err);
  }
};

export const getUserDetails = async success => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('api_token')}` }
  };
  try {
    const response = await request.get(`${BASE_URL}/${BASE_USER}/profile`, config);
    success(response.data);
  } catch (err) {
    if (err.response.status === 401) {
      localStorage.removeItem('api_token');
    }
    logger(err);
  }
};

  // const formatErrors = (errors, existingErrorMessages) => {
  //   let errorData = errors;
  //   let errorMessages = { ...existingErrorMessages };
  //   Object.keys(errorData).forEach(key => {
  //     errorMessages[key] = errorData[key];
  //   });
  //   return errorMessages;
  // };
  