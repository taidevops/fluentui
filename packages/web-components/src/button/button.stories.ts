import { fluentButton } from './index';

export default {
  title: 'Components/Button',
  component: fluentButton,
};

const ButtonTemplate = ({ appearance, disabled, label }) =>
  `
    <fluent-button
      ${disabled ? 'disabled' : ''}
      ${appearance ? `appearance="${appearance}"` : ''}
    >
      ${label}
    </fluent-button>
  `;
