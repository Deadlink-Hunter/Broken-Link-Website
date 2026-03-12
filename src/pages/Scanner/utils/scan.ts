import type {
  MultipleUrlsResponse,
  UrlCheckData,
  UrlCheckResult,
} from '@/services/LinkChecker/types';
import { ResolvedKind, type ResolvedScanResults, type ScanResult } from '../types/scan';

type BatchScanPayload = NonNullable<MultipleUrlsResponse['data']>;

type SingleUrlScanResult = UrlCheckResult & {
  data: NonNullable<UrlCheckResult['data']>;
};

const BATCH_RESULTS_KEY: keyof BatchScanPayload = 'results';

function isBatchScanResult(
  result: ScanResult
): result is MultipleUrlsResponse & { data: BatchScanPayload } {
  return result.data !== undefined && BATCH_RESULTS_KEY in result.data;
}

function isSingleUrlScanResult(result: ScanResult): result is SingleUrlScanResult {
  return result.data !== undefined && !isBatchScanResult(result);
}

export function resolveScanResults(result: ScanResult | null): ResolvedScanResults | null {
  if (!result?.data) {
    return null;
  }
  if (isBatchScanResult(result)) {
    const { data } = result;
    return {
      kind: ResolvedKind.MULTIPLE,
      results: data.results,
      summary: data.summary,
    };
  }
  if (isSingleUrlScanResult(result)) {
    const singleLinkResult = result.data;
    return {
      kind: ResolvedKind.SINGLE,
      url: singleLinkResult.url,
      isBroken: singleLinkResult.isBroken,
      statusCode: singleLinkResult.statusCode,
      error: singleLinkResult.error,
      responseTime: singleLinkResult.responseTime,
    };
  }
  return null;
}

export function sumResponseTimes(items: UrlCheckData[]): number {
  return items.reduce((sum, item) => sum + (item.responseTime ?? 0), 0);
}
