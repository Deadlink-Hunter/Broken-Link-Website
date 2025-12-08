import { MAX_URLS_PER_REQUEST } from '../../constants/api';

export enum ApiErrorTypes {
  URL_REQUIRED = 'URL is required',
  INTERNAL_SERVER_ERROR = 'Internal server error',
  URLS_ARRAY_REQUIRED = 'URLs array is required',
  ONE_URL_REQUIRED = 'At least one URL is required',
  MAXIMUM_URLS_ALLOWED = `Maximum ${MAX_URLS_PER_REQUEST} URLs allowed per request`,
}
export interface ServerErrorData {
    success: boolean;
    error: string;   
    message?: string;
}

export type AllowedApiData = UrlCheckResult | MultipleUrlsResponse | HealthResponse;

export interface ServiceResponse<T extends AllowedApiData = AllowedApiData> {
  status: number;
  data?: T;
  error?: ApiErrorTypes;
}
export interface UrlCheckResult {
  url: string;
  isBroken: boolean;
  statusCode?: number;
  error?: string;
  responseTime?: number;
}
export interface MultipleUrlsResponse {
  results: UrlCheckResult[];
  summary: {
    total: number;
    broken: number;
    working: number;
  };
}
export interface HealthResponse {
  success: boolean;
  message: string;
  timestamp: string;
}
