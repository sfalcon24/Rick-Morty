import type {NetworkData} from 'common/domain/NetworkData';

export type Props<T> = {
  data: NetworkData<T>;
  renderData: (data: T) => JSX.Element;
  onRefetch: () => Promise<void>;
};
