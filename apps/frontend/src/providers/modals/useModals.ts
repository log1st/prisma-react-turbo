import { useContext } from 'react';
import { ModalsContext } from '@/providers';

export const useModals = () => useContext(ModalsContext);
