function success() {
  console.log('Got a response from the API');
  return { status: 200, body: 'Success' };
}
function fail() {
  console.log('Got a response from the API');
  return Error();
}
export default function handleResponseFromAPI(promise) {
  promise.then(success, fail);
}
