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
