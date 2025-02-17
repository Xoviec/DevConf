import { ComponentMeta, ComponentStory } from '@storybook/react';
import Home from '../pages';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;
export const Default = Template.bind({});

Default.args = {};
