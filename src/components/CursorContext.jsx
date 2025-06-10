import { useState, useEffect, useContext, createContext } from 'react';

const CursorContext = createContext();

export function CursorProvider({ children }) {
  const [cursor, setCursor] = useState(null);

  useEffect(() => {
    if (cursor) {
      document.body.style.cursor = `url(${cursor.url}),auto`;
    } else {
      document.body.style.cursor = 'auto';
    }
  }, [cursor]);

  return <CursorContext.Provider value={{ cursor, setCursor }}>{children}</CursorContext.Provider>;
}

export function useCursor() {
  return useContext(CursorContext);
}
