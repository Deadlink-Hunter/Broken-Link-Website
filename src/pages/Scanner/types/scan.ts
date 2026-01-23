export type ScanMode = 'single' | 'repository';

export interface ScanLinkCardProps {
  scanType: ScanMode;
  setScanType: (value: ScanMode) => void;
  url: string;
  setUrl: (value: string) => void;
  multipleUrl: string;
  setMultipleUrl: (value: string) => void;
}
