import { useCallback, useEffect, useState } from 'react';
import { storage } from '@oapis/common';

export const useStorageState = <Data, Key extends string = string>(
  key: Key,
  initialState?: Data,
) => {
  const [state, setState] = useState<Data>(
    storage.getItem<Data, Key>(key, initialState),
  );

  useEffect(() => {
    storage.setItem(key, state);
  }, [state]);

  const toggle = useCallback(() => {
    setState((old) => {
      if (typeof old === 'boolean') {
        return !old as Data;
      }
      return old;
    });
  }, [setState]);

  return [state, setState, toggle] as const;
};
