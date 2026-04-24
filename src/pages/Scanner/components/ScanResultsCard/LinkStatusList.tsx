import type { UrlCheckData } from '@/services/LinkChecker/types';
import { scanPageStyle } from '../styles';
import { UrlResultRow } from './UrlResultRow';

interface LinkStatusListProps {
  resultsList: UrlCheckData[];
  statusErrorText: string;
  isDark: boolean;
}

export const LinkStatusList = ({ resultsList, statusErrorText, isDark }: LinkStatusListProps) => {
  return (
    <div style={scanPageStyle.resultsListContainer}>
      {resultsList.map(({ url, isBroken, statusCode }: UrlCheckData, index: number) => (
        <UrlResultRow
          key={`${url}-${index}`}
          url={url}
          isBroken={isBroken}
          statusCode={statusCode}
          statusErrorText={statusErrorText}
          isDark={isDark}
        />
      ))}
    </div>
  );
};
