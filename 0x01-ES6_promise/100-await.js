import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  const results = [];
  try {
    results.push(await uploadPhoto());
	results.push(await createUser());
  } catch (Error) {
    results.length = 0;
	results.push(null);
	results.push(null);
  }
  return {
    photo: results[0],
    user: results[1],
  };
}
