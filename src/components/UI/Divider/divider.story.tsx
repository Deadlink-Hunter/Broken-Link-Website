import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { theme } from '@/theme';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/UI/Divider',
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof meta>;

const basicDividerTest = (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  const divider = canvas.getByTestId('divider');
  expect(divider).toBeInTheDocument();
  return divider;
};

export const DividerDefault: Story = {
  args: {
    variant: 'primary',
    orientation: 'horizontal',
  },
};

export const HorizontalDivider: Story = {
  render: (args) => (
    <div style={{ padding: '2rem', width: '300px' }}>
      <div style={{ padding: '1rem', backgroundColor: '#f0f0f0', marginBottom: '1rem' }}>
        Content Above
      </div>
      <Divider
        variant='primary'
        orientation='horizontal'
        style={{
          backgroundColor: 'blue',
          height: '3px',
        }}
        {...args}
      />
      <div style={{ padding: '1rem', backgroundColor: '#e0e0e0', marginTop: '1rem' }}>
        Content Below
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const divider = basicDividerTest(canvasElement);
    expect(divider).toHaveAttribute('data-orientation', 'horizontal');
    const computed = getComputedStyle(divider);
    expect(computed.backgroundColor).toBe('rgb(0, 0, 255)');
    expect(computed.margin).toBe(theme.spacing.md);
  },
};

export const VerticalDivider: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '100px',
        padding: '1rem',
      }}
    >
      <div style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>Left Content</div>
      <Divider
        variant='secondary'
        orientation='vertical'
        style={{
          backgroundColor: 'red',
          width: '3px',
          height: '80px',
        }}
        {...args}
      />
      <div style={{ padding: '1rem', backgroundColor: '#e0e0e0' }}>Right Content</div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const divider = basicDividerTest(canvasElement);
    expect(divider).toHaveAttribute('data-orientation', 'vertical');
    const computed = getComputedStyle(divider);
    expect(computed.backgroundColor).toBe('rgb(255, 0, 0)');
    expect(computed.margin).toBe(theme.spacing.md);
  },
};
