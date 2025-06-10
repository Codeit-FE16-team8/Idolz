//base_url: 정보보호를 위해 환경변수에서 가져옴
const BASE_URL = import.meta.env.VITE_BASE_URL;

/**
 *
 * @param {string} endpoint - 요청할 API 경로
 * @param {object} params - 쿼리 파라미터 (기본값: 빈 객체)
 * @returns {Promise<array>} - API로부터 받아온 list 데이터 반환
 */
export async function fetchData(endpoint, params = {}) {
  //URL 파라미터 문자열로 변환
  const query = new URLSearchParams(params).toString();
  const url = `${BASE_URL}/${endpoint}?${query}`;

  try {
    //GET 요청 수행
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`[GET] ${endpoint} 실패`);
      return [];
    }

    // JSON 데이터를 파싱해 list 반환
    const { list } = await response.json();
    return list;
  } catch (error) {
    console.error(`[GET] ${endpoint} 오류:`, error);
    return [];
  }
}

/**
 * [POST] 요청 함수
 * @param {string} endpoint - API 경로 (예: 'donations')
 * @param {object} data - 요청에 포함할 데이터 객체
 * @returns {Promise<object|null>} - 응답 데이터 또는 null
 */
export async function postData(endpoint, data) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error(`${endpoint} POST 실패`);

    return await response.json();
  } catch (error) {
    console.log(`[POST] ${endpoint} 오류:`, error);
    return null;
  }
}

/**
 * [PUT] 요청 함수
 * @param {string} endpoint  - API 경로 (예: 'donations/123/contribute')
 * @param {object} data - 요청에 포함할 데이터 객체
 * @returns {Promise<object|null>} - 응답 데이터 또는 null
 */
export async function putData(endpoint, data) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error(`${endpoint} PUT 실패`);

    return await response.json();
  } catch (error) {
    console.error(`[PUT] ${endpoint} 오류:`, error);
    return null;
  }
}
