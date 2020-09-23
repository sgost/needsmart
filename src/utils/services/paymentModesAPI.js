import { BASE_URL, OUTLETSURL, OUTLETID } from '../helper';
import logger from '../logger';
import Interceptor from './interceptor';

const request = new Interceptor();

export const getPaymentModes = async success => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('api_token')}` }
  };
  try {
    const response = await request.get(`${BASE_URL}/${OUTLETSURL}/${OUTLETID}/payment_modes`, config);
    success(response);
  } catch (err) {
    logger(err);
  }
};
