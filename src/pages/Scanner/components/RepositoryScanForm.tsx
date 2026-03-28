import { ChangeEvent, FormEvent } from 'react';
import { IconUpload } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/UI/Button/Button';
import { scanPageStyle } from './styles';

interface RepositoryScanFormProps {
  url: string;
  setUrl: (value: string) => void;
  multipleUrl: string;
  setMultipleUrl: (value: string) => void;
  onSubmit: () => void;
}

export const RepositoryScanForm = ({
  url,
  setUrl,
  multipleUrl,
  setMultipleUrl,
  onSubmit,
}: RepositoryScanFormProps) => {
  const { t } = useTranslation();
  const baseTranslationKey = 'scanner_page.scan_links_card.repository';

  const handleSubmit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    onSubmit();
  };

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleMultipleUrlChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMultipleUrl(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={scanPageStyle.formFieldGroup}>
        <label htmlFor='repository-url' style={scanPageStyle.fieldLabel}>
          {t(`${baseTranslationKey}.input_label`)}
        </label>
        <input
          id='repository-url'
          type='url'
          value={url}
          onChange={handleUrlChange}
          placeholder={t(`${baseTranslationKey}.input_placeholder`)}
          style={scanPageStyle.textInputStyle}
        />
      </div>

      <div style={scanPageStyle.formFieldGroup}>
        <label htmlFor='multiple-urls' style={scanPageStyle.fieldLabel}>
          {t(`${baseTranslationKey}.textarea_label`)}
        </label>
        {/* TODO - replace this with future shared text component */}
        <textarea
          id='multiple-urls'
          value={multipleUrl}
          onChange={handleMultipleUrlChange}
          placeholder={t(`${baseTranslationKey}.textarea_placeholder`)}
          style={scanPageStyle.textareaStyle}
          rows={4}
        />
      </div>

      <Button
        onClick={handleSubmit}
        style={scanPageStyle.scanSubmitButton}
        leftSection={<IconUpload style={scanPageStyle.scanSubmitButtonIcon} />}
      >
        {t(`${baseTranslationKey}.button_check`)}
      </Button>
    </form>
  );
};
