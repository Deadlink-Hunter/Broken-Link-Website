import type {
  MultipleUrlsResponse,
  UrlCheckData,
  UrlCheckResult,
} from '@/services/LinkChecker/types';
import { ResolvedKind, type ResolvedScanResults, type ScanResult } from './types/scan';

type MultipleData = NonNullable<MultipleUrlsResponse['data']>;
type SingleResultWithData = UrlCheckResult & {
  data: NonNullable<UrlCheckResult['data']>;
};

const RESULTS_KEY: keyof MultipleData = 'results';

function hasMultipleData(
  result: ScanResult
): result is MultipleUrlsResponse & { data: MultipleData } {
  return result.data !== undefined && RESULTS_KEY in result.data;
}

function hasSingleData(result: ScanResult): result is SingleResultWithData {
  return result.data !== undefined && !hasMultipleData(result);
}

export function resolveScanResults(result: ScanResult | null): ResolvedScanResults | null {
  if (!result?.data) {
    return null;
  }
  if (hasMultipleData(result)) {
    return {
      kind: ResolvedKind.MULTIPLE,
      results: result.data.results,
      summary: result.data.summary,
    };
  }
  if (hasSingleData(result)) {
    const data = result.data;
    return {
      kind: ResolvedKind.SINGLE,
      url: data.url,
      isBroken: data.isBroken,
      statusCode: data.statusCode,
      error: data.error,
      responseTime: data.responseTime,
    };
  }
  return null;
}

export function sumResponseTimes(items: UrlCheckData[]): number {
  return items.reduce((sum, item) => sum + (item.responseTime ?? 0), 0);
}
