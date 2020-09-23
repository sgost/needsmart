import { BASE_URL, ADDRESSURL } from '../helper';
import logger from '../logger';
import Interceptor from './interceptor';

const request = new Interceptor();

export const saveAddress = async (data, success, error) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('api_token')}` }
  };
  try {
    const response = await request.post(`${BASE_URL}/${ADDRESSURL}`, data, config);
    success(response.data);
  } catch (err) {
    error(err);
    logger(err);
  }
};

export const getAllAddress = async success => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('api_token')}` }
  };
  try {
    const response = await request.get(`${BASE_URL}/${ADDRESSURL}`, config);
    success(response.data);
  } catch (err) {
    logger(err);
  }
};

export const updateAddress = async (id, data, success, error) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('api_token')}` }
  };
  try {
    const response = await request.put(`${BASE_URL}/${ADDRESSURL}/${id}`, data, config);
    success(response.data);
  } catch (err) {
    error(err);
    logger(err);
  }
};

export const deleteAddress = async (id, success, error) => {
  try {
    const response = await request.delete(`${BASE_URL}/${ADDRESSURL}/${id}`,  { headers: { Authorization: `Bearer ${localStorage.getItem('api_token')}` } });
    success(response.data);
  } catch (err) {
    error(err);
    logger(err);
  }
};
