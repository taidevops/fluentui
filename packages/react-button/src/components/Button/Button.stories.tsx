import * as React from 'react';
import { Meta } from '@storybook/react';
import bestPracticesMd from './ButtonBestPractices.md';

export default {
  title: 'Component/Button',
  parameters: {
    docs: {
      description: {
        component: [bestPracticesMd].join('\n'),
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;
