import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/UI/Divider',
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof meta>;

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
          margin: '1rem 0',
        }}
        {...args}
      />
      <div style={{ padding: '1rem', backgroundColor: '#e0e0e0', marginTop: '1rem' }}>
        Content Below
      </div>
    </div>
  ),
};

export const VerticalDivider: Story = {
  render: (args) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
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
          margin: '0 1rem',
        }}
        {...args}
      />
      <div style={{ padding: '1rem', backgroundColor: '#e0e0e0' }}>Right Content</div>
    </div>
  ),
};
