export type Props = {
  id: string;
  status: 'Alive' | 'Dead' | 'unknown';
  name: string;
  onPress?: (id: string) => void;
};
