import React from 'react';
import Text from '.';

export default {
  title: 'Text',
  component: Text,
};

export const Headline1 = () => <Text variant="headline1">Prueba</Text>;

export const Headline2 = () => <Text variant="headline2">Prueba</Text>;

export const Headline3 = () => <Text variant="headline3">Prueba</Text>;

export const Headline3Regular = () => (
  <Text variant="headline3-regular">Prueba</Text>
);

export const Body20Bold = () => <Text variant="body20-bold">Prueba</Text>;

export const Body20Regular = () => <Text variant="body20-regular">Prueba</Text>;

export const Body17Semibold = () => (
  <Text variant="body17-semibold">Prueba</Text>
);

export const Body17Regular = () => <Text variant="body17-regular">Prueba</Text>;

export const Body15SemiBold = () => (
  <Text variant="body15-semibold">Prueba</Text>
);

export const LargeTitle = () => <Text variant="large-title">Prueba</Text>;

export const Caption13Regular = () => (
  <Text variant="caption13-regular">Prueba</Text>
);

export const Caption11Regular = () => (
  <Text variant="caption11-regular">Prueba</Text>
);

export const Tagline15Tag = () => <Text variant="tagline15-tag">Prueba</Text>;

export const Tagline13Tag = () => <Text variant="tagline13-tag">Prueba</Text>;

export const Tagline11Tag = () => <Text variant="tagline11-tag">Prueba</Text>;
