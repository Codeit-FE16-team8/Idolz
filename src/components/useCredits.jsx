// import { useEffect, useState } from 'react';
// import { CLIENT_STATE_KEYS } from './config';

// function useCredits() {
//   const localStorageKey = CLIENT_STATE_KEYS.credits;

//   // 초기값 로딩
//   const [credits, setCredits] = useState(() => {
//     const stored = localStorage.getItem(localStorageKey);
//     return stored !== null ? Number(stored) : 0;
//   });

//   // credits가 변경될 때마다 localStorage에 저장
//   useEffect(() => {
//     localStorage.setItem(localStorageKey, credits);
//   }, [credits, localStorageKey]);

//   function newCredits() {
//     setCredits(0);
//   }

//   function chargeCredits(amount) {
//     setCredits((prev) => prev + amount);
//   }

//   function payCredits(amount) {
//     if (credits < amount) {
//       throw Error(`Not Enough Credits: requested to use ${amount} but currently has ${credits}`);
//     }
//     setCredits((prev) => prev - amount);
//   }

//   return [credits, chargeCredits, payCredits, newCredits];
// }

// export default useCredits;
