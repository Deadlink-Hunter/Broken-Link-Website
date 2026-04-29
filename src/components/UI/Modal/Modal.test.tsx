import { render, screen } from '@test-utils';
import { describe, expect, it } from 'vitest';
import { Modal } from './Modal';

describe('Modal', () => {
  it('lets contentStyle override styles.content for overlapping content styles', () => {
    render(
      <Modal
        opened
        onClose={() => {}}
        title='Styled modal'
        fullScreen={false}
        styles={{
          content: {
            backgroundColor: '#ff0000',
            color: '#00ff00',
          },
        }}
        contentStyle={{
          backgroundColor: '#0000ff',
        }}
      >
        Modal body
      </Modal>
    );

    const dialog = screen.getByRole('dialog', { name: 'Styled modal' });

    expect(dialog).toHaveStyle({
      backgroundColor: 'rgb(0, 0, 255)',
      color: 'rgb(0, 255, 0)',
    });
  });
});
