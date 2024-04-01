import type NetworkData from 'common/ui/components/NetworkData';

export type NetworkData<T> =
  | {
      type: 'data';
      data: T;
    }
  | {
      type: 'loading';
    }
  | {
      type: 'error';
      message: string;
    };

export const mapNetworkData = <T, R>(
  data: NetworkData<T>,
  mapper: (data: T) => R,
): NetworkData<R> => {
  if (data.type === 'loading') {
    return {type: 'loading'};
  }
  if (data.type === 'error') {
    return {type: 'error', message: data.message};
  }
  return {
    type: 'data',
    data: mapper(data.data),
  };
};

export const unwrapNetworkData = <T>(
  data: NetworkData<T>,
  defaultValue: T,
): T => {
  if (data.type === 'loading' || data.type === 'error') {
    return defaultValue;
  }
  return data.data;
};
