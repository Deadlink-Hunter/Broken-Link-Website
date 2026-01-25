export enum ScanMode {
  SINGLE = 'single',
  REPOSITORY = 'repository',
}

export interface ScanLinkCardProps {
  scanType: ScanMode;
  setScanType: (value: ScanMode) => void;
  url: string;
  setUrl: (value: string) => void;
  multipleUrl: string;
  setMultipleUrl: (value: string) => void;
}
