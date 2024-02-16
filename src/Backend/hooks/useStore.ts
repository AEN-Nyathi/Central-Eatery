import { Context } from '@Context/index';
import { useContext } from 'react';

export const useStore = () => useContext<StoreType | undefined>(Context) as StoreType ;
