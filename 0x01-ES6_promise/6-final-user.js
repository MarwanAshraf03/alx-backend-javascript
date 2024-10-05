import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  let upload;
  let signup = await signUpUser(fileName, lastName);
  signup = { status: 200, value: signup };
  //   console.log(signup);
  try {
    upload = await uploadPhoto(fileName);
    upload = { status: 200, value: upload };
    // console.log(upload);
  } catch (Error) {
    upload = { status: 404, value: Error };
    // console.log("bomb!")
  }
  return [signup, upload];
}
