import { useTranslation } from 'react-i18next';
import { FormEvent, ChangeEvent } from 'react';

import { Button } from '@/components/UI/Button/Button';
import { scanPageStyle } from './styles';

interface SingleScanFormProps {
  url: string;
  setUrl: (value: string) => void;
  onSubmit?: () => void;
}

export const SingleScanForm = ({ url, setUrl, onSubmit }: SingleScanFormProps) => {
  const { t } = useTranslation();
  const baseKey = 'scanner_page.scan_links_card.single';

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.();
  };

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={scanPageStyle.formFieldGroup}>
        <label htmlFor='single-scan-url' style={scanPageStyle.fieldLabel}>
          {t(`${baseKey}.input_label`)}
        </label>
        <input
          id='single-scan-url'
          type='url'
          placeholder={t(`${baseKey}.input_placeholder`)}
          value={url}
          onChange={handleUrlChange}
          style={scanPageStyle.textInputStyle}
        />
      </div>

      <Button
        style={scanPageStyle.scanSubmitButton}
        leftSection={
          <img alt='Deadlink logo' src='logo.svg' style={scanPageStyle.scanSubmitButtonIcon} />
        }
      >
        {t(`${baseKey}.button_check`)}
      </Button>
    </form>
  );
};
