import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DashboardStat } from '../components/atoms/DashboardStat';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Yard Design System/DashboardStat',
  component: DashboardStat,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DashboardStat>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DashboardStat> = (args) => <DashboardStat {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  icon:undefined,
  increase:true,
  count:800,
  label:"전체 유저 수",
  backgroundColor:"bg-yellow-200",
  variation:40,
};