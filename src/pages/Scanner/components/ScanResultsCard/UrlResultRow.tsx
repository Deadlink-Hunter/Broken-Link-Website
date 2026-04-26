import { IconCircleCheck, IconCircleX } from '@tabler/icons-react';
import { getReasonPhrase } from 'http-status-codes';
import { scanPageStyle } from '../styles';

const getStatusText = (isBroken: boolean, statusCode?: number, errorText?: string): string => {
  if (!statusCode) {
    return isBroken ? (errorText ?? '') : '';
  }

  try {
    return `${statusCode} ${getReasonPhrase(statusCode)}`;
  } catch {
    return String(statusCode);
  }
};

export interface UrlResultRowProps {
  url: string;
  isBroken: boolean;
  statusCode?: number;
  statusErrorText: string;
  isDark: boolean;
}

export const UrlResultRow = ({
  url,
  isBroken,
  statusCode,
  statusErrorText,
  isDark,
}: UrlResultRowProps) => {
  const StatusIcon = isBroken ? IconCircleX : IconCircleCheck;
  const statusText = getStatusText(isBroken, statusCode, statusErrorText);

  return (
    <div style={scanPageStyle.urlRowCard(isDark)}>
      <div style={scanPageStyle.urlRowLeft}>
        <StatusIcon style={scanPageStyle.circleIcon(isBroken, isDark)} />
        <span style={scanPageStyle.urlText(isDark)}>{url}</span>
      </div>
      {statusText && (
        <span style={scanPageStyle.urlStatusText(isBroken, isDark)}>{statusText}</span>
      )}
    </div>
  );
};
