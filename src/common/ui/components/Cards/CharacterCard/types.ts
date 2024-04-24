export type Props = {
  id: string;
  status: string;
  name: string;
  image?: string;
  onPress?: (id: string) => void;
};
