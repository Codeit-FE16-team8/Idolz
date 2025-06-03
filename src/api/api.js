const BASE_URL = import.meta.env.VITE_BASE_URL;

async function fetchData(endpoint, params = {}) {
  const query = new URLSearchParams(params).toString();
  const url = `${BASE_URL}/${endpoint}?${query}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`${endpoint} 데이터를 불러오는데 실패했습니다.`);
      return [];
    }
    const { list } = await response.json();
    return list;
  } catch (error) {
    console.error(`${endpoint} 요청 중 오류 발생:`, error);
    return [];
  }
}

// 전체 아이돌 정보 가져오기
export async function getAllIdols() {
  return await fetchData('idols', { pageSize: 100 });
}

// 전체 후원 정보 가져오기
export async function getAllDonations() {
  return await fetchData('donations', { pageSize: 100 });
}

// // 아이돌 등록 (POST)
// export async function createIdol(idolData) {
//   const url = buildUrl('idols');
//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(idolData),
//     });
//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(`아이돌 등록 실패: ${response.status} ${errorText}`);
//     }
//     const result = await response.json();
//     console.log('아이돌 등록 성공:', result);
//     return result;
//   } catch (error) {
//     console.error('아이돌 등록 에러:', error);
//     return null;
//   }
// }

// 후원 등록 (POST)
export async function createDonation(donationData) {
  try {
    const response = await fetch('donations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(donationData),
    });
    if (!response.ok) {
      throw new Error('후원 등록 실패');
    }
    const result = await response.json();
    console.log('후원 등록 성공:', result);
    return result;
  } catch (error) {
    console.error('후원 등록 에러:', error);
    return null;
  }
}
