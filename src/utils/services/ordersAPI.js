import { BASE_URL, ORDERSURL } from '../helper';
import logger from '../logger';
import Interceptor from './interceptor';

const request = new Interceptor();

export const createOrder = async (data, success, error) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('api_token')}` }
  };
  try {
    const response = await request.post(`${BASE_URL}/${ORDERSURL}`, data, config);
    success(response);
  } catch (err) {
    error(err);
    logger(err);
  }
};
