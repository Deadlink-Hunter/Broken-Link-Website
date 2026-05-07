import { render, screen } from '@test-utils';
import { describe, expect, it } from 'vitest';
import { theme } from '@/theme';
import { Modal } from './Modal';

describe('Modal', () => {
  it('lets contentStyle override styles.content for overlapping content styles', () => {
    const slotBackgroundColor = theme.colors.error[5];
    const slotTextColor = theme.colors.success[5];
    const contentBackgroundColor = theme.colors.cyan[5];

    render(
      <Modal
        opened
        onClose={() => {}}
        title='Styled modal'
        fullScreen={false}
        styles={{
          content: {
            backgroundColor: slotBackgroundColor,
            color: slotTextColor,
          },
        }}
        contentStyle={{
          backgroundColor: contentBackgroundColor,
        }}
      >
        Modal body
      </Modal>
    );

    const dialog = screen.getByRole('dialog', { name: 'Styled modal' });

    expect(dialog).toHaveStyle({
      backgroundColor: contentBackgroundColor,
      color: slotTextColor,
    });
  });
});
