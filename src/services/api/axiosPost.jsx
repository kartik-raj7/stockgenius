import React from 'react';
import axios from 'axios';
import { config } from '../../../config';
const {username,password,apiUrl} = config
export const axiosInstance = axios.create({
    baseURL: apiUrl,
  });
export const axiosPost = async (apiUrl, requestData, contentType = 'application/json') => {
  const cred = btoa(`${username}:${password}`);
  const headers = {
    Authorization: `Basic ${cred}`,
    'Content-Type': contentType,
  };
  try {
    const response = await axiosInstance.post(apiUrl, requestData, { headers });

    return {
      status: response?.data?.status || response?.data?.[0]?.status,
      message: response?.data?.message || response?.data?.[0]?.status,
      data: response.data,
    };
  } catch (error) {
    return {
      status: false,
      message: error?.response?.data?.message || error?.message || 'Something went wrong',
      data: error.response?.data || error,
    };
  }
};