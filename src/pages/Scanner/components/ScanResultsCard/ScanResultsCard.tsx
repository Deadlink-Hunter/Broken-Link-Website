import { useIsDark } from '@/components/Hooks/useIsDark';
import {
  MultipleResultData,
  ResolvedKind,
  ScanResultsCardProps,
  SingleResultData,
} from '../../types/scan';
import { resolveScanResults } from '../../utils/scan';
import { EmptyState } from './EmptyState';
import { ErrorState } from './ErrorState';
import { LoadingState } from './LoadingState';
import { MultipleResults } from './MultipleResults';
import { SingleResult } from './SingleResult';

export const ScanResultsCard = ({ results, loading, error }: ScanResultsCardProps) => {
  const isDark = useIsDark();
  const resolved = resolveScanResults(results);

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  if (!resolved) {
    return <EmptyState isDark={isDark} />;
  }

  if (resolved.kind === ResolvedKind.SINGLE) {
    return <SingleResult data={resolved as SingleResultData} isDark={isDark} />;
  }
  if (resolved.kind === ResolvedKind.MULTIPLE) {
    return <MultipleResults data={resolved as MultipleResultData} isDark={isDark} />;
  }

  return null;
};
