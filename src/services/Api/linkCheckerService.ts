import { StatusCodes } from 'http-status-codes';
import { AxiosError } from 'axios';
import {
  AllowedApiData,
  ApiErrorTypes,
  HealthResponse,
  MultipleUrlsResponse,
  ServiceResponse,
  UrlCheckResult,
  ServerErrorData,
} from '../Types/apiTypes';
import api from './api';

const handleApiError = <T extends AllowedApiData>(err: unknown): ServiceResponse<T> => {
  const error = err as AxiosError<ServerErrorData>;
  const status = error.response?.status || StatusCodes.INTERNAL_SERVER_ERROR;
  const errorMsg = (error.response?.data?.error as ApiErrorTypes) || ApiErrorTypes.INTERNAL_SERVER_ERROR;
  return { status, error: errorMsg };
};

const linkCheckerService = {
  healthCheck: async (): Promise<ServiceResponse<HealthResponse>> => {
    try {
      const response = await api.get('/api/health');
      return { status: response.status, data: response.data };
    } catch (err) {
      return handleApiError(err);
    }
  },
  checkLink: async (url: string): Promise<ServiceResponse<UrlCheckResult>> => {
    try {
      const response = await api.post('/api/check-url', { url });
      return { status: response.status, data: response.data.data };
    } catch (err) {
      return handleApiError(err);
    }
  },
  checkLinks: async (urls: string[]): Promise<ServiceResponse<MultipleUrlsResponse>> => {
    try {
      const response = await api.post('/api/check-urls', { urls });
      return { status: response.status, data: response.data.data };
    } catch (err) {
      return handleApiError(err);
    }
  },
};

export default linkCheckerService;
