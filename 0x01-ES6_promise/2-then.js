function success() {
  return { status: 200, body: 'success' };
}
function fail() {
  return new Error();
}
function final() {
  console.log('Got a response from the API');
}
export default function handleResponseFromAPI(promise) {
  return promise.then(success).catch(fail).finally(final);
}
