import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textarea } from '../textarea';

export default {
  title: 'Example/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => {
  const [value, setValue] = useState('');

  return (
    <div style={{ width: 400, maxWidth: '100%' }}>
      <Textarea
        {...args}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};
export const Regular = Template.bind({});
Regular.args = {
  placeholder: 'Enter your message',
  disabled: false,
  minRow: 3,
  maxLimit: 100,
};
Regular.parameters = {};
