import { createIdol, createDonation } from './api';

const idols = [
  {
    profilePicture:
      'https://i.namu.wiki/i/ytOVMp7iHDPNBoBuaXer8GoE6lMDDQxaXUM-OLjVJCeVxibrqA_KDPYH6CYYRNyJc64CqP0mZsBdxSGd5OFZ_SMrOA_fqz5uLBwpH2Z8nmfTEzCqKf0Sop4qB46SE3EXuy5vDzIxjmJDKlwiUtLQTA.webp',
    group: '보이넥스트도어',
    gender: 'male',
    name: '운학',
  },
  {
    profilePicture:
      'https://i.namu.wiki/i/VZhkeEGjkRd50KEwEcnnA4f8Vr3QQJpyCWLj1iTixDREPx5ShlB7WLnEEVEHbiTTR1X38SmKzUkWe9d__jZQNVEZq1z0DVzfT43msDH5GjTZeLrJL02h-IHtGUqeSar7tzizvFXIO20CtbU9IJIN4A.webp',
    group: '데이식스',
    gender: 'male',
    name: '성진',
  },
];

const donations = [
  {
    deadline: '2025-09-01T03:57:13.002Z',
    targetDonation: 20000,
    subtitle: '용산역 3번 출구',
    title: '아일릿 결성일 2주년',
    idolId: 5205,
  },
];

async function postAll() {
  const idolMap = {};
  const registeredIdols = [];
  const registeredDonations = [];

  // 아이돌 등록
  for (const idol of idols) {
    try {
      const result = await createIdol(idol.group, idol);
      if (result?.id) {
        const key = `${idol.group}-${idol.name}`;
        idolMap[key] = result.id;
        registeredIdols.push(result); // ✅ 등록 결과 저장
      } else {
        console.warn('등록 실패 (ID 없음):', idol);
      }
    } catch (error) {
      console.error('아이돌 등록 실패:', idol, error);
    }
  }

  // 후원 등록
  for (const donation of donations) {
    try {
      const result = await createDonation(donation.group, donation);
      if (result?.id) {
        const key = `${donation.group}-${donation.name}`;
        idolMap[key] = result.id;
        registeredDonations.push(result); // ✅ 등록 결과 저장
      } else {
        console.warn('등록 실패 (ID 없음):', donations);
      }
    } catch (error) {
      console.error('아이돌 등록 실패:', donations, error);
    }
  }

  return { idols: registeredIdols, donations: registeredDonations };
}

export default postAll;
