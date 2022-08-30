import {InMemoryCache} from '@apollo/client';
import setupMMKVStorage from 'apollo/storage';
import {MMKVStorageWrapper, persistCacheSync} from 'apollo3-cache-persist';

const setupCache = () => {
  const cache = new InMemoryCache();
  const mmkvStorage = setupMMKVStorage();
  const storage = new MMKVStorageWrapper(mmkvStorage);
  persistCacheSync({cache, storage});
  return cache;
};

export default setupCache;
