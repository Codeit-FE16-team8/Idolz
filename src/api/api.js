//base_url: 정보보호를 위해 환경변수에서 가져옴
const BASE_URL = import.meta.env.VITE_BASE_URL;

/**
 *
 * @param {string} endpoint - 요청할 API 경로
 * @param {object} params - 쿼리 파라미터 (기본값: 빈 객체)
 * @returns {Promise<array>} - API로부터 받아온 list 데이터 반환
 */
async function fetchData(endpoint, params = {}) {
  //URL 파라미터 문자열로 변환
  const query = new URLSearchParams(params).toString();
  const url = `${BASE_URL}/${endpoint}?${query}`;

  try {
    //GET 요청 수행
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`${endpoint} 데이터를 불러오는데 실패했습니다.`);
      return [];
    }

    // JSON 데이터를 파싱해 list 반환
    const { list } = await response.json();
    return list;
  } catch (error) {
    console.error(`${endpoint} 요청 중 오류 발생:`, error);
    return [];
  }
}

/**
 * 전체 아이돌 정보를 가져오는 함수 (GET)
 * @returns {Promise<array>} - 아이돌 정보 리스트
 */
export async function getAllIdols() {
  return await fetchData('idols', { pageSize: 100 });
}

/**
 * 전체 후원 정보를 가져오는 함수 (GET)
 * @returns {Promise<array>} - 후원 정보 리스트
 */
export async function getAllDonations() {
  return await fetchData('donations', { pageSize: 100 });
}

/**
 * 새로운 후원을 등록하는 함수 (POST)
 * @param {object} donationData - 후원 등록 정보 (예: {deadline: "2025-07-09T23:00:00.000Z", targetDonation: 10000, subtitle: "강남역 광고", title: "00 생일 광고", idolId: 777})
 * @returns {Promise<object|null>} - 등록된 후원 정보 또는 null
 */
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

/**
 * 후원하기 버튼을 눌렀을 때 기여(금액 추가)하는 함수 (PUT)
 * 주의: 이미 등록된 기여 금액은 삭제되지 않고 누적됩니다.
 * @param {string} donationId - 후원 ID
 * @param {number} amount - 기여할 금액 (예: 2000)
 * @returns {Promise<object|null>} - 기여 결과 또는 null
 */
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

/**
 * 투표하기 버튼을 통해 아이돌에게 투표하는 함수 (POST)
 * 주의: 한 번에 1표씩만 투표가 가능합니다.
 * @param {number} idolId - 아이돌 ID (예: 777)
 * @returns {Promise<object|null>} - 등록된 투표 정보 또는 null
 */
export async function createVote(idolId) {
  try {
    const response = await fetch(`${BASE_URL}/votes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idolId }),
    });

    if (!response.ok) {
      throw new Error('투표 실패');
    }

    const result = await response.json();
    console.log('투표 성공:', result);
    return result;
  } catch (error) {
    console.error('투표 중 에러 발생:', error);
    return null;
  }
}
