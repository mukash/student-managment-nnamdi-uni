import {AxiosRequestConfig} from 'axios';
import {instance} from './axios';

// TODO Should be fetched form the env file
// for live uncomment in produxtion
// export const baseURL = 'http://localhost:8779/';

// for dev 
// export const baseURL = 'https://dev.flash-lead.com/api/v7/';

// TODO Should use the token in the userData context
export const httpGet = async (
  requestPath: string,
  config?: AxiosRequestConfig,
): Promise<any> => {
  const axiosResponse = await instance.get(requestPath, {
    headers: {
      Authorization: 'Bearer null',
    },
    ...config,
  });
  return axiosResponse.data;
};

export const httpPost = async (
  requestPath: string,
  data: any,
  config?: AxiosRequestConfig,
): Promise<any> => {
 
    const axiosResponse = await instance.post(requestPath, data, {
      headers: {
        Authorization: 'Bearer null',
      },
      ...config,
    });
    return axiosResponse.data;
  
};

export const httpPut = async (
  requestPath: string,
  data: any,
  config?: AxiosRequestConfig,
): Promise<any> => {
  const axiosResponse = await instance.put(requestPath, data, {
    headers: {
      Authorization: 'Bearer null',
    },
    ...config,
  });
  return axiosResponse.data;
};

export const httpDelete = async (
  requestPath: string,
  config?: AxiosRequestConfig,
): Promise<any> => {
  const axiosResponse = await instance.delete(requestPath, {
    headers: {
      Authorization: 'Bearer null',
    },
    ...config,
  });
  return axiosResponse.data;
};
