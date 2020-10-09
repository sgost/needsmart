import { BASE_URL, OUTLETID, OUTLETSURL } from '../helper';
import logger from '../logger';
import Interceptor from './interceptor';

const request = new Interceptor();

export const getSingleOutlet = async success => {
  try {
    const response = await request.get(`${BASE_URL}/${OUTLETSURL}/${OUTLETID}`);
    success(response);
  } catch (err) {
    logger(err);
  }
};

export const getOutletItems = async (subCategoryId, success) => {
  let params;
  if(subCategoryId) {
    params = new URLSearchParams({
      sub_category_id: subCategoryId || ''
    }).toString();
  }

  let url;
  if(params !== undefined) {
    url = `${BASE_URL}/${OUTLETSURL}/${OUTLETID}/items?grouping=true&`+params;
  } else {
    url = `${BASE_URL}/${OUTLETSURL}/${OUTLETID}/items?grouping=true`;
  }
 
  try {
    const response = await request.get(url);
    success(response);
  } catch (err) {
    logger(err);
  }
};

export const searchItems = async (query, success, error) => {

  let url;
  if(query.length) {
    url = `${BASE_URL}/${OUTLETSURL}/${OUTLETID}/search?query=`+query;
  } else {
    url = `${BASE_URL}/${OUTLETSURL}/${OUTLETID}/search?query=''`;
  }

  try {
    const response = await request.get(url);
    success(response);
  } catch (err) {
    logger(err);
  }
};
