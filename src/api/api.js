const BASE_URL = import.meta.env.VITE_BASE_URL;

function buildGroupUrl(group, endpoint) {
  const encodedGroup = encodeURIComponent(group);
  return `${BASE_URL}/${encodedGroup}/${endpoint}`;
}

async function fetchGroupData(group, endpoint) {
  const url = buildGroupUrl(group, endpoint);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`${group}의 ${endpoint} 데이터를 불러오는데 실패했습니다.`);
      return [];
    }
    const { list } = await response.json();
    return list;
  } catch (error) {
    console.error(`${group}의 ${endpoint} 요청 중 오류 발생:`, error);
    return [];
  }
}

// 전체 아이돌 정보 가져오기
export async function getAllIdols(groupList) {
  const idolPromises = groupList.map((group) => fetchGroupData(group, 'idols'));
  const allIdols = await Promise.all(idolPromises);
  return allIdols.flat();
}

// 전체 후원 정보 가져오기
export async function getAllDonations(groupList) {
  const donationPromises = groupList.map((group) => fetchGroupData(group, 'donations'));
  const allDonations = await Promise.all(donationPromises);
  return allDonations.flat();
}

// 아이돌 등록 (POST)
export async function createIdol(group, idolData) {
  const url = buildGroupUrl(group, 'idols');
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...idolData, group }),
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`아이돌 등록 실패: ${response.status} ${errorText}`);
    }
    const result = await response.json();
    console.log('아이돌 등록 성공:', result);
    return result;
  } catch (error) {
    console.error('아이돌 등록 에러:', error);
    return null;
  }
}

// 후원 등록 (POST)
export async function createDonation(group, donationData) {
  const url = buildGroupUrl(group, 'donations');
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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
