import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  const results = [];
  results.push(await uploadPhoto());
  results.push(await createUser());
  return {
    photo: results[0],
    user: results[1],
  };
}
