import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  let upload;
  const signup = await signUpUser(fileName, lastName);
  //   console.log(signup);
  try {
    upload = await uploadPhoto(fileName);
    // console.log(upload);
  } catch (Error) {
    // console.log("bomb!")

  }
  return { signup, upload };
}
