import handleResponseFromAPI from "./2-then";

const promise1 = Promise.resolve();
handleResponseFromAPI(promise1).then(result => {
  console.log(result);  // Logs the resolved value { status: 200, body: 'Success' }
});

const promise2 = Promise.reject();
handleResponseFromAPI(promise2).then(result => {
  console.log(result);  // Won't be reached, but adding it won't hurt
}).catch(error => {
  console.log(error);   // Logs the error returned by `fail()`
});
