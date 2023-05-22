/* eslint-disable import/no-extraneous-dependencies */
import type { ActionOptions } from '@storybook/addon-actions';
import { action } from '@storybook/addon-actions';

export const asyncAction =
  (name: string, options?: ActionOptions | undefined) => async (params?: any) =>
    action(name, options)(params);
