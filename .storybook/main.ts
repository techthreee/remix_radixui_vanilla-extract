import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../app/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        // デフォルトでvite.config.tsの設定が読み込まれるのでstorybook用の設定ファイルを指定
        viteConfigPath: 'vite.storybook.config.ts',
      },
    },
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      // vanilla-extractを使える様にする
      plugins: [require("@vanilla-extract/vite-plugin").vanillaExtractPlugin()]
    });
  }
};
export default config;
