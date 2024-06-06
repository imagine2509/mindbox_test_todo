/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from 'react';

type UseSessionStorageProps = {
  key: string;
  defaultValue: any[];
};

export const useSessionStorage = ({
  key,
  defaultValue,
}: UseSessionStorageProps): [any[], (newValue: any[]) => void] => {
  const [storedValue, setStoredValue] = useState<any[]>(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      } else {
        window.sessionStorage.setItem(key, JSON.stringify(defaultValue));

        return defaultValue;
      }
    } catch (error) {
      throw new Error('Error reading from sessionStorage');
    }
  });

  const setValue = useCallback((newValue: any[]): void => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      throw new Error('Error writing to sessionStorage');
    }
    setStoredValue(newValue);
  }, [key])

  return [storedValue, setValue];
};
