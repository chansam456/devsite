import { useEffect, useState } from 'react';

// function to check local storage for preference
const useLocalStorage = (key: string, initialValue: boolean) => { 
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: boolean | Function) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
};

const useDarkMode = () => {
  const systemThemePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [enabled, setEnabled] = useLocalStorage('dark-theme', systemThemePreference);
  const isEnabled = enabled;

  useEffect(() => {
    const className = 'dark';
    const htmlClass = window.document.documentElement.classList;

    isEnabled ? htmlClass.add(className) : htmlClass.remove(className);
  }, [isEnabled]);

  return [enabled, setEnabled];
};

export default useDarkMode;