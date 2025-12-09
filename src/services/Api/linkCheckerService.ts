import { StatusCodes } from 'http-status-codes';
import { AxiosError } from 'axios';
import {
  AllowedApiData,
  ApiErrorTypes,
  MultipleUrlsResponse,
  ServiceResponse,
  UrlCheckResult,
  ServerErrorData,
} from '../Types/apiTypes';
import api from './api';
import { API_CHECH_URL, API_CHECH_URLS } from '@/constants/api';

const handleApiError = <T extends AllowedApiData>(err: unknown): ServiceResponse<T> => {
  const error = err as AxiosError<ServerErrorData>;
  const status = error.response?.status || StatusCodes.INTERNAL_SERVER_ERROR;
  const errorMsg = (error.response?.data?.error as ApiErrorTypes) || ApiErrorTypes.INTERNAL_SERVER_ERROR;
  return { status, error: errorMsg };
};

const linkCheckerService = {
  checkLink: async (url: string): Promise<ServiceResponse<UrlCheckResult>> => {
    try {
      const response = await api.post(API_CHECH_URL, { url });
      return { status: response.status, data: response.data.data };
    } catch (err) {
      return handleApiError(err);
    }
  },
  checkLinks: async (urls: string[]): Promise<ServiceResponse<MultipleUrlsResponse>> => {
    try {
      const response = await api.post(API_CHECH_URLS, { urls });
      return { status: response.status, data: response.data.data };
    } catch (err) {
      return handleApiError(err);
    }
  },
};

export default linkCheckerService;
