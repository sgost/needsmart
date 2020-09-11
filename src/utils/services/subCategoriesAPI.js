import { message } from 'antd';
import { BASE_URL, SUBCATEGORIESURL } from '../helper';
import logger from '../logger';
import Interceptor from './interceptor';

const request = new Interceptor();

export const getAllSubCategories = async success => {
  try {
    const response = await request.get(`${BASE_URL}/${SUBCATEGORIESURL}`);
    success(response);
  } catch (err) {
    logger(err);
  }
};
