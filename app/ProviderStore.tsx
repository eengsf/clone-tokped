'use client';

import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { store } from '@/store/index';

interface ProviderStoreProps {
  children: ReactNode;
}

const ProviderStore = ({ children }: ProviderStoreProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderStore;
