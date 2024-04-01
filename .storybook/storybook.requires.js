/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./src",
    files: "**/*.stories.?(ts|tsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:src(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx)?)$",
  },
];

import "@storybook/addon-ondevice-notes/register";
import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-backgrounds/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./src/common/ui/components/Button/index.stories.tsx": require("../src/common/ui/components/Button/index.stories.tsx"),
    "./src/common/ui/components/Cards/CharacterCard/index.stories.tsx": require("../src/common/ui/components/Cards/CharacterCard/index.stories.tsx"),
    "./src/common/ui/components/Cards/LocationCard/index.stories.tsx": require("../src/common/ui/components/Cards/LocationCard/index.stories.tsx"),
    "./src/common/ui/components/Header/index.stories.tsx": require("../src/common/ui/components/Header/index.stories.tsx"),
    "./src/common/ui/components/Icons/index.stories.tsx": require("../src/common/ui/components/Icons/index.stories.tsx"),
    "./src/common/ui/components/ScreenState/index.stories.tsx": require("../src/common/ui/components/ScreenState/index.stories.tsx"),
    "./src/common/ui/components/Text/index.stories.tsx": require("../src/common/ui/components/Text/index.stories.tsx"),
    "./src/common/ui/components/TextButton/index.stories.tsx": require("../src/common/ui/components/TextButton/index.stories.tsx"),
    "./src/views/Auth/Blank/index.stories.tsx": require("../src/views/Auth/Blank/index.stories.tsx"),
    "./src/views/Blank/index.stories.tsx": require("../src/views/Blank/index.stories.tsx"),
    "./src/views/Character/index.stories.tsx": require("../src/views/Character/index.stories.tsx"),
    "./src/views/One/index.stories.tsx": require("../src/views/One/index.stories.tsx"),
    "./src/views/Three/index.stories.tsx": require("../src/views/Three/index.stories.tsx"),
    "./src/views/Two/index.stories.tsx": require("../src/views/Two/index.stories.tsx"),
    "./src/views/Welcome/index.stories.tsx": require("../src/views/Welcome/index.stories.tsx"),
  };
};

configure(getStories, module, false);
