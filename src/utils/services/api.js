import { message } from 'antd';
import { BASE_URL, APIURL } from '../helper';
import logger from '../logger';
import Interceptor from './interceptor';

const request = new Interceptor();

export const createData = async (data, success, error) => {
  try {
    const response = await request.post(`${BASE_URL}${APIURL}`, data);
    success(response.data.data);
  } catch (err) {
    if (err.resposne && err.response.status === 400) {
      message.warning(err.response.data.errors.name[0]);
    } else {
      logger(err);
    }
  }
};

export const getAllDetails = async success => {
  try {
    const response = await request.get(`${BASE_URL}${APIURL}?per_page=1000`);
    success(response.data.data);
  } catch (err) {
    logger(err);
  }
};

export const getDetailsById = async (id, success) => {
  try {
    const response = await request.get(`${BASE_URL}${APIURL}/${id}/?per_page=1000`);
    success(response.data.data);
  } catch (err) {
    logger(err);
  }
};
