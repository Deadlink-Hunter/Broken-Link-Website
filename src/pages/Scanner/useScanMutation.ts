import { useMutation } from '@tanstack/react-query';
import { MAX_URLS_PER_REQUEST } from '@/services/LinkChecker/constants';
import linkCheckerService from '@/services/LinkChecker/linkCheckerService';
import { ApiErrorTypes } from '@/services/LinkChecker/types';
import { ScanMode, type ScanMutationVariables, type ScanResult } from './types/scan';

const parseMultipleUrls = (input: string): string[] =>
  input
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

const hasError = (result: { error?: string | null }): result is { error: string } =>
  Boolean(result.error);

async function runSingleUrlScan(url: string): Promise<ScanResult> {
  const trimmedUrl = url.trim();
  if (!trimmedUrl) {
    throw ApiErrorTypes.URL_REQUIRED;
  }
  const result = await linkCheckerService.checkLink(trimmedUrl);
  if (hasError(result)) {
    throw result.error;
  }
  return result;
}

async function runMultipleUrlsScan(multipleUrl: string): Promise<ScanResult> {
  const urls = parseMultipleUrls(multipleUrl);
  if (urls.length === 0) {
    throw ApiErrorTypes.ONE_URL_REQUIRED;
  }
  if (urls.length > MAX_URLS_PER_REQUEST) {
    throw ApiErrorTypes.MAXIMUM_URLS_ALLOWED;
  }
  const result = await linkCheckerService.checkLinks(urls);
  if (hasError(result)) {
    throw result.error;
  }
  return result;
}

async function runScan(variables: ScanMutationVariables): Promise<ScanResult> {
  const { scanType, url, multipleUrl } = variables;
  return scanType === ScanMode.SINGLE ? runSingleUrlScan(url) : runMultipleUrlsScan(multipleUrl);
}

export function useScanMutation() {
  const mutation = useMutation<ScanResult, ApiErrorTypes, ScanMutationVariables>({
    mutationFn: runScan,
  });

  return {
    data: mutation.data ?? null,
    isLoading: mutation.isPending,
    error: mutation.error ?? null,
    mutate: mutation.mutate,
    reset: mutation.reset,
  };
}
