import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  const results = [];
  try {
    results.push(await uploadPhoto());
  } catch (Error) {
    results.push(null);
  }
  try {
    results.push(await createUser());
  } catch (Error) {
    results.push(null);
  }
  return {
    photo: results[0],
    user: results[1],
  };
}
