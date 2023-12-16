import { config } from "../../config";
import axios from "axios";
const { baseUrl,apiKey } = config;
export const axiosGet = async (endpoint, data = {},type) => {
  try {
    let apiUrl;
    apiUrl = baseUrl;
    const newUrl = type=='search'?`${apiUrl}${endpoint}&apikey=${apiKey}`:`${apiUrl}${endpoint}?apikey=${apiKey}`
    const response = await axios.get(newUrl);

    return {
      status: response?.data?.status || response?.data?.[0]?.status,
      message: response?.data?.message || response?.data?.[0]?.status,
      data: response.data,
    };
  } catch (error) {
    return {
      status: false,
      message:
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong",
      data: error.response?.data || error,
    };
  }
};
