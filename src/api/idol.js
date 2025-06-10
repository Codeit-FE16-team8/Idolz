import { fetchData } from './index';

export async function getAllIdols() {
  return await fetchData('idols', { pageSize: 100 });
}
