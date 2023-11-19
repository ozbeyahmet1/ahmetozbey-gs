import type { Meta, StoryObj } from "@storybook/react";

import { Provider } from "react-redux";
import { store } from "../../redux";
import "../../styles/globals.scss";
import CheckboxComponent from "./index";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Checkbox",
  component: CheckboxComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  argTypes: {
    onChange: { action: "onChange" }, // Register the onChange action for monitoring in Storybook
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof CheckboxComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Checkbox: Story = {
  args: {
    checked: true,
    label: "",
    onChange: () => console.log(""),
  },
};
