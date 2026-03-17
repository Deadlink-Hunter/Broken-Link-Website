import type {
  ApiErrorTypes,
  MultipleUrlsResponse,
  UrlCheckData,
  UrlCheckResult,
} from '@/services/LinkChecker/types';

export enum ScanMode {
  SINGLE = 'single',
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

export interface ScanMutationVariables {
  scanType: ScanMode;
  url: string;
  multipleUrl: string;
}

export interface ScanLinkCardProps {
  scanType: ScanMode;
  setScanType: (value: ScanMode) => void;
  url: string;
  setUrl: (value: string) => void;
  multipleUrl: string;
  setMultipleUrl: (value: string) => void;
  onScan: (variables: ScanMutationVariables) => void;
}

export interface ScanResultsCardProps {
  results: ScanResult | null;
  loading: boolean;
  error: ApiErrorTypes | null;
}
