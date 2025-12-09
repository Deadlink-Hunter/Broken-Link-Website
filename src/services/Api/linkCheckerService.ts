import { AxiosError } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { API_CHECH_URL, API_CHECH_URLS } from '@/constants/api';
import {
  AllowedApiData,
  ApiErrorTypes,
  MultipleUrlsResponse,
  ServerErrorData,
  ServiceResponse,
  UrlCheckResult,
} from '../Types/apiTypes';
import api from './api';

const handleApiError = <T extends AllowedApiData>(err: unknown): ServiceResponse<T> => {
  const error = err as AxiosError<ServerErrorData>;
  const status = error.response?.status || StatusCodes.INTERNAL_SERVER_ERROR;
  const errorMsg =
    (error.response?.data?.error as ApiErrorTypes) || ApiErrorTypes.INTERNAL_SERVER_ERROR;
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
