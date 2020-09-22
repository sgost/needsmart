import { BASE_URL, TRANSACTIONURL } from '../helper';
import logger from '../logger';
import Interceptor from './interceptor';

const request = new Interceptor();

export const createTransaction = async (data, success, error) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('api_token')}` }
  };
  console.log(data);
  try {
    const response = await request.post(`${BASE_URL}/${TRANSACTIONURL}`, data, config);
    success(response);
  } catch (err) {
    error(err);
    logger(err);
  }
};
