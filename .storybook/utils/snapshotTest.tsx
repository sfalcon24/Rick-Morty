import type { Args, Story } from '@storybook/react-native';
import renderer from 'react-test-renderer';
import RootDecorator from './decorators/RootDecorator';
import React from 'react';

export const snapshotTest = (name: string, story: Story<Args>) => {
  it(`renders ${name} story`, () => {
    const Component = () => RootDecorator(() => story(story.args ?? {} as any, {} as any) as any, {} as any) as any
    const tree = renderer
      .create(<Component />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
};
