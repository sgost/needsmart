import { BASE_URL, OFFERSURL, OUTLETID } from '../helper';
import logger from '../logger';
import Interceptor from './interceptor';

const request = new Interceptor();

export const getAllOffers = async (success, error) => {
  try {
    const response = await request.get(`${BASE_URL}/${OFFERSURL}?outlet_id=${OUTLETID}`);
    success(response);
  } catch (err) {
    error(err);
    logger(err);
  }
};
