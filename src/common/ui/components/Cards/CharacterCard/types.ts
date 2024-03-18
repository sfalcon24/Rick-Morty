export type Props = {
  id: string;
  status: 'Alive' | 'Dead' | 'unknown';
  name: string;
  image?: string;
  onPress?: (id: string) => void;
};
