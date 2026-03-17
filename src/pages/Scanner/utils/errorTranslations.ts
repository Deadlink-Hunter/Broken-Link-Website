import { MAX_URLS_PER_REQUEST } from '@/services/LinkChecker/constants';
import { ApiErrorTypes } from '@/services/LinkChecker/types';

const ERROR_KEYS_BASE = 'scanner_page.scan_results_card.errors';

const ERROR_KEY_MAP: Record<ApiErrorTypes, string> = {
  [ApiErrorTypes.URL_REQUIRED]: `${ERROR_KEYS_BASE}.url_required`,
  [ApiErrorTypes.INTERNAL_SERVER_ERROR]: `${ERROR_KEYS_BASE}.internal_server_error`,
  [ApiErrorTypes.URLS_ARRAY_REQUIRED]: `${ERROR_KEYS_BASE}.urls_array_required`,
  [ApiErrorTypes.ONE_URL_REQUIRED]: `${ERROR_KEYS_BASE}.one_url_required`,
  [ApiErrorTypes.MAXIMUM_URLS_ALLOWED]: `${ERROR_KEYS_BASE}.maximum_urls_allowed`,
};

export function getErrorTranslationKey(error: ApiErrorTypes): string {
  return ERROR_KEY_MAP[error] ?? `${ERROR_KEYS_BASE}.internal_server_error`;
}

export function getErrorTranslationOptions(
  error: ApiErrorTypes
): Record<string, number> | undefined {
  if (error === ApiErrorTypes.MAXIMUM_URLS_ALLOWED) {
    return { max: MAX_URLS_PER_REQUEST };
  }
  return undefined;
}
