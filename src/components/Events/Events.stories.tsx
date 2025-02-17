import { ComponentMeta, ComponentStory } from '@storybook/react';
import { events } from '../../lib/data/events';
import Events from '.';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Events',
  component: Events,
} as ComponentMeta<typeof Events>;

const Template: ComponentStory<typeof Events> = (args) => <Events {...args} />;
export const Default = Template.bind({});

Default.args = {
  events,
};
