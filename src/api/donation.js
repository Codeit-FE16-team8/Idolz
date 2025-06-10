import { fetchData, postData, putData } from './index';

export async function getAllDonations() {
  return await fetchData('donations', { pageSize: 100 });
}

export async function createDonation(donationData) {
  return await postData('donations', donationData);
}

export async function contributeDonation(donationId, amount) {
  return await putData(`donations/${donationId}/contribute`, { amount });
}
