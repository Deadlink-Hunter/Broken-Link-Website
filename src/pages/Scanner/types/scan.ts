import type {
  MultipleUrlsResponse,
  UrlCheckData,
  UrlCheckResult,
} from '@/services/LinkChecker/types';

export enum ScanMode {
  SINGLE = 'single',
  // TODO: Repository scan mode is not yet implemented
  REPOSITORY = 'repository',
}

export enum ResolvedKind {
  SINGLE = 'single',
  MULTIPLE = 'multiple',
}

export type ScanResult = UrlCheckResult | MultipleUrlsResponse;

export interface ScanSummary {
  total: number;
  broken: number;
  working: number;
}

export interface SingleResultData extends UrlCheckData {
  kind: ResolvedKind.SINGLE;
}

export interface MultipleResultData {
  kind: ResolvedKind.MULTIPLE;
  results: UrlCheckData[];
  summary: ScanSummary;
}

export type ResolvedScanResults = SingleResultData | MultipleResultData;

export interface AsyncCallbacks {
  onLoading: (loading: boolean) => void;
  onError: (error: string | null) => void;
  onResults: (result: ScanResult | null) => void;
}

export interface ScanLinkCardProps {
  scanType: ScanMode;
  setScanType: (value: ScanMode) => void;
  url: string;
  setUrl: (value: string) => void;
  multipleUrl: string;
  setMultipleUrl: (value: string) => void;
  callbacks: AsyncCallbacks;
}

export interface ScanResultsCardProps {
  results: ScanResult | null;
  loading: boolean;
  error: string | null;
}
