import { BASE_URL, OUTLETID, CARTURL } from '../helper';
import logger from '../logger';
import Interceptor from './interceptor';

const request = new Interceptor();

export const addItems = async (id, success, error) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('api_token')}` }
  };
  const data = {
    outlet_id: OUTLETID,
    item_id: id
  };
  try {
    const response = await request.post(`${BASE_URL}/${CARTURL}/add_items`, data, config);
    success(response);
  } catch (err) {
    error(err);
    logger(err);
  }
};

export const removeItem = async (id, success, error) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('api_token')}` }
  };
  const data = {
    outlet_id: OUTLETID,
    item_id: id
  };
  try {
    const response = await request.delete(`${BASE_URL}/${CARTURL}/remove_item`, { data: data, config });
    success(response);
  } catch (err) {
    error(err);
    logger(err);
  }
};

export const getCartItems = async success => {
  try {
    const response = await request.get(`${BASE_URL}/${CARTURL}/items?outlet_id=${OUTLETID}`);
    success(response.data);
  } catch (err) {
    logger(err);
  }
};

export const getCartSummary = async success => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('api_token')}` }
  };
  try {
    const response = await request.get(`${BASE_URL}/${CARTURL}/my_cart_summary?outlet_id=${OUTLETID}`, config);
    success(response.data);
  } catch (err) {
    logger(err);
  }
};

