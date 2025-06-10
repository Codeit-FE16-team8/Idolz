import { postData } from './index';

export async function createVote(idolId) {
  return await postData('votes', { idolId });
}
