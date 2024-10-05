import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  return new Promise((resolve, reject) => {
    Promise.all([uploadPhoto(), createUser()])
      .then((values) => {
        resolve(console.log(values[0].body, values[1].firstName, values[1].lastName));
      })
      .catch(() => { reject(console.log('Signup system offline')); });
  });
}
