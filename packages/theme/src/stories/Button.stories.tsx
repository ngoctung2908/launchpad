import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonMode } from '../components';
import Buttons from '../buttons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    mode: {
      options: Object.keys(ButtonMode),
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = ({ ...args }) => (
  <React.Fragment>
    {/* <Button {...args} /> */}
    <Buttons />
  </React.Fragment>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  mode: ButtonMode.primary,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: ButtonMode.secondary,
  label: 'Button secondary',
};
