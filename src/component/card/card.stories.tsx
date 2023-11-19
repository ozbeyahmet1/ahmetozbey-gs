import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../../redux";
import "../../styles/globals.scss";
import CardComponent from "./index";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Card",
  component: CardComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    selectedColor: { control: "inline-radio", options: ["beige", "green", "white", "black", "blue"] },
    action: { control: "inline-radio", options: ["collects", "plants", "offsets"] },
    type: { control: "inline-radio", options: ["carbon", "plastic bottles", "trees"] },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof CardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Card: Story = {
  args: {
    action: "collects",
    active: true,
    amount: 1,
    id: 1,
    linked: true,
    selectedColor: "green",
    type: "carbon",
  },
};
