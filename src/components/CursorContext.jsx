import { useState, useEffect, useContext, createContext } from 'react';

const CursorContext = createContext();

export function CursorProvider({ children }) {
  const [cursor, setCursor] = useState(null);

  useEffect(() => {
    const saveCursor = localStorage.getItem('cursor');
    if (saveCursor) {
      try {
        setCursor(JSON.parse(saveCursor));
      } catch (e) {
        console.log('커서로드오류', e);
      }
    }
  }, []);

  useEffect(() => {
    if (cursor) {
      document.body.style.cursor = `url(${cursor.url}),auto`;
      localStorage.setItem('cursor', JSON.stringify(cursor));
    } else {
      document.body.style.cursor = 'auto';
      localStorage.removeItem('cursor');
    }
  }, [cursor]);

  return <CursorContext.Provider value={{ cursor, setCursor }}>{children}</CursorContext.Provider>;
}

//커스텀훅 호출시 내부적으로 CursorContext에 저장된 값을 반환
export function useCursor() {
  return useContext(CursorContext);
}
