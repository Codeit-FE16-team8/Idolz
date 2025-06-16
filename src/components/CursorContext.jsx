import { useState, useEffect, useContext, createContext } from 'react';

const CursorContext = createContext();

export function CursorProvider({ children }) {
  const [cursor, setCursor] = useState(null);

  useEffect(() => {
    //새로 로드 될 시 커서를 유지하기 위함
    const saveCursor = localStorage.getItem('cursor');
    if (saveCursor) {
      try {
        setCursor(JSON.parse(saveCursor)); //로컬스토리지는 문자열만 저장 가능함으로 불러올시 JSON.parse를 통해 객체로 재변환
      } catch (e) {
        console.log('커서로드오류', e);
      }
    }
  }, []);

  useEffect(() => {
    if (cursor) {
      document.body.style.cursor = `url(${cursor.url}),auto`;
      localStorage.setItem('cursor', JSON.stringify(cursor)); //로컬스토리지는 문자열만 저장 가능함으로
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
