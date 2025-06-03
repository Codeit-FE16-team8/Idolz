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

// 후원 등록 (POST) // 시간이 가능할 경우 구현해 볼
export async function createDonation(donationData) {
  try {
    const response = await fetch(`${BASE_URL}/donations`, {
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

// 후원 기여 (PUT) *한 번 값이 추가되면 삭제되지않고 쌓여갑니다.*
export async function contributeDonation(donationId, amount) {
  try {
    const response = await fetch(`${BASE_URL}/donations/${donationId}/contribute`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount }), // 예: { amount: 20000 }
    });

    if (!response.ok) {
      throw new Error('후원 기여 실패');
    }

    const result = await response.json();
    console.log('후원 기여 성공:', result);
    return result;
  } catch (error) {
    console.error('후원 기여 중 에러 발생:', error);
    return null;
  }
}
