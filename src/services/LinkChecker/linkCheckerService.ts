import { AxiosError } from 'axios';
import { StatusCodes } from 'http-status-codes';
import api from '../Api/api';
import { API_CHECH_URL, API_CHECH_URLS } from './constants';
import { ApiErrorTypes, MultipleUrlsResponse, ServerErrorData, UrlCheckResult } from './types';

const handleApiError = (err: unknown) => {
  const error = err as AxiosError<ServerErrorData>;
  const status = error.response?.status || StatusCodes.INTERNAL_SERVER_ERROR;
  const errorMsg =
    (error.response?.data?.error as ApiErrorTypes) || ApiErrorTypes.INTERNAL_SERVER_ERROR;
  return { status, error: errorMsg };
};

const linkCheckerService = {
  checkLink: async (url: string): Promise<UrlCheckResult> => {
    try {
      const response = await api.post(API_CHECH_URL, { url });
      return { status: response.status, data: response.data.data };
    } catch (err) {
      return handleApiError(err);
    }
  },
  checkLinks: async (urls: string[]): Promise<MultipleUrlsResponse> => {
    try {
      const response = await api.post(API_CHECH_URLS, { urls });
      return { status: response.status, data: response.data.data };
    } catch (err) {
      return handleApiError(err);
    }
  },
};

export default linkCheckerService;
