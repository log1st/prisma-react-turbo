import { useContext } from 'react';
import { ToastsContext } from '@/providers';

export const useToasts = () => useContext(ToastsContext);
